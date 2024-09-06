import {heroes} from '../data/hero'

export const getHeroesByPublisher=(publisher)=>{
    const validPublishers=['DC Comics','Marvel Comics']
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} not valid publisher`)
    }
    return heroes.filter(hero=>hero.publisher===publisher)
}