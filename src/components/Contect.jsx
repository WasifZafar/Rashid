import React from 'react';
import './styles/contact.css'


  const Contact = React.forwardRef((props, ref) => {
    

  return (
    <section id="contact" ref={ref} className="section">
       <h1 className='heading ch'><i class="fa-solid fa-address-book"></i> Get To Touch.</h1>
       
     

      
        <div className="contect-out-box">
       <div className='cont-heading'>
        <h2>Let's Build Something Together!</h2>
        <p>Feel free to reach out. I’m always open to discussing new projects or collaborations.</p>
      </div>
      
      <div className="contact-cover">
      <div className="follow-link">
        <h2>Follow Link.</h2>
       <a href= "https://www.linkedin.com/in/rashid-qamar-95660b246"target="_blank rel="noopener noreferrer><i class="fa-brands fa-linkedin" style={{color: "#0740b0",}} ></i>Linkedin</a>
       <a href="https://wa.me/qr/7XAOK6GLVDT2A1"target="_blank rel="noopener noreferrer><i class="fa-brands fa-whatsapp" style={{color: "#2aa248",}}></i>Whatsapp</a>
       <a href="https://www.instagram.com/rashid__qamar/profilecard/?igsh=dHg1bnhha2ozY3Ey"target="_blank rel="noopener noreferrer><i class="fa-brands fa-instagram" style={{color: "#bf2b90",}}></i>Instagram</a>
       {/* <a href="https://github.com/WasifZafar"target="_blank rel="noopener noreferrer><i class="fa-brands fa-youtube" style={{color: "#ea0606",}}></i>YouTube</a> */}
      </div>

      <div className="contact-me">
        <h2>Contact Me.</h2>
        <a href="mailto:qamarrashid3883@gmail.com"><i class="fa-solid fa-envelope"></i>qamarrashid3883 <br />@gmail.com</a>
        <a href="tel:+917667638466"><i class="fa-solid fa-phone"></i>+917667638466</a>
      </div>

      </div>
      </div>


      <div className="web-name">
        <h1>Rashid Qamar</h1>
        <p>Design & Creation</p>
      </div>

    </section>
    
  );
});

export default Contact;
