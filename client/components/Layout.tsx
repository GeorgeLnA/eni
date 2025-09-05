import { NavLink, Outlet } from "react-router-dom";
import { Plus, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

function navLinkClass(isActive: boolean) {
  const base =
    "px-5 py-2.5 text-white text-sm font-medium uppercase rounded-xl transition-opacity";
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
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-3 transition-colors duration-300 ${scrolled ? "bg-black/80 backdrop-blur-sm" : ""}`}>
        <div className="flex items-center justify-between w-full max-w-[1680px] px-4 sm:px-6">
          <NavLink
            to="/"
            onClick={close}
            className={`flex items-baseline gap-2 text-white ${scrolled ? "" : "mix-blend-difference"}`}
          >
            <span className="text-2xl font-semibold tracking-tight">
              Big Logistics
            </span>
            <span className="text-sm uppercase tracking-widest text-white px-2 py-0.5 rounded" style={{ backgroundColor: '#45c4af' }}>
              B2B
            </span>
          </NavLink>

          <div className={`hidden md:flex items-center rounded-2xl p-1 ${scrolled ? "" : "mix-blend-difference"}`}>
            <NavLink
              to="/"
              className={({ isActive }) => navLinkClass(isActive)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              <span className="flex items-center gap-1">
                Case Studies <Plus className="w-4 h-4 opacity-60" />
              </span>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex">
            <NavLink
              to="/contact"
              className="flex items-center rounded-2xl px-6 py-3 text-white text-sm font-medium uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mix-blend-normal"
              style={{ backgroundColor: '#45c4af' }}
            >
              Request consultation
            </NavLink>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-white"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden fixed top-16 left-0 right-0 border-t border-white/10 bg-black/90 backdrop-blur-md z-50"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={close}
                className="px-4 py-3 rounded-lg text-white uppercase hover:bg-white/10"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={close}
                className="px-4 py-3 rounded-lg text-white uppercase hover:bg-white/10"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                onClick={close}
                className="px-4 py-3 rounded-lg text-white uppercase hover:bg-white/10"
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/services"
                onClick={close}
                className="px-4 py-3 rounded-lg text-white uppercase hover:bg-white/10"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                onClick={close}
                className="px-4 py-3 rounded-lg text-white uppercase hover:bg-white/10"
              >
                Contact
              </NavLink>
              <NavLink
                to="/contact"
                onClick={close}
                className="mt-2 px-4 py-3 rounded-xl border border-white/15 text-white uppercase text-sm text-center"
              >
                Request consultation
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-0">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
