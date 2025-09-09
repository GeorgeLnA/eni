import { ChevronDown, Info } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,0)), url('/kate-townsend-hEC6zxdFF0M-unsplash-1024x680.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-10">
          <h1 className="text-4xl md:text-6xl text-white font-medium" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
            Contact
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            We're here to assist you every step of the way. Please feel free to reach out to us by selecting the region you are inquiring about.
          </p>
        </div>
      </section>

      <section className="bg-black pt-10">
        <div className="border-t-[10px] bg-[#242424]" style={{ borderTopColor: '#d97706' }}>
          <div
            className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            role="region"
            aria-label="Get a free quote"
          >
            <div>
              <h2 className="text-4xl md:text-5xl text-white font-medium leading-tight mb-6" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                Tell us about your project
              </h2>
              <p className="text-white/70 max-w-xl">
                Kitchens, bathrooms, lofts, extensions or full
                refurbishments—we'll reply within 1 working day.
              </p>
            </div>
            <div className="bg-neutral-800  p-8">
              <form className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  required
                  placeholder="Full name *"
                  className="w-full px-4 py-4 bg-white/5 border border-white/10  text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="Email *"
                    className="px-4 py-4 bg-white/5 border border-white/10  text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    required
                    placeholder="Phone *"
                    className="px-4 py-4 bg-white/5 border border-white/10  text-white placeholder-white/60 focus:outline-none focus:border-white/20"
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
                    className="px-4 py-4 bg-white/5 border border-white/10  text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                  />
                  <div className="relative">
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      defaultValue=""
                      className="w-full px-4 py-4 bg-white/5 border border-white/10  text-white/60 focus:outline-none focus:border-white/20 appearance-none"
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
                  name="serviceType"
                  id="serviceType"
                  required
                  placeholder="Service type (e.g. recruitment, training, HR consulting) *"
                  className="w-full px-4 py-4 bg-white/5 border border-white/10  text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                />
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Info className="w-4 h-4" />
                  <span>
                    Include your company size and specific requirements if known.
                  </span>
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10  text-white placeholder-white/60 focus:outline-none focus:border-white/20 resize-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3 text-sm font-medium uppercase tracking-wide bg-black border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
