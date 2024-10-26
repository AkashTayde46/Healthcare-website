import React from 'react'
import "./Home.css"
import { useNavigate, Link} from "react-router-dom"


const Home = () => {
  return (
    <body>
    <header>
        <div class="logo">Healthcare Facility</div>
    </header>

    <div class="hero">
        <h1>Welcome to Our Healthcare Facility</h1>
        <h2>Your health is our priority</h2>
        {/* <button className='btn1'><Link  className='a' to = "/Register"> Click to Book Appointment</Link></button> */}
        <Link  className='a' to = "/Register"><button className='btn'>Click to Book Appointment </button></Link>
    </div>
   
    <div class="container1">
        <section id="services" class="services">
            <h1>Our Services</h1>
            <div class="card-container">
        <div class="card">
            
            <div class="card-content">
                <h2 class="card-title">Emergency Services</h2>
                <p class="card-text">Emergency Room (ER): Immediate care for urgent medical conditions.
                Trauma Services: Specialized care for severe injuries.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
        <div class="card">
         
            <div class="card-content">
                <h2 class="card-title">Pediatric Services</h2>
                <p class="card-text">Children's Health Care: Specialized care for infants, children, and adolescents.
                Pediatric Emergency Services: ER services tailored for children.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
        <div class="card">
           
            <div class="card-content">
                <h2 class="card-title">Diagnostic Services
                </h2>
                <p class="card-text">Imaging Services: X-rays, MRI, CT scans, and ultrasounds.
                Laboratory Services: Blood tests, biopsies, and other diagnostic tests.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
    </div>
        </section>

        <section id="about" class="about">
            <h1>About Us</h1>
            <p>We are dedicated to providing top-notch healthcare with a personal touch. Our team of professionals is here to serve you with compassion and expertise.</p>
        </section>

        <section id="testimonials" class="testimonials">
            <h2>What Our Patients Say</h2>
            <div class="testimonial">
                <p>"The care I received was exceptional. The staff is friendly and professional. Highly recommend!"</p>
                <p>- Jane Doe</p>
            </div>
            <div class="testimonial">
                <p>"A wonderful experience from start to finish. They truly care about their patients."</p>
                <p>- John Smith</p>
            </div>
        </section>
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
</body>
  )
}

export default Home