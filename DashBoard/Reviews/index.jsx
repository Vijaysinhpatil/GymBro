import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Style.css'; // We'll create this CSS file

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul J.",
      rating: 5,
      feedback: "BroGym transformed my fitness journey completely. The trainers are knowledgeable and the community is incredibly supportive!",
      duration: "Member since 1 year",
      location: "Mumbai, MH",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Aarti K.",
      rating: 5,
      feedback: "I've tried many gyms before, but BroGym's personalized approach made all the difference. Lost 12kg in 4 months!",
      duration: "Member since 8 months",
      location: "Delhi, DL",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Vikram S.",
      rating: 4,
      feedback: "The equipment is top-notch and always well-maintained. The group classes are my favorite part of the week!",
      duration: "Member since 6 months",
      location: "Bangalore, KA",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      name: "Priya M.",
      rating: 5,
      feedback: "As a beginner, I was nervous but the trainers at BroGym made me feel comfortable and helped me build confidence.",
      duration: "Member since 1.5 years",
      location: "Hyderabad, TS",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      name: "Sanjay P.",
      rating: 5,
      feedback: "The nutrition guidance along with workouts helped me achieve my dream physique. Best decision I ever made!",
      duration: "Member since 2 years",
      location: "Pune, MH",
      image: "https://randomuser.me/api/portraits/men/91.jpg"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Real Results. Real Reviews.</h2>
          <p className="subheading">Hear from our dedicated fitness family</p>
        </div>
        
        <div className="testimonials-wrapper">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonials-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                  <p className="feedback">{testimonial.feedback}</p>
                  <div className="user-info">
                    <div className="user-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="user-details">
                      <h4>{testimonial.name}</h4>
                      <p className="duration">{testimonial.duration}</p>
                      <p className="location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;