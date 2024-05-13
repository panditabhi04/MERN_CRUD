import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const getData = () => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then((result) => {
                console.log("result", result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    const updateUser = (e) => {
        // e.preventDefault();
        axios.put('http://localhost:3001/updateUser/' + id, { name, email, age })
            .then((result) => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className='centered-form' >
                <Form className='container' >
                    <h1>Update User</h1>
                    <Form.Group className="mb-3" controlId="formGroupName" style={{ width: "50%" }}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail" style={{ width: "50%" }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupAge" style={{ width: "50%" }}>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>
                    {/* <Button variant="success" onClick={(e)=>updateUser(e?._id)}>Submit</Button> */}
                    <Button variant="success" onClick={updateUser}>Submit</Button>

                </Form>
            </div>
        </div>
    );
}
