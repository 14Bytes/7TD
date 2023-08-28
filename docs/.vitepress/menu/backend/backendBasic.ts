// write your menu in here

const backendBasicMenu = [
  {
    text: 'Java开发',
    collapsed: true,
    items: [
      {
        text: '技术栈',
        link: '/backend/basic/java/awesome',
      },
      {
        text: '日志规范',
        link: '/backend/basic/java/logguide',
      },
      {
        text: '编码规范',
        link: '/backend/basic/java/styleguide',
      },
    ],
  },
  {
    text: 'PHP开发',
    collapsed: true,
    items: [
      {
        text: '技术栈',
        link: '/backend/basic/php/awesome',
      },
      {
        text: 'PHP和HTML混合编码语法',
        link: '/backend/basic/php/php-html-hybrid',
      },
      {
        text: 'PHP实用工具库',
        link: '/backend/basic/php/php-helper',
      },
      {
        text: 'Yii2编码规范',
        link: '/backend/basic/php/yii2-code-style',
      },
      {
        text: 'Codeigniter3编码规范',
        link: '/backend/basic/php/codeigniter3-code-style',
      },
    ],
  },
  {
    text: 'Nodejs开发',
    collapsed: true,
    items: [
      {
        text: '技术栈',
        link: '/backend/basic/nodejs/awesome',
      },
    ],
  },
  {
    text: 'Lua开发',
    collapsed: true,
    items: [
      {
        text: '🍬 实战应用',
        link: '/backend/basic/lua/actual-combat',
      },
    ],
  },
]
export default backendBasicMenu
