import React,{useEffect, useState} from 'react'
import {API_URL} from "../config"
import SearchBar from '../SearchBar/SearchBar'
import '../../componets/css/Main.css'
import Top from "../Top/Top"

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
           <div width='100%'>
                <div className='MainMapDiv'>
                    <div style={{'margin-top':'50px'}}>
                        <img src='../magnifying-glass.png'></img>
                    </div>
                    <div> 상세 검색</div>
                </div>
                <div className='MainBookMarkDiv'>
                    <div style={{'margin-top':'50px'}}>
                        <img src='../bookmark.png' width='60px'></img>
                    </div>
                    <div>즐겨찾기</div>
                </div>
                
                <div className='MainMapDiv'>
                    <div style={{'margin-top':'50px'}}>
                        <img src='../magnifying-glass.png'></img>
                    </div>
                    <div>약국 찾기</div>
                </div>
                <div className='MainBookMarkDiv'>
                    <div style={{'margin-top':'50px'}}>
                        <img src='../bookmark.png' width='60px'></img>
                    </div>
                    <div>즐겨찾기</div>
                </div>
           </div>
        </div>
        
   
        
    )
}

export default Main
