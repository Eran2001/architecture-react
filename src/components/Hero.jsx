import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section hero h-screen bg-gray-950 text-white relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/hero.jpg" alt="" className="object-cover w-full h-full" style={{ filter: 'brightness(80%) blur(4px)' }} />
        {showText && (
          <div className="text-container">
            <h1 className="text-field one text-shadow">Welcome to Our Architecture Firm</h1>
            <h1 className="text-field two text-shadow">Innovative Designs</h1>
            <h1 className="text-field three text-shadow">Building the Future</h1>
            <div className="hero-buttons">
              <button className="hero-btn-one" onClick={() => navigate('/portfolio')}>Explore More</button>
              <button className="hero-btn-two" onClick={() => navigate('/about')}>Who We Are</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
