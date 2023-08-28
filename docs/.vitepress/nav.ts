/**
 * 创建顶部导航
 */

const createNav = () => {
  return [
    {
      text: '综合',
      link: '/guide/practice/tool',
      activeMatch: '/guide/',
    },
    
    // 前端顶部导航
    {
      text: '',
      items: [
        {
          text: '',
          link: '',
          activeMatch: '',
        },
        {
          text: '',
          link: '',
          activeMatch: '',
        },
      ],
    },
  ]
}

export default createNav
