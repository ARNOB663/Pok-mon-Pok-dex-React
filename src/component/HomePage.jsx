import { useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import './HomePage.css'


export default function HomePage(){
const [pokemons,setPokemons] = useState([])
    async function fetchData() {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40');
          const data = await response.json()
          setPokemons(data.results)
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
 return (
  <div className="grid"> 
  {
    pokemons.map(poke => <Pokemon  key={poke.url} poke={poke}></Pokemon> )
  }
  </div>
 )

}