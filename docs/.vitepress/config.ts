import { defineConfig } from 'vitepress'
import createNav from './nav'
import createSidebar from './menu/index'

export default defineConfig({
  title: '世纪飞越技术部',
  titleTemplate: ':title|世纪飞越',
  description: 'Technical Teams Documents',
  lang: 'zh-CN',

  // 请求头
  head: [
    [
      'meta',
      {
        'http-equiv': 'cache-control',
        content: 'no-cache,no-store, must-revalidate',
      },
    ],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
  ],

  markdown: {
    // 修改代码高亮
    theme: 'vitesse-light',
    // 显示代码行数
    lineNumbers: true,

    // 设置文章锚点
    anchor: {
      slugify(str) {
        return encodeURIComponent(str)
      },
    },
  },

  // 更新时间配置
  lastUpdated: true,

  themeConfig: {
    logo: '/img/chinacici.svg',

    lastUpdated: {
      text: '最后更新',
    },
    // 编写页脚信息
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE" target="_blank">MIT License</a>.',
      copyright: 'Copyright © 2023 <a href="https://www.chinacici.com" target="_blank">www.chinacici.com</a>',
    },

    // 调用本地搜索
    search: {
      provider: 'local',
    },

    // 编辑按钮
    editLink: {
      pattern: 'https://gitlab.chinacici.com/boilerplate/vuepress-ttd/edit/master/docs/:path',
      text: 'Edit this page on Gitlab',
    },

    // gitlab icon
    socialLinks: [
      {
        icon: {
          svg: '<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" fill="#E24329"/><path d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" fill="#FC6D26"/><path d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z" fill="#FCA326"/><path d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z" fill="#FC6D26"/></svg>',
        },
        link: 'https://gitlab.chinacici.com/boilerplate/vuepress-ttd',
      },
    ],

    // 设置多级目录展开
    outline: 'deep',
    outlineTitle: '文章目录',

    // 翻页标签汉化
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    // todo: 自动生成修改
    nav: createNav(),
    // This sidebar gets displayed when user is
    sidebar: createSidebar(),

    shiki: {
      theme: 'github-dark',
    }
  },
})