import React, { Component,useState } from "react";
import '../../componets/css/SearchBar.css'

function SearchBar({Medicine, updateField,Keyword}) {

//stateless component to render preview results
var renderResults = Medicine.map((name,index) => {
  return (
    <SearchPreview
      key={index}
      index={index}
      ITEM_NAME={name.itemName}
      ENTP_NAME={name.entpName}
      Keyword={Keyword}
      
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
          value={Keyword}
          onChange={e => updateField("keyword", e.target.value)}
        />
     
 
        {Medicine.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}


      </div>

 
  )
  
}
//stateless component to render preview results
const SearchPreview = ({ ITEM_NAME,ENTP_NAME,index,Keyword}) => {
  console.log(Keyword)
  return (
    <div
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="first">
       
      <div>
        {ITEM_NAME.includes(Keyword) ? (
          <>
            {ITEM_NAME.split(Keyword)[0]} 
            <span style={{ color: "#3F51B5" }}>{Keyword}</span>
           {ITEM_NAME.split(Keyword)[1]}
          </>
        ): (ITEM_NAME)
        }
        </div>
        <p className="sub-header">{ENTP_NAME}</p>
      </div>
      {console.log(ITEM_NAME.includes(Keyword))}
      {/* <div className="second">
        <p className="age">{age}</p>
        <p className="sub-header">age</p>
      </div> */}
    </div>
  );
};



  
export default SearchBar
