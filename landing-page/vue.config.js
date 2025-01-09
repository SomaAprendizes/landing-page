const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

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
    ],
  },

  chainWebpack: config => {
    if (config.plugins.has('preload')) {
      config.plugin('preload').tap(options => {
        options[0].include = 'initial'; 
        return options;
      });
    }

    if (config.plugins.has('prefetch')) {
      config.plugin('prefetch').tap(options => {
        options[0].fileBlacklist = [/\.map$/, /hot-update\.js$/];
        return options;
      });
    }

    config.optimization.splitChunks({
      chunks: 'all',
      // maxSize: 250000,
    });
  },

  transpileDependencies: true,

  productionSourceMap: false,
});
