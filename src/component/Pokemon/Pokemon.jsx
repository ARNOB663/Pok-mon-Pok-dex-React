import { useState, useEffect } from 'react';

export default function Pokemon({poke}){
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(poke.url);
        const data = await response.json()
        // setImage(data.sprites.front_default)
        //setImage(data.sprites.other.dream_world.front_default)
        //setImage(data.sprites.other.official-artwork.front_default)
        setImage(data.sprites.other["official-artwork"].front_default)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [poke.url]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="p-4">
        <img 
          src={image} 
          alt={poke.name}
          className="w-full h-48 object-contain"
        />
        <h3 className="mt-2 text-lg font-semibold text-gray-800 capitalize">
          {poke.name}
        </h3>
      </div>
    </div>
  );
}