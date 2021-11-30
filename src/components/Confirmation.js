import React,{Component} from 'react';


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

      
        <h1>{this.state.lname}</h1>
        <h1>{this.state.pnumber}</h1>
        <h1> TEST </h1>
     
     
        </div>
      </div>

    )
  }
}


export default Confirmation;
