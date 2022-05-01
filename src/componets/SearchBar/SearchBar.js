import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { Component,useState } from "react";
import '../../componets/css/SearchBar.css'
import { PreView } from "../PreView/PreView";

function SearchBar({Medicine, updateField,Keyword}) {

//stateless component to render preview results
const renderResults = Medicine.map((name,index) => {
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
const KeywordClear =() =>{
  updateField("keyword", "")
  
}
const onEnter =(e) =>{
  console.log("2222"+e.key)
    if(e.key =='Enter'){
     //페이지 이동
    }
}
  return (
    
      <div className="auto">
        <span style={{fontSize:"40px", fontWeight:"bold"}}>About</span>
        {Keyword.length >0 ? <button className={`cancel-btn active`} onClick={KeywordClear}>x</button>:""}
          <input
          className="search-bar"
          placeholder="Search"
          value={Keyword}
          onChange={e => updateField("keyword", e.target.value)}
          onKeyPress={e=>onEnter(e)}
        />
        {Keyword.length > 0 ? ( <div className="search-results">{renderResults}</div>) : null}
      </div>
  )
  
}

//stateless component to render preview results
const SearchPreview = ({ ITEM_NAME,ENTP_NAME,index,Keyword}) => {
  
  return (
    <div
      className={`search-preview ${index == 0 ? "start" : ""}`} >
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
       <img height={"15px"} src="shortcut.png"></img>
        </div>
        
        <p style={{border:'none'}} className="sub-header">{ENTP_NAME}</p>
      </div>
    </div>
  );
};



  
export default SearchBar
