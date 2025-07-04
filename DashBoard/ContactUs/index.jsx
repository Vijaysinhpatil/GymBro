import React, { useState } from 'react';
import './Style.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    goal: 'general',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', goal: 'general' });
    }, 1500);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>💪 Need a Spot? <span>Contact Us!</span></h1>
          <p>Drop us a message—whether it's about memberships, personal training, or just gym talk.</p>
        </div>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">🏋️‍♂️</div>
            <h2>Message Sent!</h2>
            <p>We'll get back to you faster than a PR deadlift! 💪</p>
            <button onClick={() => setIsSubmitted(false)}>Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`contact-form ${shake ? 'shake' : ''}`}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., John Gains"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., swole@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>What's Your Goal?</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="membership">Membership</option>
                <option value="training">Personal Training</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hit us with your best shot..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
              onClick={!formData.name || !formData.email || !formData.message ? triggerShake : null}
            >
              {isLoading ? 'Sending... 🏋️‍♂️' : 'Send Message'}
            </button>
          </form>
        )}

        <div className="contact-info">
          <div className="info-card">
            <span>📞</span>
            <h3>Call Us</h3>
            <p>+1 (555) LIFT-NOW</p>
          </div>
          <div className="info-card">
            <span>📍</span>
            <h3>Visit Us</h3>
            <p>123 Gains Avenue, Muscle City</p>
          </div>
          <div className="info-card">
            <span>📧</span>
            <h3>Email Us</h3>
            <p>support@gymbro.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;