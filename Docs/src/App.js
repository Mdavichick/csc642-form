import React from "react";

import "./App.css"
// import { Route, Routes } from 'react-router-dom';
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import SurveyForm from "./components/SurveyForm";



// Default 
// function App() {
//   return (  
//       <div>
//         <Form/> 
//         </div> 
//   )
// }

function App() {

  return (  
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form/>} component={Form}/>
      <Route path="/confirmation" element={<Confirmation/>} component={Form}/>
      </Routes>
      
      </BrowserRouter>
      
  )
}


export default App; 











































// import logo from './logo.svg';
// import './App.css';
// import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Button>Test Button</Button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
