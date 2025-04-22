import { useState } from 'react'
import './App.css'
import HomePage from './component/HomePage'
import SearchBar from './component/SearchBar/SearchBar'

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomePage />
    </div>
  )
}

export default App
