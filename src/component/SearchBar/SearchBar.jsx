import './SearchBar.css';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className='search-area'>
      <h3>Pokémon Pokédex</h3>
      <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-bar"
     />
    </div>
  );
}
