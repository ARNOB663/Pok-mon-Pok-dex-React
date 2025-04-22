import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon/Pokemon";

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

const handelPreviousPage = () => {
  if(page > 0)
    setPage(page-1)
}

const handleNextPage = () => {
  if(page < totalPages)
    setPage(page+1)
};

return (
  <div className="min-h-screen bg-gray-100">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4"> 
      {pokemons.map(poke => <Pokemon key={poke.url} poke={poke}></Pokemon>)}
    </div>
    <div className="flex justify-center items-center space-x-4 p-4 bg-red-500 rounded-2xl shadow-lg mx-auto my-8 max-w-7xl">
      <button 
        onClick={handelPreviousPage}
        className="px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300 font-semibold"
      >
        Previous
      </button>
      <h3 className="px-6 py-3 text-white border-2 border-white rounded-lg font-semibold">
        {page}
      </h3>
      <button 
        onClick={handleNextPage}
        className="px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300 font-semibold"
      >
        Next
      </button>
    </div>
  </div>
);
}