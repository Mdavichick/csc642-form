import React,{Component} from 'react';
import { Loader } from "@googlemaps/js-api-loader"
// import {GoogleMap} from "react-google-maps";
import { Google } from './GoogleMaps';






export class Confirmation extends React.Component {
  
  state ={
    lname: localStorage.getItem('lname'),
    fname:localStorage.getItem('fname'),
    title:localStorage.getItem('title'),
    heightinch:localStorage.getItem('heightinch'),
    heightfeet:localStorage.getItem('heightfeet'),
    pnumber:localStorage.getItem('pnumber'),
    addcity:localStorage.getItem('addcity'),
    addstate:localStorage.getItem('addstate'),
    addzip:localStorage.getItem('addzip'),
    email:localStorage.getItem('email'),
  }

  render() {
   
    return (
      <div className ="container">
      <div className="app-wrapper">
      <h2 className="title">Results Page</h2>

     
        <h3 className="showaddress"><small>Welcome</small> {this.state.fname} {this.state.lname}</h3>
        <br/>
       
        <h3 className="showaddress"><small>Preferred title:</small> {this.state.title}</h3>
        <h3 className="showaddress"><small>Height:</small> {this.state.heightfeet} feet, {this.state.heightinch} inches </h3>
        <h3 className="showaddress"><small>Phone Number:</small> {this.state.pnumber}</h3>
        <h3 className="showaddress"><small>Address:</small> {this.state.addcity}, {this.state.addstate}, {this.state.addzip}</h3>
        <h3 className="showaddress"><small>Email:</small> {this.state.email}</h3>
        
        <Google/>
       </div>
       </div>
        
        

       
     

    )
  }
}


export default Confirmation;
