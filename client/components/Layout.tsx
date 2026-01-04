import { NavLink, Outlet } from "react-router-dom";
import { Plus, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

function navLinkClass(isActive: boolean) {
  const base =
    "px-5 py-2.5 text-white text-sm font-medium uppercase transition-opacity";
  const fontStyle = { fontFamily: 'Uni Sans, sans-serif' };
  return isActive ? `${base} opacity-100 underline underline-offset-4` : `${base} opacity-90 hover:opacity-70`;
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white font-outfit">
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-4 bg-black">
        <div className="flex items-center justify-between w-full max-w-[1680px] px-4 sm:px-6">
          <NavLink
            to="/"
            onClick={close}
            className="flex items-end gap-2 sm:gap-3 text-white"
          >
            <img 
              src="/20250909_1640_Enhanced Gold Emblem_remix_01k4qj00e0evtvqq8yd1k1xkpw.png" 
              alt="INE Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide leading-tight" style={{ fontFamily: 'Kugile, sans-serif' }}>
              INE
            </span>
          </NavLink>

          <div className={`hidden md:flex items-center p-1 ${scrolled ? "" : "mix-blend-difference"}`}>
            <NavLink
              to="/"
              className={({ isActive }) => navLinkClass(isActive)}
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
              end
            >
              Home
            </NavLink>
            <button
              className={navLinkClass(false)}
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              About
            </button>
            <button
              className={navLinkClass(false)}
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              <span className="flex items-center gap-1">
                Jobs <Plus className="w-4 h-4 opacity-60" />
              </span>
            </button>
            <button
              className={navLinkClass(false)}
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Services
            </button>
            <button
              className={navLinkClass(false)}
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex">
            <button
              className="flex items-center px-6 py-3 text-yellow-500 text-sm font-medium uppercase bg-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-white/15 text-white flex-shrink-0"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-50 transition-all duration-300 ease-in-out ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-end gap-2">
                <img 
                  src="/20250909_1640_Enhanced Gold Emblem_remix_01k4qj00e0evtvqq8yd1k1xkpw.png" 
                  alt="INE Logo" 
                  className="w-6 h-6 object-contain flex-shrink-0"
                />
                 <span className="text-white font-semibold tracking-wide -mb-1" style={{ fontFamily: 'Kugile, sans-serif' }}>
                   INE
                 </span>
              </div>
              <button
                onClick={close}
                className="inline-flex items-center justify-center w-10 h-10 border border-white/15 text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Menu items */}
            <NavLink
              to="/"
              onClick={close}
              className="px-4 py-3 text-center text-white uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Home
            </NavLink>
            <button
              onClick={close}
              className="px-4 py-3 text-center text-white uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={close}
              className="px-4 py-3 text-center text-white uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Jobs
            </button>
            <button
              onClick={close}
              className="px-4 py-3 text-center text-white uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Services
            </button>
            <button
              onClick={close}
              className="px-4 py-3 text-center text-white uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Contact
            </button>
            <button
              onClick={close}
              className="mt-2 px-4 py-3 text-yellow-500 uppercase text-sm text-center bg-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
              style={{ fontFamily: 'Uni Sans, sans-serif' }}
            >
              Request consultation
            </button>
            </div>
          </div>
      </nav>

      <div className="pt-0">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
