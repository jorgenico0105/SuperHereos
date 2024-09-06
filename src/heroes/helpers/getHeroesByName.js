import { heroes } from "../data/hero"

export const GetHeroByName=(name)=>{
  
    return heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes(name))
}