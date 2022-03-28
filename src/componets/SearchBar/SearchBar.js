import React, { Component,useState } from "react";
import '../../componets/css/SearchBar.css'

function SearchBar({Medicine, updateField, keyword}) {

//stateless component to render preview results
var renderResults = Medicine.map((name,index) => {
  return (
    <SearchPreview
      key={index}
      index={index}
      ITEM_NAME={name.ITEM_NAME}
      ENTP_NAME={name.ENTP_NAME}
    />
  );
});
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
     
 
        {Medicine.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}


      </div>

 
  )
  
}
//stateless component to render preview results
const SearchPreview = ({ ITEM_NAME,ENTP_NAME,index}) => {
  return (
    <div
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="name">{ITEM_NAME}</p>
        <p className="sub-header">{ENTP_NAME}</p>
      </div>
      {/* <div className="second">
        <p className="age">{age}</p>
        <p className="sub-header">age</p>
      </div> */}
    </div>
  );
};



  
export default SearchBar
