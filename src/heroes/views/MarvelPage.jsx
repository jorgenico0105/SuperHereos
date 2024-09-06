import React from 'react'
import HeroList from '../components/HeroList'

export default function MarvelPage() {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroList
      publisher={'Marvel Comics'}
      >
      </HeroList>
    </>
  )
}
