import React,{Component,useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Main from "../src/componets/Main/Main";
import { PreView } from "./componets/PreView/PreView";
<<<<<<< HEAD
import {DetailView} from "./componets/DetailView/DetailView";
import SearchBar from "./componets/SearchBar/SearchBar";
=======
import DetailView from "./componets/DetailView/DetailView";
import ListView from "./componets/ListView/ListView";
>>>>>>> b5763eb8f5e4d53bd032d9c1daeaae8670b2d253
class App extends Component {
  render(){
    return (
 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="preview" element={<PreView/>} />
        <Route path="DetailView" element={<DetailView/>} />
<<<<<<< HEAD
        <Route path="search" element={<SearchBar/>} />
=======
        <Route path="ListView" element={<ListView/>} />
>>>>>>> b5763eb8f5e4d53bd032d9c1daeaae8670b2d253
      </Routes>
    </BrowserRouter>
    );
  }
}

 export default App;
