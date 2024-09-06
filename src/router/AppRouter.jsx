import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import HeroRoutes from '../heroes/routes/HeroRoutes'
import Login from '../auth/pages/Login'
import Navar from '../Navar'
export default function AppRouter() {
  return (
    <>
      
        <Routes>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='/*' element={<HeroRoutes></HeroRoutes>}></Route>
        </Routes>
    </>
  )
}
