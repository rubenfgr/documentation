/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RubenFGR Documentación',
  tagline: 'Documentación para el desarrollo de aplicaciones multiplataforma y web, sistemas e iot',
  url: 'https://blogdeldesarrollador.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/rubenfgr/rubenfgr.github.io/b5205014cf5535234f31c5656431a493667a8121/assets/img/logotipo.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ruben FGR - Documentación',
      logo: {
        alt: 'RubenFGR',
        src: 'https://raw.githubusercontent.com/rubenfgr/rubenfgr.github.io/b5205014cf5535234f31c5656431a493667a8121/assets/img/logotipo.svg',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `
        Copyright © ${new Date().getFullYear()}, Rubén Francisco Gazquez Rosales<br/>
        Documentación para el desarrollo de aplicaciones multiplataforma y web, sistemas e iot<br/>
        Construido con Docusaurus v2
      `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
