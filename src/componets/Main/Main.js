import React,{useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import {API_URL} from "../config"
import SearchBar from '../SearchBar/SearchBar'
import MainSearchBar from '../SearchBar/MainSearchBar'
import { PreView } from "../PreView/PreView";
import '../../componets/css/Main.css'
import Top from "../Top/Top"

function Main() {
    const isMobile = () => {
        const user = navigator.userAgent;
        let isCheck = false;
    
        if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
            isCheck = true;
        }
        
        return isCheck;
    }  
    return (
        <div> 
            <div className='MainLogoTop-div'>
            </div>
            
            <div className='auto'>
                {/* <img className='MainLogo' src='./MainLogo.svg'></img> */}
                <span style={{fontSize:'50px'}}>About</span>
            </div>

            <div className='divSearch'>
                <MainSearchBar></MainSearchBar>
            </div>

            <div className='MainLogoBottom-div'>

            </div>
        </div>
        
    )
}


export default Main
