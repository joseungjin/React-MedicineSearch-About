import React, { Component,useState } from "react";
import '../../componets/css/SearchBar.css'

function SearchBar({Medicine, updateField, keyword}) {
//stateless component to render preview results

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
     
     
  
        <div className="search-results">{Medicine}</div>
      


      </div>

 
  )
  
}




  
export default SearchBar
