import React from 'react'
import { createBrowserRouter } from 'react-router'
import RouteLayout from './components/ui/RouteLayout'
import Home from './components/ui/Home'
import About from './components/ui/About'
import { RouterProvider } from 'react-router'
const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true,element:<Home/>},
    {path:'about' ,element:<About/>}
  ]
}])
const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
