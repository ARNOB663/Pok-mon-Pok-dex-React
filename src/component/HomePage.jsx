import { useEffect, useState } from "react";
import Pokemon from "./Pokemon/Pokemon";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 40;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const offset = page * itemsPerPage;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${itemsPerPage}`);
        const data = await response.json();
        setPokemons(data.results);
        setTotalPages(Math.ceil(data.count / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <div className="home-container">
      <div className="pokemon-grid">
        {isLoading ? (
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className="skeleton">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
            </div>
          ))
        ) : (
          pokemons.map(poke => <Pokemon key={poke.url} poke={poke} />)
        )}
      </div>
      <div className="pagination-container">
        <button
          onClick={handlePreviousPage}
          disabled={page === 0}
          className="pagination-button"
        >
          Previous
        </button>
        <h3 className="pagination-info">
          Page {page + 1} of {totalPages}
        </h3>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages - 1}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}