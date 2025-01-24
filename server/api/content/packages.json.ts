import type { Package } from '@/types/package'
import { toPackageLogo } from '@/utils/package'
import { packages } from '~/server/content/packages'

export default defineEventHandler(async () => {
  // console.log('Fetching packages...')
  // console.log(event)
  // const packages = await serverQueryContent<PackageContent>(event).where({ _path: /^\/packages\// }).find()
  // console.log(packages)

  const populatedPackages = await Promise.all(
    packages.map(async (pkg) => {
      const [stars, monthlyDownloads, contributors, packageJson] = await Promise.all([
        fetchStars(pkg.github.owner, pkg.github.repo),
        pkg.npm?.name ? fetchMonthlyDownloads(pkg.npm.name) : null,
        fetchContributors(pkg.github.owner, pkg.github.repo),
        pkg.npm?.name ? fetchPackageJson(pkg.npm.name) : null,
      ])
      // Be careful. Never break compatibility since 3rd party apps might rely on this data.
      return {
        id: pkg.title.toLowerCase(),
        title: pkg.title,
        description: pkg.description,
        stars,
        monthlyDownloads,
        contributors: contributors.length,
        path: pkg.title,
        url: `https://unjs.io${pkg.title}`,
        npm: pkg.npm?.name
          ? {
              ...pkg.npm,
              dependencies: Object.keys(packageJson?.dependencies || {}),
              devDependencies: Object.keys(packageJson?.devDependencies || {}),
            }
          : undefined,
        logoPath: toPackageLogo(pkg.title),
        logoUrl: `https://unjs.io${toPackageLogo(pkg.title)}`,
      } satisfies Package
    },
    ),
  )

  return populatedPackages
})
