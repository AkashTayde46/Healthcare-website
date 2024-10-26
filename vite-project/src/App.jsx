
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
// import Login from './components/Login'
import Login from './components/Login'
import Disease from './components/Disease'
import AfterAppointment from './components/AfterAppointment'
import Footer from './components/Footer'
import Register from './components/Register'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/></>
    },

    // {
    //   path: "/Home",
    //   element:<><Navbar/><Home/></>
    // },
    // {
    //   path: "/Login",
    //   element:<><Navbar/><Login/></>

    // },
    {
      path: "/Contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path: "/login",
      element:<><Navbar/><Login/></>

    },
    {



      
      path: "/register",
      element:<><Navbar/><Register/></>

     
    },
    {
      path: "/Disease",
      element:<><Navbar/><Disease/></>

    },
    {
      path: "/AfterAppointment",
      element:<><Navbar/><AfterAppointment/></>

    },
   
  ]);

  return(
    
    <>

    
   
    <RouterProvider router = {router}/>


    <Footer/>
    </>
  )
      
}

export default App
