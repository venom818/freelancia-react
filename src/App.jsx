import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import Mygigs from "./pages/mygigs/Mygigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './App.scss'

function App(){
 const Layout = () =>{
    return(
        <div className="app">
            <Navbar/>
            
          <Outlet/>  
        <Footer/>
        </div>
    );
 };

    //adding router
    const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
        { 
            path: "/",
            element: <Home/>,
        },
        { 
            path: "/gigs",
            element: <Gigs/>,
        },
        { 
            path: "/gig/:id",
            element: <Gig/>,
        },
         { 
            path: "/orders",
            element: <Orders/>,
        },
        { 
            path: "/mygigs",
            element: <Mygigs/>,
        },
        { 
            path: "/add",
            element: <Add/>,
        },
        { 
            path: "/messages",
            element: <Messages/>,
        },
        { 
            path: "/message/:id",
            element: <Message/>,
        }
    ]
  },
]);  // router added 

    return (
        <div>
        {/* <Navbar/>  //yo nav bar hatayae paxi balla logo click garda automatically home ma gayp */}
        <RouterProvider router={router} />
        
        </div>
    );
}
export default App;