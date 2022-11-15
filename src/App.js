import React,{Component,useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Main from "../src/componets/Main/Main";
import { PreView } from "./componets/PreView/PreView";
import {DetailView} from "./componets/DetailView/DetailView";
import SearchBar from "./componets/SearchBar/SearchBar";
class App extends Component {
  render(){
    return (
 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="preview" element={<PreView/>} />
        <Route path="DetailView" element={<DetailView/>} />
        <Route path="search" element={<SearchBar/>} />
      </Routes>
    </BrowserRouter>
    );
  }
}

 export default App;
