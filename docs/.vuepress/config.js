const moment = require('moment');
const headcfg = require('./config/head')
const themecfg = require('./config/theme')
const plugincfg = require('./config/plugin')
module.exports = {
  title: 'Utopia',
  base: '/myblog/',
  description: '随便玩玩',
  head: headcfg,
  themeConfig: themecfg,
  plugins: plugincfg
}