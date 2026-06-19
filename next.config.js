/**
 * Next.js configuration for JStility homepage.
 * Uses Nextra for consistent documentation theme.
 */
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default withNextra(nextConfig);
