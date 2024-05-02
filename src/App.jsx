import { useState } from 'react'

import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './component/Login';
import Ragister from './component/Ragister';
import ProtectRoutes from './Services/ProtectRoutes';


function App() {
  
      
  return (
    <>
     <Router>
     <Routes>
     <Route path='/Login' element={<Login/>} />
      <Route path='/Ragister' element={<Ragister/>} />
      {/* protect Route */}
      <Route path='/' element = {<ProtectRoutes/>}>
      <Route path='/' element={<Home/>} />
      </Route>
     </Routes>
     </Router>
    </>
  )
}

export default App
