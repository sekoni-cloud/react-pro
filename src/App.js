import React, {Component} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import{Switch,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import  Details from './components/Details';
import  Cart from './components/CartComponent/Cart';
import  Default from './components/Default';
import './App.css';
import ModalContainer from './components/Modal';

function App() {
  
    return (
      <React.Fragment>
       <Navbar />
       <Switch>
         <Route path="/details" component = {Details} />
         <Route path="/cart" component = {Cart} />
         <Route exact path="/" component = {ProductList} />
         <Route component = {Default} />
       </Switch>
      <ModalContainer />
      </React.Fragment>
    );
}

export default App;
