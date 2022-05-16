import React,{useEffect, useState} from 'react'
import {API_URL} from "../config"
import SearchBar from '../SearchBar/SearchBar'

function Main() {
    // const [Medicine, setMedicine] = useState([])
    // const [Keyword, setKeyword] = useState([])
    // const updateField = (field, value, update = true) => {
    //   if (field === 'keyword') {
    //     setKeyword(value);
    //     console.log(value)
    //     const endpoint =`${API_URL}${Keyword}&type=json`;
        
    //     fetch(endpoint)
    //     .then(response => response.json())
    //     .then(response => {
    //       //console.log(response.body)
    //       if(response.body.items){
    //         setMedicine(response.body.items)
    //      }
    //     })
    //   }
    // }
    return (
      // <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'}}>
       
        <div>
           <SearchBar></SearchBar>
      </div>
   
        
    )
}

export default Main
