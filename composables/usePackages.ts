import MiniSearch from 'minisearch'
import type { Repo } from '~/types'

export function usePackages() {
  const fields = ['path', 'title', 'description', 'stars', 'monthlyDownloads', 'contributors']
  const miniSearch = new MiniSearch({
    idField: 'title',
    fields: ['title', 'description'],
    storeFields: fields,
    searchOptions: {
      prefix: true,
      fuzzy: 0.4,
      boost: {
        title: 2,
        description: 1,
      },
    },
  })

  const hiddenRepos = new Set([
    '.github',
    'uni-helper.github.io',
    'discussions',
    'website',
    'renovate-config',
    'stater-ts',
  ])

  const fetchPackages = async () => {
    const { data: packages, error } = await useFetch('https://ungh.cc/orgs/uni-helper/repos', {
      transform: ({ repos }: { repos: Repo[] }) => {
        return repos.filter(repo => !hiddenRepos.has(repo.name))
          .sort((a, b) => b.stars - a.stars) as unknown as Repo[]
      },
    })

    if (error.value) {
      throw createError({
        statusCode: error.value?.statusCode,
        statusMessage: error.value?.statusMessage,
        fatal: true,
      })
    }

    // miniSearch.addAll(packages.value)

    console.log(packages)
  }

  return {
    fetchPackages,
  }
}
