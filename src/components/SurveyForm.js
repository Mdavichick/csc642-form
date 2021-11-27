// import { render } from '@testing-library/react';
import React,{Component} from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
// import { Link } from 'react-router';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class SurveyForm extends Component{
    constructor(props){
        super(props)

        this.state={
            lname:'',
            fname:'',
            title:'',
            heightinch:'',
            heightfeet:'',
            pnumber:'',
            addcity:'',
            addstate:'',
            addzip:'',
            email:'',
        }
    }

    handleLNameChange = (event) =>{
        this.setState({
            lname: event.target.value,
        })
    }
    handleFNameChange = (event) =>{
        this.setState({
            fname: event.target.value,
        })
    }
    handleTitleChange = (event) =>{
        this.setState({
            title: event.target.value,
        })
    }
    handleHeightInchChange = (event) =>{
        this.setState({
            heightinch: event.target.value,
        })
    }
    handleHeightFeetChange = (event) =>{
        this.setState({
            heightfeet: event.target.value,
        })
    }
    handlePnumberChange = (event) =>{
        this.setState({
            pnumber: event.target.value,
        })
    }
    handleCityChange = (event) =>{
        this.setState({
            addcity: event.target.value,
        })
    }
    handleStateChange = (event) =>{
        this.setState({
            addstate: event.target.value,
        })
    }
    handleZipChange = (event) =>{
        this.setState({
            addzip: event.target.value,
        })
    }
    handleEmailChange = (event) =>{
        this.setState({
            email: event.target.value,
        })
    }
    handleStudent =(event) =>{
        this.setState({
            title: "Student",
        })
    }
    handleProfessor =(event) =>{
        this.setState({
            title: "Professor",
        })
    }
    handleStaff =(event) =>{
        this.setState({
            title: "Staff",
        })
    }
    handleRetired =(event) =>{
        this.setState({
            title: "Retired",
        })
    }
    handleSubmit = (event) => {
       alert(`
            fname: ${this.state.fname} 
            lname: ${this.state.lname} 
            title: ${this.state.title}
            heightinch: ${this.state.heightinch}
            heightfeet: ${this.state.heightfeet}
            pnumber: ${this.state.pnumber}
            addcity: ${this.state.addcity}
            addstate: ${this.state.addstate}
            addzip: ${this.state.addzip}
            email: ${this.state.email}
            `);
    }
// const SurveyForm = () => {
//     return(
    render(){
        return(
        <div className ="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">CSC 642-842 Survey Form</h2>
                </div>
                <form className ="form-wrapper" onSubmit={this.handleSubmit}>
                <Form>

                {/* Last and First Name  */}
                <div className="lname">
                        <label className="label">Last Name *</label>
                        <input className="input" placeholder="                        Please enter last name - required" type="text" value ={this.state.lname} onChange={this.handleLNameChange} required/>
                </div>
                    <div className="fname">
                        <label className="label">First Name *</label>
                        <input className="input" placeholder="                        Please enter first name - required" type="text" value ={this.state.fname} onChange={this.handleFNameChange} required/>
                        
                {/* Preffered Title */}
                <div className = "prefTitle"> Choose preferred title *</div>
                <Form.Select aria-label="Default select example" required>
                <option value="none" onChange={this.handleTitleChange}>None</option>
                <option value="student" onClick={this.handleStudent}>Student</option>
                <option value="professor" onClick={this.handleProfessor}>Professor</option>
                <option value="staff" onClick={this.handleStaff}>Staff</option>
                <option value="retired" onClick={this.handleRetired}>Retired</option>
                </Form.Select>
                </div>

                {/* Height */}
                <div className="height">
                        <label className="label">Height <i>(feet, inches)</i> </label>
                        <input className="input-2 feet" type="number" min="0" max="10" id ="feet" placeholder="feet" value ={this.state.heightfeet} onChange={this.handleHeightFeetChange}/>
                        <input className="input-2 inches" type="number" min="0" max="11" id="inches" placeholder="inches" value ={this.state.heightinch} onChange={this.handleHeightInchChange}/>
                </div>

                {/* Phone Number */}
                <div className="phone">
                        <label className="label">Phone Number <i>(format: xxx-xxx-xxxx)</i></label>
                        <input className="input" placeholder="xxx-xxx-xxxx" type="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value ={this.state.pnumber} onChange={this.handlePnumberChange}/>
                </div>

                {/* Address Validation */}
                <div className="address">Address *</div>
                <Row className="address-entry">
                    <Col xs={10}>
                    <Form.Control placeholder="City" value ={this.state.addcity} onChange={this.handleCityChange}/>
                    
                    <Form.Control placeholder="State" value ={this.state.addstate} onChange={this.handleStateChange}/>
                    
                    <Form.Control placeholder="Zip" value ={this.state.addzip} onChange={this.handleZipChange}/>
                    </Col>
                </Row>

                {/* Services Request */}
                <div className="checklist">Check all services you require</div>
                <Form>
                {['E-mail','Phone','Facebook','Twitter','Surface mail', 'Personal visit'].map((type) => (
                    <div key={`default-${type}`} className="checkBox">
                    <Form.Check 
                        inline
                        // type={type}
                        id={`${type}`}
                        label={` ${type}`}
                    />
                    </div>
                ))}
                </Form>
                
                {/* Monthly Budget Services */}
                <div className = "budget"> Monthly budget for servies </div>
                <Form.Select aria-label="Default select example" className = "budget">
                <option value="none">Less than $50</option>
                <option value="student">Between $50 and $100</option>
                <option value="professor">Above $100</option>
                </Form.Select>
                
                {/* Email */}
                <div className="email">
                        <label className="label">Email</label>
                </div>

                <Row className="address-entry-2">
                <input className="address-entry-2" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@email.com" value ={this.state.email} onChange={this.handleEmailChange} required></input>
                </Row>

                {/* Terms and Servies */}
                <Form.Group className="terms" controlId="formBasicCheckbox">
                <a className="link" href="https://policies.google.com/terms?hl=en-US">Terms and Servies *</a> 
                <Form.Check type="checkbox" label=" I agree to Terms and Services *" required/>
                </Form.Group>
                <Button className="terms" variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>

                     {/* <form className="terms" action="./SurveyForm">  
                        <input type="submit"/>  
                    </form>     */}
             
                <p className="signature">@Mdavichick</p>
                </Form>
                </form>      
            </div>
        </div>
    )
}

}


export default SurveyForm;