'use client'
import React, { useCallback } from "react";
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const CustomParticles = () => {
    const particlesInit = async (main) => { 
       
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
       
      }; 

  return (
    <div className="h-full absolute  top-0 left-0 -z-30">
       <Particles id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "rgb(10,10,25)", 
          }, 
          fpsLimit: 60, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 1.4, 
            }, 
            color: { 
              value: "#f1f1f1", 
            }, 
            number: { 
              density: { 
                enable: true, 
                area: 1080, 
              }, 
              limit: 0, 
              value: 800, 
            }, 
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0.5, 
                speed: 1.6, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      />
    </div>
   
  );
};

export default CustomParticles;
