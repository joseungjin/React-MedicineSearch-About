import React, { Component } from "react";

function SearchBar({results, updateField, keyword}) {

  return (
      <div >
          <input 
          placeholder="Search"
          onChange={e => updateField("keyword", e.target.value)}
          />
      </div>

 
  )
  
}
  
export default SearchBar
