import { createRoot } from 'react-dom/client'
import Router from '@/Router'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)
root.render(<Router />)
