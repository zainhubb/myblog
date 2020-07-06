const moment = require('moment');
module.exports = {
    title: 'Utopia',
    base:'/myblog/',
    description: '随便玩玩',
    head: [
      ['link', { rel: 'icon',href: '/assets/favicon/favicon.ico' }],
      ['meta',{name: 'author',content:'zain'}]
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
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale('zh-cn')
            return moment(timestamp).format('lll')
          }
        }
      ]
    ]
  }