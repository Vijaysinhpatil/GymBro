import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaCrown, FaFire, FaStar, FaExchangeAlt } from 'react-icons/fa';
import './Style.css';

const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = {
    monthly: [
      {
        name: 'Basic',
        price: '₹599',
        duration: 'month',
        popular: false,
        features: {
          gymAccess: true,
          trainer: false,
          dietPlan: false,
          allHours: false,
          appAccess: true,
          steamRoom: false,
          groupClasses: false
        }
      },
      {
        name: 'Standard',
        price: '₹2,099',
        duration: '3 months',
        popular: true,
        features: {
          gymAccess: true,
          trainer: true,
          dietPlan: true,
          allHours: false,
          appAccess: true,
          steamRoom: false,
          groupClasses: true
        }
      },
      {
        name: 'Premium',
        price: '₹7,499',
        duration: 'year',
        popular: false,
        features: {
          gymAccess: true,
          trainer: true,
          dietPlan: true,
          allHours: true,
          appAccess: true,
          steamRoom: true,
          groupClasses: true
        }
      }
    ],
    yearly: [
      {
        name: 'Basic',
        price: '₹8,500',
        duration: 'year',
        popular: false,
        features: {
          gymAccess: true,
          trainer: false,
          dietPlan: false,
          allHours: false,
          appAccess: true,
          steamRoom: false,
          groupClasses: false
        }
      },
      {
        name: 'Standard',
        price: '₹7,500',
        duration: 'year',
        popular: true,
        features: {
          gymAccess: true,
          trainer: true,
          dietPlan: true,
          allHours: false,
          appAccess: true,
          steamRoom: false,
          groupClasses: true
        }
      },
      {
        name: 'Premium',
        price: '₹6,999',
        duration: 'year',
        popular: false,
        features: {
          gymAccess: true,
          trainer: true,
          dietPlan: true,
          allHours: true,
          appAccess: true,
          steamRoom: true,
          groupClasses: true
        }
      }
    ]
  };

  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <div className="membership-page">
      {/* Hero Section */}
      <motion.section 
        className="membership-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Elevate Your Fitness Journey</h1>
        <p>Choose the perfect plan for your goals and unlock premium benefits</p>
      </motion.section>

      {/* Pricing Toggle */}
      <div className="pricing-toggle">
        <span>Monthly</span>
        <button 
          className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
          onClick={() => setIsYearly(!isYearly)}
        >
          <FaExchangeAlt />
          <span className="toggle-knob"></span>
        </button>
        <span>Yearly <small>(Save 20%)</small></span>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {currentPlans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(255, 95, 0, 0.3)' }}
            onHoverStart={() => setHoveredPlan(plan.name)}
            onHoverEnd={() => setHoveredPlan(null)}
          >
            {plan.popular && (
              <div className="popular-badge">
                <FaCrown /> BEST VALUE
              </div>
            )}
            <h3>{plan.name}</h3>
            <div className="price">
              <span>{plan.price}</span>
              <small>/{plan.duration}</small>
            </div>
            <ul className="features">
              <li><FaCheck /> Access to gym floor</li>
              <li>{plan.features.trainer ? <FaCheck /> : <FaTimes />} Personal Trainer</li>
              <li>{plan.features.dietPlan ? <FaCheck /> : <FaTimes />} Customized Diet Plan</li>
              <li>{plan.features.allHours ? <FaCheck /> : <FaTimes />} 24/7 Access</li>
              <li><FaCheck /> Mobile App Access</li>
              <li>{plan.features.steamRoom ? <FaCheck /> : <FaTimes />} Steam & Shower Room</li>
              <li>{plan.features.groupClasses ? <FaCheck /> : <FaTimes />} Group Classes</li>
            </ul>
            <button className={`join-btn ${plan.popular ? 'popular-btn' : ''}`}>
              {plan.popular ? 'Start 7-Day Trial' : 'Join Now'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <motion.div 
        className="feature-table"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>Plan Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>💪 Access to gym floor</td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
            <tr>
              <td>🏋️ Personal Trainer</td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
            <tr>
              <td>🥗 Customized Diet Plan</td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
            <tr>
              <td>⏰ 24/7 Access</td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
            <tr>
              <td>📱 Mobile App Access</td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
            <tr>
              <td>🚿 Steam & Shower Room</td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
            <tr>
              <td>👥 Group Classes</td>
              <td><FaTimes className="feature-no" /></td>
              <td><FaCheck className="feature-yes" /></td>
              <td><FaCheck className="feature-yes" /></td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* FAQs */}
      <motion.div 
        className="faq-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I cancel my membership?</h3>
            <p>Yes, you can cancel anytime with 30 days notice.</p>
          </div>
          <div className="faq-item">
            <h3>Can I freeze my membership?</h3>
            <p>We allow 1 month freeze per year for medical reasons.</p>
          </div>
          <div className="faq-item">
            <h3>How do I upgrade my plan?</h3>
            <p>Visit your account dashboard or contact our support team.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a joining fee?</h3>
            <p>No joining fee for Premium members. Others pay ₹999.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Membership;