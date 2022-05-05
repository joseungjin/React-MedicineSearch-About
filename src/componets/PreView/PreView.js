import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from "react-router";
export const PreView = () => {
  
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      미리보기 페이지
    </div>
    
  )
}
