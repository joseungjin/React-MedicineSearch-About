
import React,{useEffect, useState} from 'react'
import {API_URL} from "../config"
import SearchBar from '../SearchBar/SearchBar'

function Main() {
    const [Medicine, setMedicine] = useState(null)
    const [Keyword, setKeyword] = useState(null)
    // const name = e.target.value;
      // 필드를 업데이트 
    
    const updateField = (field, value, update = true) => {
      if (field === 'keyword') {
        setKeyword(value);
        const endpoint =`${API_URL}${Keyword}&type=json`;
        
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
          console.log(response.body)
          //if(response.body.items)console.log(response.body.items[0].ITEM_NAME)
        })
      }
    }




    return (
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'}}>
        <SearchBar updateField={updateField}/>
      </div>
   
        
    )
}

export default Main
