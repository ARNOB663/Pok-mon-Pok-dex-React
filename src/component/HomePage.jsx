import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import './HomePage.css'

export default function HomePage(){
const [pokemons,setPokemons] = useState([])
const [page,setPage] = useState(0)
const [totalPages, setTotalPages] = useState(0);

const itemsPerPage = 40;
    
useEffect(() => {
  async function fetchData() {
    try {
      const offset = page * 40;

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${itemsPerPage}`);
      const data = await response.json();
      setPokemons(data.results);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
}, [page]); 

 const handelPreviousPage = ()=>{
  if(page > 0)
    setPage(page-1)
 }
  const handleNextPage = () => {
    if(page < totalPages)
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
       
       <button onClick={ () =>handelPreviousPage()}> Previous </button>
        <h3>{page}</h3>
       <button onClick={ () => handleNextPage()}> Next </button>
  </div>
  </div>
 )

}