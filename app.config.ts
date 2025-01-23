export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'uni-helper',
      description: '旨在增强 uni-app 系列产品的开发体验',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Uni Helper',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        {
          title: 'Packages',
          to: '/packages',
          showLinkIcon: false,
        },
        {
          title: 'Blog',
          to: '/blog',
          showLinkIcon: false,
        },
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/uni-helper',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2025',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/uni-helper',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
})
