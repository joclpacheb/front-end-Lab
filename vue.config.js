module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/admin-one-vue-bulma-dashboard/'
    : '/',

  devServer: {
    proxy: {
      '/api*': {
        // Forward frontend dev server request for /api to django dev server
        /// target: 'http://localhost:8080/',
        target: 'http://localhost:8080/'
      }
    }
  },
  // Remove moment.js from chart.js
  // https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
  configureWebpack: config => {
    return {
      externals: {
        moment: 'moment'
      }
    }
  }
}
