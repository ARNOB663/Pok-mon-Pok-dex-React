import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import './HomePage.css'

export default function HomePage(){
const [pokemons,setPokemons] = useState([])
const [page,setPage] = useState(0)
    
useEffect(() => {
  async function fetchData() {
    try {
      const offset = page * 40;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=40`);
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
}, [page]); 


      const handleNextPage = async () => {
        setPage((prevPage) => {
            const nextPage = prevPage + 1;
            // const offset = nextPage * 40;
            // const limit = 40;

            // fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         setPokemons(data.results);
            //     })
            //     .catch((error) => {
            //         console.error('Error fetching next page data:', error);
            //     });

            return nextPage;
        });
    };

      // type: result.types.map((type) => type.type.name).join(', '),
 return (
  <div className="grid"> 
  {
    pokemons.map(poke => <Pokemon  key={poke.url} poke={poke}></Pokemon> )
  }
  <button onClick={ () => handleNextPage()}> Next </button>
  <button> previous </button>
  </div>
  
 )

}