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

 const handelPreviousPage = ()=>{
    setPage(page-1)
 }
  const handleNextPage = () => {
        setPage(page+1)
    };

      // type: result.types.map((type) => type.type.name).join(', '),
 return (
<div >
  <div className="grid"> 
  {
    pokemons.map(poke => <Pokemon  key={poke.url} poke={poke}></Pokemon> )
  }
  </div>
  <div className="pageToggle">
       
       <h3>{page}</h3>
       <button onClick={ () =>handelPreviousPage()}> Previous </button>
        <h3>{page}</h3>
       <button onClick={ () => handleNextPage()}> Next </button>
  </div>
  </div>
 )

}