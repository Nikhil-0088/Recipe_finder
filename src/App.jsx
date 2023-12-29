import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import Details from './Pages/Details'
//here we are using reat router don for routing but if we used the latest version of react with next js integrated then we wil use th eLink tag for Routing 
function App() {

  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          {/* details is a dynamic page based on the item selected so we will use dynamic routing  */}
          <Route
          path="/recipe-item/:id"
          element={<Details/>}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
