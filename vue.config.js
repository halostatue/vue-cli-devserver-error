const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    static: [
      {
        publicPath: `/test/`,
        directory: path.join(__dirname, 'public'),
      },
      {
        publicPath: `/test/`,
        directory: path.join(__dirname, 'public2'),
      },
    ],
  },
})
