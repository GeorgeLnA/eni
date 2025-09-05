import { ChevronDown, Info } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,0)), url('/istockphoto-135385164-612x612.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-10">
          <h1 className="text-4xl md:text-6xl text-white font-medium">
            Contact
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Request a free quote—tell us about your home and goals.
          </p>
        </div>
      </section>

      <section className="bg-white pt-10">
        <div className="border-t-[10px] bg-[#242424]" style={{ borderTopColor: '#45c4af' }}>
          <div
            className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            role="region"
            aria-label="Get a free quote"
          >
            <div>
              <h2 className="text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
                Tell us about your project
              </h2>
              <p className="text-white/70 max-w-xl">
                Kitchens, bathrooms, lofts, extensions or full
                refurbishments—we'll reply within 1 working day.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-3xl p-8">
              <form className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  required
                  placeholder="Full name *"
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="Email *"
                    className="px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    required
                    placeholder="Phone *"
                    className="px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    autoComplete="postal-code"
                    required
                    placeholder="Postcode *"
                    className="px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                  />
                  <div className="relative">
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      defaultValue=""
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white/60 focus:outline-none focus:border-white/20 appearance-none"
                    >
                      <option value="" disabled>
                        Where did you hear about us?
                      </option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="recommendation">Recommendation</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60 pointer-events-none" />
                  </div>
                </div>
                <input
                  type="text"
                  name="projectType"
                  id="projectType"
                  required
                  placeholder="Project type (e.g. kitchen, bathroom, extension) *"
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                />
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Info className="w-4 h-4" />
                  <span>
                    Include approximate start date and budget if known.
                  </span>
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20 resize-none"
                />
                <button
                  type="submit"
                  className="text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wide transition-colors"
                  style={{ backgroundColor: '#45c4af' }}
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
