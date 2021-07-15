module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: '[name].js',
    },
  },
  css: {
    extract: false,
  },
  productionSourceMap: false,
  indexPath: 'index_tpl.html',
};
