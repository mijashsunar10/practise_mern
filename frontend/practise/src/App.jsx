import React from 'react'

import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import AddFoodReceipe from './pages/AddFoodReceipe'
import MainNavigation from './components/MainNavigation'
// import { useNavigate } from "react-router-dom";


import axios from 'axios'


// fetch data from the database

const getAllReceipe = async()=>{  //You’re creating an asynchronous arrow function named getAllReceipe.
  let allReceipes = []
  //Initializes a variable named allReceipes as an empty array.
// You’ll later store the fetched data (list of recipes) in this variable.

  await axios.get('http://localhost:3000/receipe/').then(res=>{ 
    //This line sends an HTTP GET request to your backend API at
// 👉 http://localhost:3000/receipe

// axios.get() returns a Promise that resolves with a response object when the data arrives.
    allReceipes=res.data
  })
  return allReceipes
}


const router = createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[

     {path:'/', element:<Home/>,loader:getAllReceipe},
     {path:'/myReceipe',element:<Home/>},
     {path:'/favReceipe',element:<Home/>},

     {path:'/addReceipe',element:<AddFoodReceipe/> }

  ]}

 
])

// Add main navigation as navbar and footer and other page as the children of the main navigations
const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
        </RouterProvider>
      
    </div>
  )
}

export default App
