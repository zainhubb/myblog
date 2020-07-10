const secret = require('./secret')
module.exports = {

  '@vuepress/last-updated':
  {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      const moment = require('moment')
      moment.locale('zh-cn')
      return moment(timestamp).format('LLL')
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'zainhubb',
    repo: 'myblog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret
  },
  '@vuepress/back-to-top': {}

  //PWA插件未启用
  //  
  //   '@vuepress/pwa':
  //   {
  //     serviceWorker: true,
  //     updatePopup: {
  //       message: "新东西来了,点一下获取呗!",
  //       buttonText: "获取"
  //     }
  //   }
  // 

}