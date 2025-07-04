import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TrainerCard from './TrainerCard';
import trainers from './TrainerData';
import './TrainerSection.css';

const Trainer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="trainer-section" ref={ref}>
      {/* Floating Dumbbell Elements */}
      <div className="floating-dumbbell">🏋️</div>
      <div className="floating-dumbbell">🏋️‍♂️</div>
      <div className="floating-dumbbell">🏋️‍♀️</div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          MEET OUR <span className="highlight">ELITE TRAINERS</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Certified professionals dedicated to your fitness journey
        </motion.p>

        <motion.div 
          className="trainer-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trainer;