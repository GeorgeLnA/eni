import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false);
  const [isRollingUp, setIsRollingUp] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  
  const text = "INE";

  useEffect(() => {
    // Show text after 3.7 seconds
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3700);

    // Start roll up animation after 5 seconds
    const rollUpTimer = setTimeout(() => {
      setIsRollingUp(true);
    }, 5000);

    // Complete loading after roll up animation (add transition duration)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(rollUpTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out ${
        isRollingUp ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Spline Animation Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JKFmGE219-wp1dNf/scene.splinecode" />
      </div>
      
      {/* Company Name Text */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pt-80 ${
          showText ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center px-6" style={{ fontFamily: 'Kugile, sans-serif' }}>
          <span 
            className={`inline-block transition-opacity duration-1000 ease-out ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: showText ? '0ms' : '0ms'
            }}
          >
            INE
          </span>
        </h1>
      </div>
    </div>
  );
}
