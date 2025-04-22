import { useEffect, useState } from "react";

export default function Pokemon({ poke }) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(poke.url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemon();
  }, [poke.url]);

  if (isLoading) {
    return (
      <div className="skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="pokemon-card">
        <div className="pokemon-image-container">
          <p className="text-gray-500">Failed to load Pokemon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
      </div>
      <h3 className="pokemon-name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h3>
      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="pokemon-type"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}