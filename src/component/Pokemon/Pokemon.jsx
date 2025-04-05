
import { useState } from 'react';
import  './Pokemon.css'
export default function Pokemon({poke}){
 const [image, setImage] = useState(null);

    async function fetchData() {
        try {
          const response = await fetch(poke.url);
          const data = await response.json()
          setImage(data.sprites.front_default)
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();

return (
    <div  className="card">
    <img src={image}></img>
    <h3>Name: {poke.name}</h3>
    </div>
)

}