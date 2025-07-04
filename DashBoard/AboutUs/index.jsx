import { number, useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './Style.css'
const AboutUs = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const stats = [
    {
      number: "8+",
      label: "Years Experience",
      id: 1,
    },
    {
      number: "6",
      label: "Expert Trainers",
      id: 2,
    },
    {
      number: "500+",
      label: "Happy Members",
      id: 3,
    },
    {
      number: "10K",
      label: "WorkOuts Daily",
      id: 4,
    },
  ];

  const featurs = [
    {
      title: "Personalized Training",
      icon: "💪",
      description: "Custom programs tailored to your goals and fitness level",
    },
    {
      title: "Community Support",
      icon: "👥",
      description: "Join our supportive fitness community",
    },
    {
      title: "Nutrition Plans",
      icon: "🥗",
      description: "Expert-designed meal plans to complement your training",
    },
    {
      title: "Progress Tracking",
      icon: "📊",
      description: "Monitor your improvements with our app",
    },
  ];
  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            About <span>GymBro</span>
          </h2>
          <p>Where Fitness Meets Community and rep Counts</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -30 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="GymBro Fitness"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 30 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>More Than Just a Gym</h3>
            <p>
              Founded in 2015, GymBro started as a small local gym with a big
              vision - to create a fitness community where everyone feels
              welcome, regardless of their fitness level.
            </p>
            <p>
              We believe that fitness is a journey, not a destination. Our
              expert trainers are dedicated to helping you achieve your goals
              through personalized training programs, nutritional guidance, and
              constant motivation.
            </p>
            <p>
              At GymBro, you're not just another member - you're part of our
              fitness family. We celebrate every milestone together, from your
              first push-up to your personal best deadlift.
            </p>

            <div className="features-grid">
              {featurs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-card"
                  whileHover={{ y: -5 }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="state">
              {
                stats.map((stat) => (
                  <motion.div
                  key={stat.id}
                  className="stat-item"
                  whileHover={{
                    y : -5 ,
                    backgroundColor : '#ff5e00',
                    color : "#fff"
                  }}
                  transition={{duration : 0.3}}
                  >
                    <div className="stat-number">{stat.number}</div>
                     <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
