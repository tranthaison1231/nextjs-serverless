const path = require('path');
const withPlugins = require('next-compose-plugins');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { withSentryConfig } = require('@sentry/nextjs');
const TerserPlugin = require('terser-webpack-plugin');
const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  pwa: {
    disable:
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'preview' ||
      process.env.NODE_ENV === 'production',
    dest: 'public',
    register: true,
  },
});

const nextConfig = {
  images: {
    domains: [],
  },
  i18n,
  compress: true,
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  webpack: (config, { isServer, dev }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new UnusedWebpackPlugin({
        directories: [path.join(__dirname, 'src')],
        root: __dirname,
      }),
    );
    config.plugins.push(new AntdDayjsWebpackPlugin());
    if (isServer && !dev) {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            cache: true,
            terserOptions: {
              output: { comments: false },
              mangle: true,
              compress: true,
            },
            extractComments: false,
          }),
        ],
      };
    }
    return config;
  },
};

module.exports = withPlugins([withPWA, withBundleAnalyzer], nextConfig);
