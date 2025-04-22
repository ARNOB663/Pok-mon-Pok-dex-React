import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className='search-container'>
      <h3 className='search-title'>Pokémon Pokédex</h3>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
}
