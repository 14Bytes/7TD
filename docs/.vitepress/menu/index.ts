// import your menu.js
// 综合
import guideMenu from './guide'

// 前端
import frontendWebMenu from './frontend/frontendWeb'
import frontendAndroidMenu from './frontend/frontendAndroid'
import frontendIosMenu from './frontend/frontendIos'

// 后端
import backendBasicMenu from './backend/backendBasic'
import backendDatabaseMenu from './backend/backendDatabase'

// 运维
  // 基础运维
import devopsMenu from './devops/devopsBasic'
  // 中间件
import middlewareMenu from './devops/middleware'
  // 数据库
import devopsDatabaseMeun from './devops/devopsDatabase'
  // CI&CD
import cicdMenu from './devops/cicd'
  // 系统监控
import monitoringMenu from './devops/monitoring'

// 系统设计
import systemDesignMenu from './systemDesign/systemDesign'

const createSidebar = () => {
  return {
    '/guide': guideMenu,
    
    // 前端
    '/frontend/web': frontendWebMenu,
    '/frontend/android': frontendAndroidMenu,
    '/frontend/ios': frontendIosMenu,
    
    // 后端
    '/backend/basic': backendBasicMenu,
    '/backend/database': backendDatabaseMenu,
    
    // 运维
    '/devops/middleware': middlewareMenu,
    '/devops/basic': devopsMenu,
    '/devops/cicd': cicdMenu,
    '/devops/database': devopsDatabaseMeun,
    '/devops/monitoring': monitoringMenu,
    
    // 架构
    '/system-design': systemDesignMenu,
  }
}
export default createSidebar
