import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Layout, Home, About, Contact, User, Signup, Login, ForgotPassword} from './components/Index.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//      element: <Layout />,
//      children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//      ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='Signup' element={<Signup />} />
      <Route path='login' element={<Login />} /> 
      <Route path='forgot-password' element={<ForgotPassword />} /> 
      <Route path='user/:100' element={<User />} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
