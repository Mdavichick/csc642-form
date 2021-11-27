import React from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
// import { Link } from 'react-router';



// import { Dropdown,DropdownButton, MenuItem } from 'react-bootstrap';
const SurveyForm = () => {
    return(
        <div className ="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Survey Form</h2>
                </div>
                <form className ="form-wrapper">
                <Form>


                <div className="lname">
                        <label className="label">Last Name</label>
                        <input className="input" type="text"/>
                </div>
                    <div className="fname">
                        <label className="label">First Name</label>
                        <input className="input" type="text"/>
                
                <div className = "prefTitle"> Choose preferred title </div>
                <Form.Select aria-label="Default select example">
                <option value="none">None</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
                <option value="staff">Staff</option>
                <option value="retired">Retired</option>
                </Form.Select>
                </div>

                <div className="height">
                        <label className="label">Height (feet, inches) </label>
                        <input className="input-2 feet" type="number"/>
                        <input className="input-2 inches" type="number"/>
                </div>

                <div className="phone">
                        <label className="label">Phone Number</label>
                        <input className="input" type="number"/>
                </div>

                {/* Address Validation */}
                <div className="address">Address</div>
                <Row className="lname">
                    <Col xs={10}>
                    <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Zip" />
                    </Col>
                </Row>

                <div className="budget">Check all services you require</div>
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
                
                <div className = "budget"> Monthly budget for servies </div>
                <Form.Select aria-label="Default select example" className = "checkBox">
                <option value="none">Less than $50</option>
                <option value="student">Between $50 and $100</option>
                <option value="professor">Above $100</option>
                </Form.Select>
                
                <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email"/>
                </div>

                <Form.Group className="terms" controlId="formBasicCheckbox">
                <a href="https://www.w3schools.com/">Terms and Servies</a> 
                <Form.Check type="checkbox" label=" I agree to terms and services" a href="https://www.w3schools.com/" />
                </Form.Group>
                <Button className="terms" variant="primary" type="submit">
                    Submit
                </Button>
             
                
                </Form>
                </form>      
            </div>
        </div>
    )
}

export default SurveyForm;