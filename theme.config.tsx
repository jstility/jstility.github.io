/**
 * Nextra theme configuration for JStility homepage.
 * Shares the same design language as tship documentation.
 */
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <strong>@jstility</strong>,
  project: {
    link: 'https://github.com/jstility',
  },
  docsRepositoryBase: 'https://github.com/jstility/jstility.github.io/tree/main',
  footer: {
    text: `Copyright © ${new Date().getFullYear()} JStility`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – JStility',
      description: 'JStility is an open-source organization building useful, smart, and simple libraries for everyday development.',
    };
  },
  head: (
    <>
      <link rel="icon" href="https://raw.githubusercontent.com/jstility/.github/refs/heads/master/image/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  navigation: {
    prev: false,
    next: false,
  },
  darkMode: true,
  lastUpdated: false,
  getTimestamp: false,
  editLink: false,
  feedback: {
    content: null,
  },
  search: {
    component: null,
  },
};

export default config;
