import React,{Component,useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Main from "../src/componets/Main/Main";
import { PreView } from "./componets/PreView/PreView";
import DetailView from "./componets/DetailView/DetailView";
import ListView from "./componets/ListView/ListView";
class App extends Component {
  render(){
    return (
 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="preview" element={<PreView/>} />
        <Route path="DetailView" element={<DetailView/>} />
        <Route path="ListView" element={<ListView/>} />
      </Routes>
    </BrowserRouter>
    );
  }
}

 export default App;
