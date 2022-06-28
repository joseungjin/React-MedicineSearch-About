import React,{useState} from 'react'
import { useLocation } from "react-router";
import {API_URL} from "../config";

function DetailView() {
  const [Medicine, setMedicine] = useState([])
  const { state } = useLocation();

 
 const endpoint =`${API_URL}${state}&type=json`;

 
  fetch(endpoint)
  .then(response => response.json())
  .then(response => {
    //console.log(response.body)
    if(response.body.items){
      setMedicine(response.body.items);
    }
  })

  const renderResults = Medicine.map((name,index) => {
    return (
      <div key = {index}>
        {name.itemName}
        <br/>
        <img src={name.itemImage} style={{ width: '100%' }}></img>
        <br/>
        {name.entpName}
        <br/>
        {name.efcyQesitm}
        <br/>
        {name.useMethodQesitm}
        <br/>
        {name.atpnWarnQesitm}
        <br/>
        {name.atpnQesitm}
        <br/>
      </div>
    );
  });
  return (
    <div> {renderResults}</div>
  )
}
export default DetailView
