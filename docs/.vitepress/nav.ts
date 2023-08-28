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
      text: '前端',
      items: [
        {
          text: 'Web',
          link: '/frontend/web/awesome',
          activeMatch: '/frontend/web/',
        },
        {
          text: 'Android',
          link: '/frontend/android/awesome',
          activeMatch: '/frontend/android/',
        },
        {
          text: 'iOS',
          link: '/frontend/ios/awesome',
          activeMatch: '/frontend/ios/',
        },
      ],
    },

    // 后端顶部导航
    {
      text: '后端',
      items: [
        {
          text: '基础后端',
          link: '/backend/basic/java/awesome',
          activeMatch: '/backend/basic/',
        },
        {
          text: '数据库设计',
          link: '/backend/database/checkdoc-for-dev',
          activeMatch: '/backend/database/'
        },
      ],
    },
    
    // 运维顶部导航
    {
      text: '运维',
      items: [
        {
          text: '基础运维',
          link: '/devops/basic/awesome',
          activeMatch: '/devops/basic/',
        },
        {
          text: '数据库',
          link: '/devops/database/memo',
          activeMatch: '/devops/database/',
        },
        {
          text: '中间件',
          link: '/devops/middleware/memo',
          activeMatch: '/devops/middleware/',
        },
        {
          text: 'CI&CD',
          link: '/devops/cicd/memo',
          activeMatch: '/devops/cicd/',
        },
        {
          text: '系统监控',
          link: '/devops/monitoring/monitorkeys',
          activeMatch: '/devops/monitoring/',
        },
      ],
    },
    
    // 系统设计顶部导航
    {
      text: '架构',
      items: [
        {
          text: '系统设计',
          link: '/system-design/protocol/restful',
          activeMatch: '/system-design/',
        },
      ],
    },
  ]
}

export default createNav
