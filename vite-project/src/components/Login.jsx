import React, {useEffect, useState} from 'react'
import "./Appointment.css"



import { useNavigate, Link, Navigate} from "react-router-dom"
import axios from "axios"
const URL = "http://localhost:5000/api/auth/login"


const Login = () => {
    const[user, setUser] = useState({email:"", password:""})
    const navigate = useNavigate(); 
   

   
    const handleInputs = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})

    console.log(e)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(URL,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if(response.ok){
                alert("Login Succesful")
                navigate('/afterAppointment', { state: { email } });
                navigate('/afterAppointment');

                setUser({email:"", password:""})

                
            }else{
                alert("Invalid credential")
            }
           
        } catch (error) {
            
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        // Store the username in session storage
        sessionStorage.setItem('username', email);
        // Redirect to the after login page
        navigate('/afterAppointment'); // Adjust this to your route
    };
    
    
  return (
    
    <>
    <div className='Body'>
    <div >
        <h2>Login to Book an Appointment</h2>
        <form action='POST'>
            <div class="input-group flex">
                <label for="username">Email</label>
                <input className='font-size ' type="text" autoComplete='off' value={user.email} onChange={handleInputs} id="email" name="email" required placeholder=" Enter Email" />
                
            </div>
            <div class="input-group flex">
                <label for="password">Password</label>
                <input className='font-size ' type="password" value={user.password} onChange={handleInputs} id="password" name="password" required placeholder=" Enter Password"/>
            </div>
            
            <div class="btn-group flex1">
                <button className='btn1' type="submit" onClick={handleSubmit}  class="btn online">Book Online</button>
                
            
               

                
           <button className='btn1'><Link className='a'  to = "/register">Signup</Link></button>
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

export default Login
