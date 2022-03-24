import React, { Component } from "react";
import Main from "../Main/Main";
import {Input} from 'antd';
import 'antd/dist/antd.min.css';

function SearchBar() {
  const { Search } = Input;
  return (
      // <div >
      //     <input
      //     placeholder="Search"
      //     onChange={e => updateField("keyword", e.target.value)}
      //     />
      // </div>
      
  <Search  placeholder="input search text"  enterButton />
 
  )
  
}
  
export default SearchBar
