  const autoprefixer = require('autoprefixer');
  const pxtoviewport = require('postcss-px-to-viewport');

  module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/', // 讲真的，这里的URL前后两边加不加斜杠都一个样
    outputDir: "dist/app", // 不要怕，这里是将资源输出到 dist/app 下面
    productionSourceMap: false, // 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
    devServer: {
      port: 80,
      disableHostCheck: true, // 关闭host检查，方便本地测试
      proxy: {
        "/netbus": {
          // target: "http://192.168.0.100:8080"
          target: "http://192.168.49.184/",
        },
        "/config": {
          target: 'http://192.168.49.184/app/'
        },
        "/mobile": {
          target: 'http://192.168.49.184/netbus'
        },
        "/sysparam": {
          target: 'http://192.168.49.184/netbus'
        }
      }
    },
    // vw适配
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            autoprefixer(),
            pxtoviewport({
              viewportWidth: 375
            })
          ]
        }
      },
    },
  };