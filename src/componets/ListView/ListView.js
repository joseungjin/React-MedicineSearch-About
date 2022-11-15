import React,{useState,useEffect}from 'react'
import { useLocation } from "react-router";

function ListView() {
  const { state } = useLocation();
  const renderResults = state.map((name,index) => {
    return (
      <div key={index}>
        {name.itemName}
        {name.entpName}
      </div>
    );
  });

  return (
    <div>{renderResults}</div>
  )
}

export default ListView
