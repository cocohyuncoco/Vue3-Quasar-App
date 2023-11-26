import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'



export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    // routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
    extendRoutes: routes => {
      return setupLayouts(
        routes.map(route => {
          if (route.path.includes('admin')) { //path에 admin 디렉토리가 포함이면 라우트 정보 다시세팅
            route = {
              ...route, // ... -> 전개구문
              meta: {
                ...route.meta,
                layout: 'admin',
              }
            }
          }
          return route;
        }));
    }
    //  (routes) => setupLayouts(routes),
  })

  return Router
})
