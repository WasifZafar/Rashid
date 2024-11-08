// FeedbackCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/Carousel.css';

import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';

const feedbackData = [
  {
    id: 1,
    name: "Central Coalfield Ltd. ( C.C.L )",
    year: "Internship Period – one month",
    project: "Practical training given by collage campus.",
    image: "https://mahabharti.co.in/wp-content/uploads/2020/09/coal-india-logo1.png",
   
  },
  {
    id: 2,
    name: "Civil Guruji ( Civil Engineering Training Institute )",
    year: "Training Period – August 2023 to September 2023",
    project: "Project - Sanik School Complex.",
    description: "Prepared detailed quantity estimates, rate analysis, bills of quantity, and measurement sheets, including B.B.S and site re-measurements.",
  image: "https://play-lh.googleusercontent.com/zGckhLvCVvluv_IAx28CTVifDXWBuB2on6QtUFA7yEU2ABKGY7MQjBxo4IeUbl8i5PU",

  },
  {
    id: 3,
    name: "Sumintra Fibre and Décor Private Ltd ( SFDPL )",
    year: "Working Year – January 2024 to August 2024",
    project: "Project - MHA Water Park & Resort.",
    description: "Extensively involved in execution, documentation, quantity estimation, contouring, project planning, and preparing bills and estimates for construction tasks.",
    image: "https://th.bing.com/th/id/OIP.TXQ9lxrS_nB6D6cTvNczfQAAAA?rs=1&pid=ImgDetMain",
   
  },
  {
    id: 4,
    name: "Vikas Kumar Singh Pvt. Ltd. (Government & undertaking Contractor)",
    year: "Working Year – July 2022 to July 2023",
    project:"Project - Repair & Maintaining Residencial Complex.",
    description: "Extensively involved in execution, finishing detailing, quantity estimation, planning, contouring, and profile leveling for building and road mapping.",
    image: "https://static.vecteezy.com/system/resources/previews/017/434/098/original/modern-vk-logo-design-for-business-and-company-identity-creative-vk-letter-with-luxury-concept-free-vector.jpg",
 
  },
  // Add more feedback items as needed
];

const Carousel = () => {
  return (
    <section id='Exp' className='section'>
       <div className="highlight3">
            <div className="high-line"></div>
              <div className="line3"><i class="fa-solid fa-medal"></i></div>
              <h2>Experience</h2>
              <div className="high-line h-line"></div>
            </div>
    <div className="feedback-carousel">
      <Swiper
        modules={[Autoplay, Pagination, Mousewheel]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Stops scrolling on hover
        }}
        speed={3000} // Adjust speed for continuous scrolling
        pagination={{ clickable: true }} // Enable clickable indicators
        mousewheel={true} // Enable mouse wheel control
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile view
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet view
          1024: { slidesPerView: 3, spaceBetween: 30 } // Desktop view
        }}
      >
        {feedbackData.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div className="feedback-card">
              <div className="feed-cover"><img src={feedback.image} alt={feedback.name} className="feedback-image" />
               <div className='feed-cont'>
              <h3>{feedback.name}</h3> 
              <p>{feedback.year}</p>
            
              </div>
              </div>
              <div className="feedback-content">
              <h4>{feedback.project}</h4>
                <p>{feedback.description}</p>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default Carousel;