import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const navigatet=useNavigate("")

    const saveData=(e)=>{
        // e.preventdefault()
        console.log("save")
        axios.post("http://localhost:3001/createUser",{name,email,age})
        .then((result) =>{
            console.log(result)
            navigatet("/")
        } )
        .catch(err =>console.log(err))


    }

  return (
  
    <div className='centered-form'>
         <Form className='container'>
            <h1>Add User</h1>
         <Form.Group className="mb-3" controlId="formGroupEmail" style={{width:"50%"}}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{width:"50%"}} controlId="formGroupEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:"50%"}}>
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
    <Button variant="success" onClick={()=>saveData()}>Submit</Button>{' '}
    </Form>
    
    </div>
   
   
  )
}
