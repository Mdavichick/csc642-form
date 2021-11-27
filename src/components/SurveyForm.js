import React from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
// import { Link } from 'react-router';



// import { Dropdown,DropdownButton, MenuItem } from 'react-bootstrap';
const SurveyForm = () => {
    return(
        <div className ="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">CSC 642-842 Survey Form</h2>
                </div>
                <form className ="form-wrapper">
                <Form>

                {/* Last and First Name  */}
                <div className="lname">
                        <label className="label">Last Name *</label>
                        <input className="input" placeholder="                        Please enter last name - required" type="text" required/>
                </div>
                    <div className="fname">
                        <label className="label">First Name *</label>
                        <input className="input" placeholder="                        Please enter first name - required" type="text" required/>
                        
                {/* Preffered Title */}
                <div className = "prefTitle"> Choose preferred title *</div>
                <Form.Select aria-label="Default select example" required>
                <option value="none">None</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
                <option value="staff">Staff</option>
                <option value="retired">Retired</option>
                </Form.Select>
                </div>

                {/* Height */}
                <div className="height">
                        <label className="label">Height <i>(feet, inches)</i> </label>
                        <input className="input-2 feet" type="number" min="0" max="10" id ="feet" placeholder="feet"/>
                        <input className="input-2 inches" type="number" min="0" max="11" id="inches" placeholder="inches"/>
                </div>

                {/* Phone Number */}
                <div className="phone">
                        <label className="label">Phone Number <i>(format: xxx-xxx-xxxx)</i></label>
                        <input className="input" placeholder="xxx-xxx-xxxx" type="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        {/* <br><br><small>Format: 123-45-678</small></br></br> */}
                </div>

                {/* Address Validation */}
                <div className="address">Address *</div>
                <Row className="address-entry">
                    <Col xs={10}>
                    <Form.Control placeholder="City" />
                    
                    <Form.Control placeholder="State" />
                    
                    <Form.Control placeholder="Zip" />
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
                <input className="address-entry-2" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                </Row>

                {/* Terms and Servies */}
                <Form.Group className="terms" controlId="formBasicCheckbox">
                <a className="link" href="https://policies.google.com/terms?hl=en-US">Terms and Servies *</a> 
                <Form.Check type="checkbox" label=" I agree to Terms and Services *"/>
                </Form.Group>
                <Button className="terms" variant="primary" type="submit"  >
                    Submit
                </Button>
             
                <p className="signature">@Mdavichick</p>
                </Form>
                </form>      
            </div>
        </div>
    )
}




export default SurveyForm;