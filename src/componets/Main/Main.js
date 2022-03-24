
import React,{useEffect, useState} from 'react'
import {API_URL} from "../config"
import SearchBar  from '../SearchBar/SearchBar'

function Main() {
    const [Medicine, setMedicine] = useState(null)
    const [Keyword, setKeyword] = useState(null)
    // const name = e.target.value;
      // 필드를 업데이트 
    
    const updateField = (field, value, update = true) => {
      if (field === 'keyword') {
        setKeyword(value);
        const endpoint =`${API_URL}${Keyword}&pageNo=1&numOfRows=3&type=json`;
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
          if(response.body.items)console.log(response.body.items[0].ITEM_NAME)
        })
      }
    }
    const apt =()=>{
        
      }



    return (
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'}}>
        <SearchBar style={{display:'flex'}} updateField={updateField}/>
      </div>
   
        
    )
}

export default Main
