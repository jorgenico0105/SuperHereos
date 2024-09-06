import React from 'react'
import HeroCard from '../components/HeroCard'
import { useForm } from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { GetHeroByName } from '../helpers/getHeroesByName'

export default function Search() {
  const navigate=useNavigate()
  const location=useLocation()
  const queary=queryString.parse(location.search)
  const {hero,onInputChange,onResetForm}=useForm({
    hero:''
  })
  const heroFind=GetHeroByName(queary.q)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(hero.trim().length<=1) return
    navigate(`?q=${hero}`)
    onResetForm();
  }

  return (
    <>
    <div className="row">
          <h1>Search</h1>
            <hr />
            <div className="col-5">
              <h4>Searching</h4>
              <hr />
              <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Batman, IronMan, etc'
                name='hero'
                value={hero}
                onChange={onInputChange}
                />
                <button className='btn btn-outline-primary mx-2'>
                  Search
                </button>
              </form>
            </div>
            <div className="col-7">
              <h4>Results</h4>
              {queary.q && heroFind &&
              <div className='alert alert-primary'>
              Search Hero
               </div>
              }
              {heroFind=='' &&
               <div className='alert alert-danger'>
               No Results or Hero in input <b>{queary.q}</b> 
                </div>
              }
             
              {heroFind.map(hero=>(
                 <HeroCard
                 hero={hero}
                 ></HeroCard>
              ))}
             
          </div>
      </div>
    </>
  
  )
}
