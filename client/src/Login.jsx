import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
  
        <div className='centered-form'>
         <Form className='container'>
            <h1>Login User</h1>
            <Form.Group className="mb-3" style={{width:"50%"}} controlId="formGroupEmail" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3" style={{width:"50%"}} controlId="formGroupEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:"50%"}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
    <Button variant="success" >Login</Button>{' '}<br/>
    <p>Register hear <Link to="/register"> register</Link></p>
    </Form>
    </div>
  )
}
