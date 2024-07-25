import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Weblayout from './layout/Weblayout'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/web/Home'
import Login from './pages/web/Login'
import Register from './pages/web/Signup'
import Notfound from './pages/web/Notfound'
import './assets/css/Login.css'
import './assets/css/Signup.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
