import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHero'
import HeroList from '../components/HeroList'

export default function DCPages() {
  
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList
      publisher={'DC Comics'}
      >

      </HeroList>
    </>
    
  )
}
