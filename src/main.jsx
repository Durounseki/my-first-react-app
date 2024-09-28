import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BasicForm } from './Greeting.jsx' 
import { SampleComponent } from './Sample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BasicForm />
    <SampleComponent/>
  </StrictMode>,
)
