import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import User from "./User";
import CreateUser from "./CreateUser"
import UpdataUser from "./UpdateUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Register from "./Register";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login/>} /> */}
      <Route path="/register" element={<Register/>} />

   
          <Route path="/" element={<User />} />
          <Route path="/createUser" element={<CreateUser/>} />
          <Route path="/updateuser/:id" element={<UpdataUser/>} />
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
