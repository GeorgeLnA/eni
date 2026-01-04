import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Plus,
  Minus,
  Info,
} from "lucide-react";
import Spline from '@splinetool/react-spline';
import { RevealOnScroll, StaggeredReveal, ScaleOnScroll } from '../components/animations/RevealOnScroll';

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    { name: "p1", image: "/kobu-agency-7okkFhxrxNw-unsplash-1024x683.jpg" },
    { name: "p2", image: "/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg" },
    { name: "p3", image: "/peter-zhou-LUeUUFLGgnY-unsplash.jpg" },
    { name: "p4", image: "/kobu-agency-7okkFhxrxNw-unsplash-1024x683.jpg" },
    { name: "p5", image: "/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg" },
    { name: "p6", image: "/peter-zhou-LUeUUFLGgnY-unsplash.jpg" },
  ];

  const portfolioItems = [
    { title: "case1", image: "/scott-blake-sXASnaWglyY-unsplash-1024x683.jpg" },
    { title: "case2", image: "/airfocus-K_VeavYEfdA-unsplash-1024x683.jpg" },
    { title: "case3", image: "/kate-townsend-hEC6zxdFF0M-unsplash-1024x680.jpg" },
    { title: "case4", image: "/maxime-agnelli-QC1oHW5JVu4-unsplash-1024x683.jpg" },
    { title: "case5", image: "/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg" },
  ];

  // Interactive HR Services Journey
  const hrJourney = [
    {
      id: "discover",
      title: "Discover",
      subtitle: "Understanding Your Vision",
      desc: "We dive deep into your organizational culture, business goals, and specific HR challenges to create a tailored roadmap for success.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "from-yellow-500 via-yellow-600 to-yellow-700",
      features: ["Culture Analysis", "Gap Assessment", "Strategic Planning"]
    },
    {
      id: "connect",
      title: "Connect",
      subtitle: "Building Your Dream Team",
      desc: "Our AI-powered platform and expert recruiters identify, evaluate, and connect you with top-tier talent across multiple industries.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-yellow-600 via-yellow-700 to-yellow-800",
      features: ["Smart Matching", "Candidate Screening", "Interview Coordination"]
    },
    {
      id: "grow",
      title: "Grow",
      subtitle: "Empowering Excellence",
      desc: "We provide ongoing support through training programs, performance optimization, and strategic HR consulting to ensure long-term success.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-yellow-700 via-yellow-800 to-yellow-900",
      features: ["Training Programs", "Performance Management", "Strategic Consulting"]
    }
  ];
  
  const [activeJourney, setActiveJourney] = useState(0);
  const [hoveredJourney, setHoveredJourney] = useState(null);

  const services = [
    {
      title: "Recruitment Services",
      content:
        "Expert talent acquisition across retail, hospitality, engineering, and professional services sectors.",
    },
    {
      title: "Employee Outsourcing",
      content:
        "Comprehensive HR outsourcing including payroll, benefits administration, and workforce management.",
    },
    {
      title: "Training & Development",
      content:
        "Customized training programs to enhance employee skills, performance, and career development.",
    },
    {
      title: "HR Consulting",
      content:
        "Strategic HR consulting to optimize your human resources processes and organizational policies.",
    },
    {
      title: "Job Placement Services",
      content:
        "Dedicated job search support with resume building, interview preparation, and career guidance.",
    },
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including retail, hospitality, engineering, healthcare, and professional services across Malta and UAE.",
    },
    {
      question: "Do you provide training services?",
      answer:
        "Yes. We offer comprehensive training and development programs to enhance employee skills and performance across various sectors.",
    },
    {
      question: "Are you certified?",
      answer:
        "Yes. We are a C 76838 certified company established in 2016, providing trusted HR solutions with full compliance and professional standards.",
    },
    {
      question: "Do you operate in multiple locations?",
      answer:
        "Yes. We have offices in Malta and UAE, providing HR services and job opportunities across both regions.",
    },
    {
      question: "How do you match candidates to jobs?",
      answer:
        "We use a comprehensive assessment process including skills evaluation, experience matching, and cultural fit analysis to ensure the best placements.",
    },
    {
      question: "What types of jobs do you offer?",
      answer:
        "We offer diverse opportunities from entry-level positions to executive roles across retail, hospitality, engineering, and professional services.",
    },
  ];

  return (
    <div>
      {/* Spacer to push content below fixed hero */}
      <div style={{ height: '100vh' }}></div>
      
      {/* Hero Section - Fixed Position */}
      <section className="fixed inset-0 h-screen flex items-center bg-black z-10">
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center">
           {/* Left Side - Image with Hover Effect */}
           <div 
             className="w-full lg:w-3/5 h-2/5 sm:h-1/2 lg:h-4/5 bg-black ml-0 relative overflow-hidden group cursor-pointer opacity-0 transform translate-x-8 transition-all duration-800 ease-out"
             style={{ 
               marginTop: '2%',
               animationDelay: '5.2s',
               animation: 'fadeInRight 0.8s ease-out 5.2s forwards'
             }}
           >
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
               style={{ backgroundImage: 'url(/adrian-kusznirewicz-8LUxHtQXix8-unsplash.jpg)' }}
             />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70"></div>
            
            {/* Hover Overlay with Golden Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Floating Elements on Hover */}
            <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
              <div className="bg-yellow-500/90 text-black px-4 py-2 font-bold text-sm" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                INE
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
              <div className="text-white text-right">
                <div className="text-2xl font-bold text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>500+</div>
                <div className="text-sm text-white/80">Jobs Placed</div>
              </div>
            </div>
            
            {/* Mobile-only text overlay on image */}
            <div className="absolute inset-0 flex items-end justify-start lg:hidden">
              <div className="text-left px-4 pb-8">
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  <span className="text-white">Your Gateway to</span>
                  <span className="block text-yellow-500">Elite Careers</span>
                </h1>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Connecting exceptional talent with premier opportunities across Malta and UAE.
                </p>
              </div>
            </div>
          </div>
          
           {/* Right Side - Compact Content & Form */}
           <div className="w-full lg:w-2/5 h-1/3 sm:h-1/2 lg:h-3/5 flex flex-col justify-start lg:justify-center px-4 lg:px-8 mt-8 sm:mt-10 lg:mt-8">
             {/* Main Content */}
             <div className="mb-6 hidden lg:block">
               <div 
                 className="opacity-0 transform translate-x-8 transition-all duration-800 ease-out hidden lg:block"
        style={{
                   animationDelay: '5.5s',
                   animation: 'fadeInLeft 0.8s ease-out 5.5s forwards'
                 }}
               >
                 <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                   <span className="text-white">Your Gateway to</span>
                   <span className="block text-yellow-500">Elite Careers</span>
            </h1>
               </div>
               <div 
                 className="opacity-0 transform translate-x-8 transition-all duration-800 ease-out hidden lg:block"
                 style={{ 
                   animationDelay: '5.7s',
                   animation: 'fadeInLeft 0.8s ease-out 5.7s forwards'
                 }}
               >
                 <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
                   Connecting exceptional talent with premier opportunities across Malta and UAE.
                 </p>
               </div>
              
               {/* Key Points */}
               <div className="space-y-2 mb-4 hidden lg:block">
                 <div 
                   className="opacity-0 transform translate-x-8 transition-all duration-600 ease-out"
                   style={{ 
                     animationDelay: '5.9s',
                     animation: 'fadeInLeft 0.6s ease-out 5.9s forwards'
                   }}
                 >
                   <div className="flex items-center gap-3">
                     <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <span className="text-sm sm:text-base text-white/90" style={{ fontFamily: 'Uni Sans, sans-serif' }}>Comprehensive HR Solutions</span>
                   </div>
                 </div>
                 <div 
                   className="opacity-0 transform translate-x-8 transition-all duration-600 ease-out"
                   style={{ 
                     animationDelay: '6.1s',
                     animation: 'fadeInLeft 0.6s ease-out 6.1s forwards'
                   }}
                 >
                   <div className="flex items-center gap-3">
                     <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <span className="text-sm sm:text-base text-white/90" style={{ fontFamily: 'Uni Sans, sans-serif' }}>Expert Talent Acquisition</span>
                   </div>
                 </div>
                 <div 
                   className="opacity-0 transform translate-x-8 transition-all duration-600 ease-out"
                   style={{ 
                     animationDelay: '6.3s',
                     animation: 'fadeInLeft 0.6s ease-out 6.3s forwards'
                   }}
                 >
                   <div className="flex items-center gap-3">
                     <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <span className="text-sm sm:text-base text-white/90" style={{ fontFamily: 'Uni Sans, sans-serif' }}>Malta & UAE Coverage</span>
                   </div>
                 </div>
               </div>
            </div>
            
             {/* Minimalistic Form */}
             <div 
               className="opacity-0 transform translate-x-8 transition-all duration-800 ease-out"
               style={{ 
                 animationDelay: '6.5s',
                 animation: 'fadeInLeft 0.8s ease-out 6.5s forwards'
               }}
             >
               <div className="bg-black p-4 sm:p-6 border border-white">
                 <h3 className="text-base sm:text-lg font-bold text-white mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                   Get Started
                 </h3>
                 <form className="space-y-3 sm:space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     <input
                       type="text"
                       placeholder="First Name"
                       className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-yellow-500 transition-colors text-sm"
                     />
                     <input
                       type="text"
                       placeholder="Last Name"
                       className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-yellow-500 transition-colors text-sm"
                     />
                   </div>
                   <input
                     type="email"
                     placeholder="Email"
                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-yellow-500 transition-colors text-sm"
                   />
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     <select className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-white text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm">
                       <option value="">I'm a...</option>
                       <option>Job Seeker</option>
                       <option>Employer</option>
                     </select>
                     <select className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-white text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm">
                       <option value="">Location</option>
                       <option>Malta</option>
                       <option>UAE</option>
                     </select>
                   </div>
                   <button
                     type="submit"
                     className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 text-sm"
                   >
                     Start Your Journey
                   </button>
                 </form>
               </div>
              </div>
          </div>
        </div>
      </section>

       {/* Services Section - Scrolls over hero */}
       <section className="relative bg-black py-20 sm:py-24 lg:py-32 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
           <RevealOnScroll direction="up" delay={200} duration={800}>
          <div className="max-w-2xl mb-16">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                 <span className="text-white">Comprehensive </span>
                 <span className="text-yellow-500">HR Solutions</span>
            </h2>
               <p className="text-lg text-gray-300 leading-relaxed">
                 At INE, we understand the critical importance of human resources in driving the success of organizations. 
                 As a premier provider of HR solutions and job services, we offer innovative and tailored solutions for 
                 recruitment, talent management, training, and consulting.
               </p>
             </div>
           </RevealOnScroll>

           {/* Interactive HR Journey Cards */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
             {hrJourney.map((journey, index) => {
              const isActive = activeJourney === index;
              const isHovered = hoveredJourney === index;
              
              return (
                <RevealOnScroll key={journey.id} direction="up" delay={400 + (index * 200)} duration={800}>
                  <div
                    className={`group relative overflow-hidden transition-all duration-700 cursor-pointer ${
                      isActive ? 'lg:scale-105' : 'lg:scale-100'
                    } ${isHovered ? 'lg:scale-102' : ''}`}
                    onClick={() => setActiveJourney(index)}
                    onMouseEnter={() => setHoveredJourney(index)}
                    onMouseLeave={() => setHoveredJourney(null)}
                  >
                  {/* Card Background */}
                  <div className={`relative bg-black border-2 border-yellow-500 p-8 lg:p-10 min-h-[400px] lg:min-h-[450px] transition-all duration-500 ${
                    isActive ? 'shadow-2xl shadow-yellow-500/30' : 'shadow-lg shadow-yellow-500/20'
                  }`}>
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-500/20 transform rotate-45 transition-transform duration-1000 group-hover:rotate-90"></div>
                      <div className="absolute bottom-4 left-4 w-24 h-24 bg-yellow-500/20 transform -rotate-45 transition-transform duration-1000 group-hover:-rotate-90"></div>
          </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon & Title */}
                      <div className="mb-6">
                        <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                          {journey.icon}
                        </div>
                        <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                          {journey.title}
                </h4>
                        <p className="text-lg text-white/90 font-medium">
                          {journey.subtitle}
                </p>
              </div>

                      {/* Description */}
                      <div className="flex-1 mb-6">
                        <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                          {journey.desc}
                        </p>
                            </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {journey.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-center gap-3 text-white/90 text-sm lg:text-base"
                          >
                            <div className="w-2 h-2 bg-yellow-500/60 transform transition-all duration-300 group-hover:scale-125"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-500 transform transition-all duration-500 animate-pulse"></div>
                      )}
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                          </div>
                        </div>
                </RevealOnScroll>
                      );
                    })}
           </div>

           {/* Journey Navigation */}
           <RevealOnScroll direction="fade" delay={800} duration={600}>
             <div className="mt-8 flex items-center justify-center gap-4">
               {hrJourney.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setActiveJourney(index)}
                   className={`w-4 h-4 transition-all duration-300 ${
                     index === activeJourney 
                       ? 'bg-yellow-500 scale-125' 
                       : 'bg-yellow-500/40 hover:bg-yellow-500/60'
                   }`}
                   aria-label={`Go to ${hrJourney[index].title} step`}
                 />
               ))}
             </div>
           </RevealOnScroll>
         </div>
       </section>

       {/* Featured Jobs Section */}
       <section className="relative bg-black py-20 z-20">
         <div className="container mx-auto px-6 sm:px-8 lg:px-16">
           {/* Malta Jobs */}
           <RevealOnScroll direction="up" delay={200} duration={800}>
             <div className="mb-16">
               <h2 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-12" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                 Featured Jobs In Malta
               </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Welder", image: "/maxime-agnelli-QC1oHW5JVu4-unsplash-1024x683.jpg", location: "Malta", type: "Full-time" },
                { title: "Waiter", image: "/kate-townsend-hEC6zxdFF0M-unsplash-1024x680.jpg", location: "Malta", type: "Part-time" },
                { title: "Tower Crane Operator", image: "/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg", location: "Malta", type: "Full-time" }
              ].map((job, index) => (
                <div key={index} className="group relative overflow-hidden bg-black border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={job.image} 
                      alt={job.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
               <div className="mt-8 text-center">
                 <button className="px-8 py-4 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                   All Jobs
                 </button>
               </div>
             </div>
           </RevealOnScroll>

          {/* UAE Jobs */}
          <RevealOnScroll direction="up" delay={200} duration={800}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-12" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                Featured Jobs In UAE
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Pre-contract Quantity Surveyor", image: "/scott-blake-sXASnaWglyY-unsplash-1024x683.jpg", location: "UAE", type: "Full-time" },
                { title: "Planning Engineer", image: "/airfocus-K_VeavYEfdA-unsplash-1024x683.jpg", location: "UAE", type: "Full-time" },
                { title: "Human Resources Assistant", image: "/kobu-agency-7okkFhxrxNw-unsplash-1024x683.jpg", location: "UAE", type: "Full-time" }
              ].map((job, index) => (
                <div key={index} className="group relative overflow-hidden bg-black border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={job.image} 
                      alt={job.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              <div className="mt-8 text-center">
                <button className="px-8 py-4 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                  All Jobs
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* About INE Section */}
      <section className="relative bg-black py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left" delay={200} duration={800}>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-8" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  About INE
                </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  At INE, we understand the critical importance of human resources in driving the success of organizations. 
                  As a premier provider of HR solutions and job services, we offer innovative and tailored solutions for 
                  recruitment, talent management, training, and consulting.
                </p>
                <p className="text-lg">
                  Established in 2016, INE has quickly emerged as a leading Recruitment and HR 
                  service provider in Malta. As a C 76838 certified company, we provide innovative and tailored solutions 
                  for recruitment, talent management, training, and consulting, building long-lasting partnerships based on 
                  trust, integrity, and mutual respect.
                </p>
              </div>
              <div className="mt-8">
                <button className="px-8 py-4 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={400} duration={800}>
              <div className="relative">
                <img 
                  src="/Gemini_Generated_Image_r057e4r057e4r057.png" 
                  alt="About INE"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative bg-black py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-500 text-center mb-16" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
            Our Core Services
            </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services for Job Seekers */}
            <div className="group relative overflow-hidden bg-black border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg" 
                  alt="Job Seekers Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                    Services For Job Seekers
                  </h3>
                  <p className="text-white/80 mb-6">
                    Discover a wealth of resources to supercharge your job search journey. From comprehensive job boards 
                    to industry-specific forums, our platform offers diverse opportunities.
                  </p>
                  <button className="px-6 py-3 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
          </div>

            {/* Services for Employers */}
            <div className="group relative overflow-hidden bg-black border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Gemini_Generated_Image_r057e4r057e4r057.png" 
                  alt="Employers Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                    Services For Employers
                  </h3>
                  <p className="text-white/80 mb-6">
                    Our training and development services cover a range of essential areas to enhance employee skills 
                    and performance across various industries and sectors.
                  </p>
                  <button className="px-6 py-3 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-black py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <RevealOnScroll direction="up" delay={200} duration={800}>
            <h2 className="text-4xl lg:text-5xl font-bold text-yellow-500 text-center mb-16" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
              What Our Clients Say
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Camilleri",
                company: "Mile-End Services Limited",
                testimonial: "INE has been instrumental in helping us find the right talent for our organization. Their recruitment process is thorough and their candidates are always well-qualified.",
                rating: 5
              },
              {
                name: "David Borg",
                company: "Welbee's",
                testimonial: "The team at INE understands our business needs perfectly. They've consistently delivered excellent candidates who fit our company culture and requirements.",
                rating: 5
              },
              {
                name: "Kenneth Azzopardi",
                company: "Finestral",
                testimonial: "Professional, reliable, and results-driven. INE has become our go-to partner for all HR and recruitment needs. Their expertise has been exceptional. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <RevealOnScroll key={index} direction="up" delay={400 + (index * 200)} duration={800}>
                <div className="bg-black border-2 border-yellow-500 p-8 hover:bg-yellow-500/10 transition-all duration-500">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-base">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-gray-700/30 pt-4">
                  <h4 className="text-white font-bold text-lg" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-yellow-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="relative bg-black py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Successful Placements" },
              { number: "150+", label: "Happy Clients" },
              { number: "8", label: "Years Experience" },
              { number: "2", label: "Countries Served" }
            ].map((stat, index) => (
              <RevealOnScroll key={index} direction="up" delay={200 + (index * 150)} duration={800}>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-2" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose INE */}
      <section className="relative bg-black py-12 sm:py-16 lg:py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <RevealOnScroll direction="up" delay={200} duration={800}>
          <div className="max-w-4xl mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                <span className="text-white">Why Choose </span>
                <span className="text-yellow-500">INE</span>
            </h2>
              <p className="text-lg lg:text-2xl text-gray-300 font-light leading-relaxed">
                Over 10 years' experience, friendly uniformed teams and transparent pricing. Local
              or long‑distance, residential or commercial—we make your move straightforward.
            </p>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={400} duration={800}>
            <div className="border border-gray-700/10 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <RevealOnScroll direction="left" delay={600} duration={800}>
              <div className="p-8 flex flex-col items-start">
                    <h3 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  Experience
                </h3>
                    <p className="text-white/60 leading-relaxed">
                  A decade of B2B relocations across the UK. Skilled teams who plan and execute.
                </p>
              </div>
                </RevealOnScroll>
                <RevealOnScroll direction="up" delay={800} duration={800}>
              <div className="p-8 flex flex-col items-start border-l border-r border-lufte-gray-dark/10">
                    <h3 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  Care & Protection
                </h3>
                    <p className="text-white/60 leading-relaxed">
                  Protective covers, secure packing and careful handling of fragile or bulky items.
                </p>
              </div>
                </RevealOnScroll>
                <RevealOnScroll direction="right" delay={1000} duration={800}>
              <div className="p-8 flex flex-col items-start">
                    <h3 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  Fair, Transparent Pricing
                </h3>
                    <p className="text-white/60 leading-relaxed">
                  Clear, itemised quotes with no hidden fees. Options for every budget and timeline.
                </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="relative bg-black py-12 sm:py-16 lg:py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <RevealOnScroll direction="left" delay={200} duration={800}>
            <div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                Frequently Asked Questions
              </h2>
            </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={400} duration={800}>
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                  <RevealOnScroll key={index} direction="up" delay={600 + (index * 100)} duration={600}>
                    <div className="border-b border-lufte-gray-dark/10">
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    className="w-full py-7 flex items-start justify-between text-left hover:bg-gray-50/50 transition-colors"
                  >
                        <span className="text-lg lg:text-2xl font-medium text-white leading-tight pr-8">
                      {faq.question}
                    </span>
                        <div className="w-10 h-10 border border-lufte-gray-dark/20 flex items-center justify-center flex-shrink-0 mt-1">
                      {activeFaq === index ? (
                            <Minus className="w-3 h-3 text-white" />
                      ) : (
                            <Plus className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </button>
                  {activeFaq === index && (
                        <div className="pb-6 text-white/60 leading-relaxed pr-16">
                      {faq.answer}
                    </div>
                  )}
                </div>
                  </RevealOnScroll>
              ))}
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="relative bg-black py-20 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <RevealOnScroll direction="up" delay={200} duration={800}>
            <div className="bg-black border-2 border-yellow-500 p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Content */}
                <RevealOnScroll direction="left" delay={400} duration={800}>
              <div>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-500 leading-tight mb-8" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                      Ready to Transform Your HR?
                </h2>
                <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                  Let's discuss your HR challenges and create a tailored solution that drives your business forward. 
                  Our experts are ready to help you build the perfect team.
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  {[
                    "Free initial consultation",
                    "Tailored HR solutions",
                    "Expert recruitment support",
                    "Ongoing partnership"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500"></div>
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              </RevealOnScroll>

              {/* Right Side - Form */}
              <RevealOnScroll direction="right" delay={600} duration={800}>
                <div className="bg-black/50 p-8 border border-gray-700/30">
                  <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                    Get Started Today
                  </h3>
                <form className="space-y-6">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    required
                    placeholder="Full Name *"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      placeholder="Email *"
                      className="px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      required
                      placeholder="Phone *"
                      className="px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        id="serviceType"
                        name="serviceType"
                        defaultValue=""
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors appearance-none"
                      >
                        <option value="" disabled>Service Type *</option>
                        <option>Recruitment Services</option>
                        <option>Employee Outsourcing</option>
                        <option>Training & Development</option>
                        <option>HR Consulting</option>
                        <option>Job Placement</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        defaultValue=""
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors appearance-none"
                      >
                        <option value="" disabled>How did you hear about us?</option>
                        <option>Google Search</option>
                        <option>Social Media</option>
                        <option>Referral</option>
                        <option>Website</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Tell us about your HR needs and requirements..."
                      rows={4}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  >
                    Get Started
                  </button>
                </form>
              </div>
              </RevealOnScroll>
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
