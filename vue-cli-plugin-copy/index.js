const fsExtra = require('fs-extra')

module.exports = (api,projectOptions) =>{

  api.configureWebpack(webpackConfig =>{
    // webpackConfig.mode = 'development';
  })

  api.registerCommand('copy',args=>{
    console.log('publish!!!!')
    console.log(JSON.stringify(args))
    const webpackConfig = api.resolveWebpackConfig();//获取到当前webpack的配置
    const distDir = webpackConfig.output.path;
    fsExtra.copy(distDir,'D:\\online')
    console.log('webpackConfig:',webpackConfig)
  })
}