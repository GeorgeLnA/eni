import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Spline from '@splinetool/react-spline';

export default function Footer() {
  const linkClass = "text-white/70 hover:text-yellow-500 transition-colors";
  return (
    <footer className="relative bg-black text-white border-t-8 z-20 overflow-hidden" style={{ borderTopColor: 'transparent', borderImage: 'linear-gradient(90deg, #eab308, #eab308, #eab308, #eab308) 1' }}>
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/xGk1CBglFELWiAdA/scene.splinecode" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Kugile, sans-serif' }}>
                INE
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your premier HR solutions partner since 2016. We connect exceptional talent with 
              outstanding opportunities across Malta and UAE, building stronger organizations 
              through innovative recruitment and HR services.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                aria-label="LinkedIn"
                href="#"
                className="p-3 bg-white/10 hover:bg-yellow-500/20 hover:text-yellow-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="p-3 bg-white/10 hover:bg-yellow-500/20 hover:text-yellow-500 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="p-3 bg-white/10 hover:bg-yellow-500/20 hover:text-yellow-500 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
              Our Services
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                <span className="text-white/80">Recruitment & Talent Acquisition</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                <span className="text-white/80">Employee Outsourcing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                <span className="text-white/80">Training & Development</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                <span className="text-white/80">HR Consulting</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                <span className="text-white/80">Job Placement Services</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
              Ready to Get Started?
            </h4>
            <p className="text-white/80 leading-relaxed">
              Let's discuss your HR challenges and create a tailored solution that drives your business forward.
            </p>
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-black border-2 border-yellow-500 text-yellow-500 font-bold uppercase tracking-wide hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                Get Started
              </button>
              <button className="w-full px-6 py-3 border border-yellow-500/50 text-yellow-500 font-semibold uppercase tracking-wide hover:bg-yellow-500/10 transition-colors duration-300">
                View Jobs
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-white/60">
          <p>
            © {new Date().getFullYear()} INE. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className={linkClass}>
              Privacy
            </a>
            <a href="#" className={linkClass}>
              Terms
            </a>
            <a href="#" className={linkClass}>
              Cookies
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
