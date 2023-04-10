import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Frienddetail from './components/Frienddetail/Frienddetail';
import Post from './components/Postt/Post';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Main content</div>,
//   },
//   {
//     path : '/about',
//     element : <About></About>
//   },
//   {
//     path : '/contact',
//     element :  <Contact></Contact>
//   }
 
// ]);


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
        path : 'about',
        element : <About></About>
      },
     
      {
            path : 'friends',
            element : <Friends></Friends>,
            loader : () => fetch('https://jsonplaceholder.typicode.com/users')
      }, {
        path : 'friend/:friendId',
        element : <Frienddetail></Frienddetail>,
        loader : ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path : 'posts',
        element : <Post></Post>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '*',
        element : <div>
        <h1>404</h1>
        <p>Page not found</p>
         </div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
