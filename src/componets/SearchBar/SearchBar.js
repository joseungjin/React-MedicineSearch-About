import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { BrowserRouter, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import React, { Component,useState } from "react";
import '../../componets/css/SearchBar.css'
import { PreView } from "../PreView/PreView";
import {API_URL} from "../config"

function SearchBar() {
  const [Medicine, setMedicine] = useState([])
  const [Keyword, setKeyword] = useState([])
  
  const updateField = (field, value, update = true) => {
    if (field === 'keyword') {
      setKeyword(value);
      console.log(value)
      const endpoint =`${API_URL}${Keyword}&type=json`;
      
      fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        //console.log(response.body)
        if(response.body.items){
          setMedicine(response.body.items)
       }
      })
    }
  }
  var updateText = (text) => {
    updateField("keyword", text, false);
    updateField("results", []);
  };

//stateless component to render preview results
const renderResults = Medicine.map((name,index) => {
  return (
    <SearchPreview
      key={index}
      index={index}
      ITEM_NAME={name.itemName}
      ENTP_NAME={name.entpName}
      Keyword={Keyword}
      updateText={updateText}
    />
  );
});

const KeywordClear =() =>{
  updateField("keyword", "")  
}

const navigate = useNavigate();

const onEnter =(e) =>{
    if(e.key =='Enter'){
      navigate("/preview",{state:e.target.value});
     //페이지 이동
    }
}

  return (
    <div className="auto">
      <div className="searchBar">
        <button className={'previous-btn'}>←</button>
        {Keyword.length >0 ? <button className={`cancel-btn active`} onClick={KeywordClear}>x</button>:""}
          <input
          className="search-bar"
          placeholder="Search"
          value={Keyword}
          onChange={e => updateField("keyword", e.target.value)}
          onKeyPress={e=>onEnter(e)}
        />
      </div>
      {Keyword.length > 0 ? ( <div className="search-results">{renderResults}</div>) : null}
    </div>
  )
  
}


//stateless component to render preview results
const SearchPreview = ({ ITEM_NAME,ENTP_NAME,index,Keyword,updateText}) => {
  const navigate = useNavigate();
  const DetailViewMove=()=>{
      navigate("/detailview",{state:ITEM_NAME});
  }

  return (
    <div
      className={`search-preview ${index == 0 ? "start" : ""}`} >
      <div className="first" >
      
      <div onClick={e=> DetailViewMove(ITEM_NAME)}>
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
