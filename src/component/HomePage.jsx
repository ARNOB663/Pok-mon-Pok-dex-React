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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4"> 
      {pokemons.map(poke => <Pokemon key={poke.url} poke={poke}></Pokemon>)}
    </div>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-red-500 rounded-2xl shadow-lg mx-auto my-4 sm:my-8 w-[95%] sm:w-full max-w-7xl">
      <button 
        onClick={handelPreviousPage}
        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300 font-semibold text-sm sm:text-base"
      >
        Previous
      </button>
      <h3 className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-white border-2 border-white rounded-lg font-semibold text-sm sm:text-base text-center">
        {page}
      </h3>
      <button 
        onClick={handleNextPage}
        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300 font-semibold text-sm sm:text-base"
      >
        Next
      </button>
    </div>
  </div>
);
}