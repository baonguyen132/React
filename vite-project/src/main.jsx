import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './test.jsx'
import Condition from './condition/condition.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Condition state={false} />
  </StrictMode>,
)
