import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import '@/styles/main.css'

const CounterPage = lazy(() => import(/* webpackChunkName: "counter_page" */ '@/pages/CounterPage'))
const MainPage = lazy(() => import(/* webpackChunkName: "main_page" */ '@/pages/MainPage'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/counter',
    element: <CounterPage />
  }
])

function Router() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default Router
