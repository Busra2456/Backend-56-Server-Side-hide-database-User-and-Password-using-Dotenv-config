import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:13000/coffee'), },
    

      {
        path:"addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:13000/coffee/${params.id}`)
      },
      {
        path:'/SignIn',
        element:<SignIn></SignIn>
      }
      ,
      {
        path:'/SignUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/users',
        element:<Users></Users>, 
        loader: () => fetch('http://localhost:13000/user')
      }


   
 
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
