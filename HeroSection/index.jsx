import { FaArrowRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import '../HeroSection/hero.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const notify = () => toast("Stay Consistent");

  const handleForm = () => {
    setTimeout(() => {
      navigate('/form');
    }, 1000);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="hero-section">
      {/* Particles on top of image */}
      <Particles
        className="particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent"
            }
          },
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: ["#FF5F00", "#FFD700", "#FFFFFF"]  // GymBro theme colors
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.6
            },
            size: {
              value: 3,
              random: true
            },
            links: {
              enable: true,
              distance: 150,
              color: "#FF5F00",
              opacity: 0.4,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: {
                default: "out"
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "connect"   // 👈 this makes particles connect on click
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              },
              connect: {
                distance: 200,
                radius: 100,
                links: {
                  opacity: 0.6
                }
              }
            }
          },
          detectRetina: true
        }}
      />

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className='heading1'>TRANSFORM YOUR BODY WITH GYMBRO</h1>
        <p className='para1'>Join the #1 fitness community with expert trainers and cutting-edge equipment</p>
        <button className="cta-button" onClick={() => { notify(); handleForm(); }}>
          JOIN NOW <FaArrowRight className="icon" />
        </button>
        <ToastContainer theme="dark" draggable />
      </div>
    </section>
  );
};

export default HeroSection;
