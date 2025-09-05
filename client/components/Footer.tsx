import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const linkClass = "text-white/70 hover:text-white transition-colors";
  return (
    <footer className="bg-[#111] text-white border-t-8" style={{ borderTopColor: '#45c4af' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-14">
        <div className="grid gap-10 md:gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold tracking-tight">
                Big Logistics
              </span>
              <span className="text-xs uppercase tracking-widest text-white px-2 py-0.5 rounded" style={{ backgroundColor: '#45c4af' }}>
                B2B
              </span>
            </div>
            <p className="text-white/70 max-w-sm">
              Specialist B2B removals, relocations and logistics services for healthcare,
              contractors and enterprise logistics teams. Compliance‑driven, scalable,
              nationwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Instagram"
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={linkClass}>
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={linkClass}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
              What we do
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>Healthcare logistics & ward decants</li>
              <li>Office & site relocations</li>
              <li>Heavy/oversized item handling</li>
              <li>Warehouse & inventory moves</li>
              <li>Waste & clearance (licensed)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
              Start a project
            </h4>
            <p className="text-white/70">
              Share scope, sites and timelines. We’ll propose a compliant, scalable
              plan within one working day.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 text-white px-5 py-3 rounded-full text-sm font-medium uppercase tracking-wide transition-colors"
              style={{ backgroundColor: '#45c4af' }}
            >
              Request consultation
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-white/60">
          <p>
            © {new Date().getFullYear()} Big Logistics. All rights reserved.
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
    </footer>
  );
}
