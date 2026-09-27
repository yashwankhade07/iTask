import React from 'react'

const SearchBar = ({btnClick,inputValue,handleSearch,SearchTask}) => {
  return (
    <div className="searchBar">
        <input  type="text" placeholder='  search tasks...' value={inputValue} onChange={(e)=>handleSearch(e.target.value)}  />
        <button onClick={btnClick}>ADD TASK</button>
      </div>
  )
}

export default SearchBar
