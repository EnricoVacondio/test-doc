
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Novalab Guidelines',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/test-doc/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'master',
  organizationName: 'EnricoVacondio', // Usually your GitHub org/user name.
  projectName: '/test-doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'Configurations',
          blogSidebarCount: 'ALL',
          sortPosts: 'descending',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Novalab Guidelines',
        logo: {
          alt: 'Novalab Logo',
          src: 'img/novalab_logo.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Guidelines',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/services/intro',
            label: 'Services',
            position: 'left',
            activeBaseRegex: `/services/`,
          },
          {
            to: '/blog',
            label: 'Configurations',
            position: 'left',
          },
          {
            to: '/icons/intro',
            label: 'Icons',
            position: 'left',
            activeBaseRegex: `/icons/`,
          },
        ],
        hideOnScroll: false,
      },
    }),
  
    plugins: [
      async function tailwindCssPlugin() {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require.resolve("tailwindcss"));
            postcssOptions.plugins.push(require.resolve("autoprefixer"));
            return postcssOptions;
          },
        };
      },
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'services',
          path: 'services',
          routeBasePath: 'services',
          sidebarPath: require.resolve('./sidebars.js'),
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'icons',
          path: 'icons',
          routeBasePath: 'icons',
          sidebarPath: require.resolve('./sidebars.js'),
        }, 
      ]
    ],
};

module.exports = config;
