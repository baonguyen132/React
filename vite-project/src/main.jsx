import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './test.jsx'
import Condition from './condition/condition.jsx'
import App from './App.jsx'
import UseStates from './useState/useStates.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseStates />
  </StrictMode>,
)
