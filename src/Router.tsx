import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/styles/main.css'

const CounterPage = lazy(() => /* webpackChunkName: "counter_page" */ import('@/pages/CounterPage'))
const MainPage = lazy(() => /* webpackChunkName: "main_page" */ import('@/pages/MainPage'))

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
  return <RouterProvider router={routes} />
}

export default Router
