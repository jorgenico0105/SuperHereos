import React from 'react'
import { useParams,Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

export default function HeroPage() {
  const {heroId}=useParams()
  const hero=getHeroById(heroId)
  const navigate=useNavigate()

  if(!hero){
    return <Navigate to='/marvel'></Navigate>
  }
  const handleClick=()=>{
    if(hero.publisher==='DC Comics'){
      navigate('/dc')
    }else{
      navigate('/marvel')
    }
  }
  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__flipInY' >
        <img src={`/heroes/${hero.id}.jpg`} 
        alt="hero" 
        className='img-thumbnail'
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className="list-group-item"><b>Alter Ego: </b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First Appareance: </b>{hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters:</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary'
        onClick={handleClick}
        >
          Back
        </button>
      </div>
    </div>
  )
}
