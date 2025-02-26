import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './Router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthenticationProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationProvider> <RouterProvider router={router} /></AuthenticationProvider>

  </StrictMode>,
)
