import React,{useEffect, useState} from 'react'
import {API_URL} from "../config"
import SearchBar from '../SearchBar/SearchBar'
import '../../componets/css/Main.css'
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
    // }<SearchBar></SearchBar>
    return (
        <div>
            <div className='MainSearch'>
                <input className='MainInput'></input>
           </div>
           <div>
                가까운 약국 찾기 
           </div>
           <div>
               즐겨찾기
           </div>
        </div>
        
   
        
    )
}

export default Main
