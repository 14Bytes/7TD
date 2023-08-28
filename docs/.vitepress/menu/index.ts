// import your menu.js
// 综合
import guideMenu from './guide'

// 前端
import frontendWebMenu from './test/testMenu'

const createSidebar = () => {
  return {
    '/guide': guideMenu,
    
    // test
    '/test': testMenu,
  }
}
export default createSidebar
