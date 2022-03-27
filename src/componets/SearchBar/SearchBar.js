import React, { Component } from "react";
import '../../componets/css/SearchBar.css'
function SearchBar({results, updateField, keyword}) {

  return (
      <div className="auto">
       <button
        className={`cancel-btn active`}
      >
        x
      </button>
          <input
          className="search-bar"
          placeholder="Search"
          value={keyword}
          onChange={e => updateField("keyword", e.target.value)}
        />
      
      </div>

 
  )
  
}
  
export default SearchBar
