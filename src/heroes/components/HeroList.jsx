    import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHero'
import HeroCard from './HeroCard'
    
    export default function HeroList({publisher}) {
        const heroes=getHeroesByPublisher(publisher)
      return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {heroes.map(hero=>(
                    <HeroCard 
                    hero={hero}
                    ></HeroCard>
            ))}
            </div>
        </>
      )
    }
    