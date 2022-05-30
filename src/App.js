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
class App extends Component {
  render(){
    return (
 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="preview" element={<PreView/>} />
        <Route path="DetailView" element={<DetailView/>} />
      </Routes>
    </BrowserRouter>
    );
  }
}

 export default App;
