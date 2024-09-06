import React from 'react'
import Navar from '../../Navar'
import { Navigate, Route,Routes } from 'react-router-dom'
import MarvelPage from '../views/MarvelPage'
import DCPages from '../views/DCPages'
import Search from '../views/Search'
import HeroPage from '../views/HeroPage'
export default function HeroRoutes() {
  return (
    <>
        <Navar></Navar>
        <div className='container'>
        <Routes>
                <Route path='marvel' element={<MarvelPage></MarvelPage>}></Route>
                <Route path='dc' element={<DCPages></DCPages>}></Route>
                <Route path='search' element={<Search></Search>}></Route>
                <Route path='hero/:heroId' element={<HeroPage></HeroPage>}></Route>
                <Route path='/' element={<Navigate to='/marvel'></Navigate>}></Route>
            </Routes>
        </div>
            
    </>
  )
}
