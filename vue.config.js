const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    // proxy: {
    //   '/api': { 
    //     target: "sftp://vbn1424.cafe24.com",
    //     changeOrigin: true,
    //   }, 
    // },
  },

})