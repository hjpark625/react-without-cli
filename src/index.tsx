import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import Router from '@/Router'
import store from '@/store'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
)
