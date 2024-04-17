import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '@/pages/MainPage'
import CounterPage from '@/pages/CounterPage'
import '@/styles/reset.css'

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
