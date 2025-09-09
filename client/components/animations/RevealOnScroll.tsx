import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 500,
  distance = 30,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    
    switch (direction) {
      case 'up':
        return `translate(0, ${distance}px)`;
      case 'down':
        return `translate(0, -${distance}px)`;
      case 'left':
        return `translate(${distance}px, 0)`;
      case 'right':
        return `translate(-${distance}px, 0)`;
      case 'fade':
        return 'translate(0, 0)';
      default:
        return `translate(0, ${distance}px)`;
    }
  };

  const getOpacity = () => {
    return isVisible ? 1 : (direction === 'fade' ? 0 : 0.3);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: getOpacity(),
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

interface StaggeredRevealProps {
  children: React.ReactNode[];
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  direction = 'up',
  staggerDelay = 80,
  duration = 500,
  distance = 30,
  className = ''
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <RevealOnScroll
          key={index}
          direction={direction}
          delay={index * staggerDelay}
          duration={duration}
          distance={distance}
        >
          {child}
        </RevealOnScroll>
      ))}
    </div>
  );
};

interface ScaleOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
}

export const ScaleOnScroll: React.FC<ScaleOnScrollProps> = ({
  children,
  delay = 0,
  duration = 500,
  scale = 0.8,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0.3,
        transform: isVisible ? 'scale(1)' : `scale(${scale})`,
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};
