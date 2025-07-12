import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bright mind',
  tagline: 'Knowledge',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://transang06.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documents/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'transang06', // Usually your GitHub org/user name.
  projectName: 'documents', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/transang06/documents/blob/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/transang06/documents/blob/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Bright mind',
      logo: {
        alt: 'Bright mind Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Development',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'backendSidebar',
              label: 'Backend',
            },
            {
              type: 'docSidebar',
              sidebarId: 'frontendSidebar',
              label: 'Frontend',
            },
            {
              type: 'docSidebar',
              sidebarId: 'cloudSidebar',
              label: 'Cloud',
            },
          ],
        },
        {
          label: 'AI & Data',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'aiSidebar',
              label: 'AI',
            },
            {
              type: 'docSidebar',
              sidebarId: 'dataSidebar',
              label: 'Data',
            },
          ],
        },
        {
          label: 'Languages',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'englishSidebar',
              label: 'English',
            },
            {
              type: 'docSidebar',
              sidebarId: 'japaneseSidebar',
              label: 'Japanese',
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/transang06/documents',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        //     {
        //       title: 'Community',
        //       items: [
        //         {
        //           label: 'Stack Overflow',
        //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //         },
        //         {
        //           label: 'Discord',
        //           href: 'https://discordapp.com/invite/docusaurus',
        //         },
        //         {
        //           label: 'X',
        //           href: 'https://x.com/docusaurus',
        //         },
        //       ],
        //     },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/transang06/documents',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bright mind`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en', 'vi'],
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  markdown: {
    mermaid: true,
  },
};

export default config;
