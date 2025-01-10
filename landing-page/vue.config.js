const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin'); // Corrigido aqui
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const glob = require('glob-all');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
      }),

      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|png|jpg|webp)$/,
        threshold: 10240,
        minRatio: 0.8, 
      }),

      new PurgeCSSPlugin({
        paths: glob.sync([
          path.join(__dirname, 'src/**/*.vue'),
          path.join(__dirname, 'src/**/*.js'),
          path.join(__dirname, 'public/index.html'),
        ]),
        safelist: {
          standard: [/^home$/, /^about$/, /^services$/, /^mainworks$/, /^strategy$/],
        },
      }),

      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    ],
  },

  chainWebpack: (config) => {
    if (config.plugins.has('preload')) {
      config.plugin('preload').tap((options) => {
        options[0].include = 'initial';
        return options;
      });
    }

    if (config.plugins.has('prefetch')) {
      config.plugin('prefetch').tap((options) => {
        options[0].fileBlacklist = [/\.map$/, /hot-update\.js$/, /\.png$/, /\.jpg$/, /\.webp$/];
        return options;
      });
    }

    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 20000,
      maxSize: 240000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    });
  },

  transpileDependencies: true,
  productionSourceMap: false,
});
