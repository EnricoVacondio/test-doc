
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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guidelines',
          },
          {
            to: '/blog',
            label: 'Configurations',
            position: 'left',
          }
        ],
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
    ],
};

module.exports = config;
