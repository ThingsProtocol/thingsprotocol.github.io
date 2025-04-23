import type { NextConfig } from "next";

const repoName = 'thingsprotocol.github.io';
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  assetPrefix = `/${repoName}/`
  basePath = `/${repoName}`
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
};

export default nextConfig;
