import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router";
import {API_URL} from "../config";

function DetailView() {
  const { state } = useLocation();

  return (
    <div>
    {state.itemName}
    <br/>
    <img src={state.itemImage} style={{ width: '100%' }}></img>
    <br/>
    {state.entpName}
    <br/>
    {state.efcyQesitm}
    <br/>
    {state.useMethodQesitm}
    <br/>
    {state.atpnWarnQesitm}
    <br/>
    {state.atpnQesitm}
    <br/>
  </div>
  )
}
export default DetailView


