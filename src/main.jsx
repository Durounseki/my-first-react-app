import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { BasicForm } from './Greeting.jsx' 
import { SampleComponent } from './Sample.jsx'
import {Profile,DefaultProfile} from './Profile.jsx';
import {Popeye} from './Popeye.jsx';
import {Spinach} from './Spinach.jsx';
import {ErrorPage} from './ErrorPage.jsx';
import routes from './routes.jsx';
import Image from './Image.jsx';

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Image/>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
