import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat, FaFire, FaCalendarAlt, FaClock } from 'react-icons/fa';
import './program.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      icon: <FaDumbbell />,
      title: "Strength Foundation",
      description: "Build muscle and increase power with our expert-led strength training program",
      level: "Beginner",
      duration: "8 weeks",
      schedule: "Mon/Wed/Fri",
      color: "#FF5F00"
    },
    {
      id: 2,
      icon: <FaRunning />,
      title: "HIIT Revolution",
      description: "Burn fat fast with high-intensity interval training sessions",
      level: "Intermediate",
      duration: "6 weeks",
      schedule: "Tue/Thu/Sat",
      color: "#00E0FF"
    },
    {
      id: 3,
      icon: <FaHeartbeat />,
      title: "Yoga & Mobility",
      description: "Improve flexibility and reduce stress with mindful movement",
      level: "All Levels",
      duration: "Ongoing",
      schedule: "Daily",
      color: "#4CAF50"
    },
    {
      id: 4,
      icon: <FaFire />,
      title: "Elite Conditioning",
      description: "Advanced training for athletes and fitness enthusiasts",
      level: "Advanced",
      duration: "12 weeks",
      schedule: "Mon-Fri",
      color: "#F44336"
    }
  ];

  return (
    <section className="programs-section">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Transform Your Fitness Journey</h2>
          <p>Specialized programs designed by experts to help you achieve your goals</p>
        </motion.div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="program-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 15px 30px ${program.color}33`
              }}
            >
              <div className="program-icon" style={{ color: program.color }}>
                {program.icon}
              </div>
              <div className="program-content">
                <div className="program-tag">{program.level}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-meta">
                  <span><FaCalendarAlt /> {program.duration}</span>
                  <span><FaClock /> {program.schedule}</span>
                </div>
              </div>
              <button 
                className="program-button"
                style={{ backgroundColor: program.color }}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;