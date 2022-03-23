import React, { Component } from "react";
import Main from "../Main/Main";
export const SearchBar = ({results, updateField, keyword}) => {

 return ( 
    <div >
        <input
        placeholder="Search"
        onChange={e => updateField("keyword", e.target.value)}
        />
    </div>
  )
  
}
