import React, {useEffect, useState} from 'react'
// import "./Login.css"
import { useNavigate, Link} from "react-router-dom"
import axios from "axios"
import "./Appointment.css"

const Register = () => {
    const[user, setUser] = useState({name:"",email:"", password:""});
    
    const navigate = useNavigate(); 
    const handleInputs = (e) =>{
    console.log(e)
   const name = e.target.name;

   const value = e.target.value;
    setUser({...user, [name]:value});
    
    
};
const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(user);
    try{
        const response = await fetch("http://localhost:5000/api/auth/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            });

        console.log("response data:", response);
        
        if(response.ok){
            const responseData = await response.json();
            alert("registration successful");
            navigate('/login');
            setUser({name:"", email:"", password:""})
            // console.log(responseData);
        }else{

            
            const errorData = await response.json(); // Read the response as JSON
            const errorMessage = errorData.message || "Something went wrong";
            alert(`Error: ${errorMessage}`);
            alert("error inside response", "error")
            console.log("error inside response", error);
        }
    }catch(error){
        console.error("Error", error);

        }
        
        };
    



    
  return (
    <>
    <div className='Body'>
    <div class="">
        <h2>SignUp to Book an Appointment</h2>
        <form action='POST'>
            <div class="input-group flex ">
                <label for="username">Username</label>
                <input className='font-size' type="text" autoComplete='off' value={user.name} onChange={handleInputs} id="name" name="name" required placeholder=" Enter Username"/>
            </div>
            <div class="input-group flex ">
                <label for="email">Email</label>
                <input className='font-size' type="text" autoComplete='off' value={user.email} onChange={handleInputs} id="email" name="email" required placeholder=" Enter Email"/>
            </div>
            <div class="input-group flex">
                <label for="password">Password</label>
                <input className='font-size' type="password" value={user.password} onChange={handleInputs} id="password" name="password" required placeholder=" Enter Password"/>
            </div>
            
            <div class="btn-group flex1">
                <button className='btn1' type="submit" onClick={handleSubmit} class="btn online">Book Online</button>
              
            
                <Link className='a' to = "/Login"> <button className='btn1'>Login  </button></Link>
            </div>
        </form>
        </div>
        </div>
    
    <footer>
        <p>&copy; 2024 Healthcare Facility. All rights reserved.</p>
        <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
        <p>Follow us on 
            <a href="#">Facebook</a>, 
            <a href="#">Twitter</a>, 
            <a href="#">Instagram</a>
        </p>
    </footer>
    
    </>
  )
}

export default Register
