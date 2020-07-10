const moment = require('moment');
module.exports = {
    title: 'Utopia',
    base:'/myblog/',
    description: '随便玩玩',
    head: [
      ['link', { rel: 'icon',href: '/assets/favicon/ico.png' }],
      ['meta',{name: 'author',content:'zain'}],
      // ['link', { rel: 'manifest', href: '/manifest.json' }],
      // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      // ['link', { rel: 'apple-touch-icon', href: '/assets/favicon/ico.png' }],
      // ['meta', { name: 'msapplication-TileImage', content: '/assets/favicon/ico.png' }],
      // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
      nav:[
        {
          text:'首页',
          link:'/'
        },
        {
          text:'小技巧',
          items:[
            {
              text:'npm,pip,brew换源',
              link:'/tips/changesource/'
            },
            {
              text:'下载网页视频',
              link:'/tips/videodownload/'
            },
            {
              text:'百度云不限速下载',
              link:'/tips/baidudownload/'
            }
          ]
        },
        {
          text:'个人笔记',
          items:[
            {
              text:'vuepress',
              link:'/notes/vuepress/'
            },
            {
              text:'git',
              link:'/notes/git/'
            },
            {
              text:'python虚拟环境',
              link:'/notes/pythonvenv/'
            }
          ]
        }
      ],
      lastUpdated: '最后更新', // string | boolean
    },
    plugins: {
        
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
            clientId: 'd4bd0e1bdc0b4c4e0985',
            clientSecret: '6ba8862c487aab21e0026b7132e660535844f78c',
          },
          '@vuepress/back-to-top':{}
        
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
  }