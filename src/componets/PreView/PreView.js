import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

export const PreView = () => {
  return (
    <div>
       <div className="auto">
          <input
          className="search-bar"
          placeholder="Search"
          onChange={e => updateField("keyword", e.target.value)}
          onKeyPress={e=>onEnter(e)}
        />
      </div>
    </div>
    
  )
}
