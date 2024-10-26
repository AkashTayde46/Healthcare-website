import React from 'react'
// import Register from '/Register';
import {useLocation, useNavigate} from 'react-router-dom';

import './AfterAppointment.css'
function afterAppointment  (){
    const location = useLocation();
    const username = sessionStorage.getItem('username');
    // const { email } = location.state || { email: 'User' };
  return (
    <>
    <div className='body1'>
    <div class="container2">
        <h1>Welcome to Your Healthcare Portal</h1>
        <p class="welcome-message">{username ? `Welcome, ${username}!` : 'Welcome, Guest!'}</p>

        <div class="user-info">
            <h2>Your Information</h2>
            
            <p><strong>Member Since:</strong> January 2023</p>
        </div>

        <div class="links">
            <h3>Quick Links</h3>
            <a href="#" class="link-item">Book an Appointment</a>
            <a href="#" class="link-item">View Medical Records</a>
            <a href="#" class="link-item">Manage Prescriptions</a>
            <a href="#" class="link-item">Contact Support</a>
        </div>
        
        <footer>
            &copy; 2023 Healthcare Portal. All rights reserved.
        </footer>
        </div>
        </div>
    
    </>
  )
}

export default afterAppointment
