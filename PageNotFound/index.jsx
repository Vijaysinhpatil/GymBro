import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const GymBro404 = () => {
  const navigate = useNavigate();
  const [isLifting, setIsLifting] = useState(false);
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [showSpotter, setShowSpotter] = useState(false);

  // Animation for the weight plate
  useEffect(() => {
    const liftInterval = setInterval(() => {
      setIsLifting(prev => !prev);
    }, 2000);

    return () => clearInterval(liftInterval);
  }, []);

  // Random shake effect
  useEffect(() => {
    if (shakeIntensity > 0) {
      const timer = setTimeout(() => setShakeIntensity(0), 500);
      return () => clearTimeout(timer);
    }
  }, [shakeIntensity]);

  const triggerShake = () => {
    setShakeIntensity(Math.floor(Math.random() * 5) + 1);
  };

  const handleNeedSpot = () => {
    setShowSpotter(true);
    setTimeout(() => setShowSpotter(false), 3000);
  };

  return (
    <div className="gymbro-404-container">
      <div className="gymbro-404-content">
        <div 
          className={`weight-plate ${isLifting ? 'lifting' : ''}`}
          style={{ '--shake': shakeIntensity }}
          onClick={triggerShake}
        >
          <span>4</span>
          <div className="plate-hole"></div>
          <span>4</span>
          <div className="plate-bar"></div>
        </div>
        
        <h1 className="title">404 - WEIGHT NOT FOUND</h1>
        <p className="subtitle">Looks like you dropped this page during your last set!</p>
        
        <div className="cta-container">
          <button 
            className="btn-primary" 
            onClick={() => navigate('/')}
            onMouseEnter={(e) => e.currentTarget.classList.add('pulse')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('pulse')}
          >
            RERACK TO HOMEPAGE
          </button>
          
          <div className="secondary-options">
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/workouts')}
              onMouseEnter={() => setShakeIntensity(2)}
            >
              BROWSE WORKOUTS
            </button>
            <button 
              className="btn-secondary" 
              onClick={handleNeedSpot}
              onMouseEnter={() => setShakeIntensity(3)}
            >
              NEED A SPOT?
            </button>
          </div>
        </div>
        
        <blockquote className="motivational-quote">
          "Failure is just another rep on the road to success. Get back up and try again!"
        </blockquote>

        {showSpotter && (
          <div className="spotter">
            <div className="spotter-text">I GOT YOU BRO!</div>
            <div className="spotter-hands">✋✋</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GymBro404;