import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Weblayout from './layout/Weblayout'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/web/Home'
import Login from './pages/web/Login'
import Register from './pages/web/Signup'
import Notfound from './pages/web/Notfound'
import Dashboard from './pages/admin/Dashboard'
import UserDashboard from './pages/user/UserDashboard'
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
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/userdashboard' element={<UserDashboard/>}/>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
