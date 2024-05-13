import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Register() {
  return (
    
 <div className='centered-form'>
         <Form className='container'>
            <h1>Register User</h1>
            <Form.Group className="mb-3" style={{width:"50%"}} controlId="formGroupEmail" >
        <Form.Label>Nmae</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"/>
      </Form.Group>
      <Form.Group className="mb-3" style={{width:"50%"}} controlId="formGroupEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:"50%"}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
    <Button variant="success" >Rgister</Button>{' '}
    </Form>


    </div>
  )
}
