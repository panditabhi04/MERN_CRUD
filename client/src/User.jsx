import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const {id}=useParams()

  const [users, setUsers] = useState([{
    name: "Abhishek",
    email: "a@gmail.com",
    age: "26",
  }]);
  const navigat=useNavigate()
  const getData=()=>{
    axios.get("http://localhost:3001").then((result)=>{
      setUsers(result.data)
      console.log("re");
    }).catch(err=>console.log(err))

  }
  
  useEffect(()=>{
    getData()
  },[])
  console.log("users", users)

  // const deleteUser=()=>{
  //   // console.log("user",_id);
  //   axios.delete("http://localhost:3001/deleteUser/"+id)
  //   .then((result)=>{
  //     console.log("result",result);
  //     window.location.reload()
  //   })
  //   .catch(err=>console.log("err",err))
  // }
  const deleteUser = (id) => {
    console.log("id-----",id);
    axios.delete("http://localhost:3001/deleteUser/" + id)
        .then((result) => { 
            console.log("result", result);
        window.location.reload()
        })
        .catch(err => {
            console.log("Error deleting user:", err);
            // Provide some user feedback about the deletion failure
            // For example, you could display a toast message or an error modal
        });
};


// const deleteUser=(_id)=>{
//   console.log("_id:",_id);
//   fetch("http://localhost:3001/deleteUser/"+id,{
//     method:"DELETE",
//     headers:{
//       "Accept": "application/json",
//       "Content-type": "application/json",
//     },

//   }).then((res)=>{
//     if(res.status==200){
//       let deleteItem=users?.filter((item)=>item?._id==_id)
//       setUsers(deleteItem)
//     }
//   })
// }
  return (
    <div className="bg-black">
 <div className="container">
      <Button variant="primary" onClick={()=>navigat('/createUser')}>Add+</Button><br/><br/>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            
          users?.map((item) => 
              <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
              <Button variant="outline-success" onClick={()=>navigat(`/updateuser/${item._id}`)}>Update</Button>{' '}
              <Button variant="outline-danger" onClick={(e)=>deleteUser(item?._id)}>Delete</Button>{' '}
              </td>
            </tr>
          
           
          )}
        </tbody>
      </Table>
    </div>
    </div>
   
  );
}
