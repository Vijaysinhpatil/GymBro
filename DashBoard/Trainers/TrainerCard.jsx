import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaDumbbell } from 'react-icons/fa';
import './TrainerCard.css';

const TrainerCard = ({ trainer, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(255, 95, 0, 0.3)"
    }
  };

  return (
    <motion.div
      className="trainer-card"
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <div className="trainer-photo-container">
        <img 
          src={trainer.photo} 
          alt={trainer.name} 
          className="trainer-photo" 
          loading="lazy"
        />
        <div className="trainer-badge">
          <FaDumbbell className="badge-icon" />
        </div>
      </div>

      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-specialization">{trainer.specialization}</p>
        <p className="trainer-experience">{trainer.experience}</p>
        <p className='trainer-bio'>{trainer.bio}</p>
        
        <div className="trainer-socials">
          <motion.a 
            href={trainer.socials.instagram}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`${trainer.name} Instagram`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href={trainer.socials.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`${trainer.name} LinkedIn`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;