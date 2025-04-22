import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className='flex flex-col items-center justify-center mx-auto my-8 p-8 bg-red-500 rounded-2xl shadow-lg w-full max-w-7xl'>
      <h3 className='text-4xl font-bold text-white mb-6 text-center tracking-wide text-shadow-lg'>Pokémon Pokédex</h3>
      <div className="relative w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 text-lg rounded-xl border-none bg-white shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:shadow-lg"
        />
        <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      </div>
    </div>
  );
}
