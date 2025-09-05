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

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);

  const partners = [
    { name: "p1", image: "/Untitled-design-2024-09-27T040509.140.png" },
    { name: "p2", image: "/New-Project-2024-10-02T175135.156.png" },
    { name: "p3", image: "/istockphoto-135385164-612x612.webp" },
    { name: "p4", image: "/istockphoto-1193079433-612x612.webp" },
    { name: "p5", image: "/Untitled-design-2024-09-27T040509.140.png" },
    { name: "p6", image: "/New-Project-2024-10-02T175135.156.png" },
  ];

  const portfolioItems = [
    { title: "case1", image: "/Untitled-design-2024-09-27T040509.140.png" },
    { title: "case2", image: "/New-Project-2024-10-02T175135.156.png" },
    { title: "case3", image: "/istockphoto-135385164-612x612.webp" },
    { title: "case4", image: "/istockphoto-1193079433-612x612.webp" },
    { title: "case5", image: "/Untitled-design-2024-09-27T040509.140.png" },
  ];

  // Compliance-led mobilisation timeline for the orange card
  const steps = [
    {
      title: "Scope & Compliance",
      desc:
        "Define scope, stakeholders and governance. Prepare RAMS and permits.",
    },
    {
      title: "Mobilise",
      desc:
        "Crew allocation, crate delivery and equipment scheduling.",
    },
    {
      title: "Execute & Handover",
      desc:
        "Out‑of‑hours execution in live environments and phased handover.",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      title: "Scope & Compliance Planning",
      content:
        "RAMS, permits, site rules and stakeholder mapping aligned to your governance requirements.",
    },
    {
      title: "Project Management",
      content:
        "Dedicated coordinator, phased plans and clear comms to minimise downtime and risk.",
    },
    {
      title: "Specialist Crews & Equipment",
      content:
        "Trained teams with lifting gear, protection materials and vehicles for any scale.",
    },
    {
      title: "Out‑of‑Hours & Live Environments",
      content:
        "Evening/weekend working and live ward/site protocols to avoid service disruption.",
    },
    {
      title: "Sustainable Clearance & Reporting",
      content:
        "Licensed waste handling with reuse/recycling focus and compliance audit trails.",
    },
  ];

  const faqs = [
    {
      question: "Do you operate nationwide?",
      answer:
        "Yes. We operate nationwide. Share your locations and timelines and we’ll provide a tailored plan and quote.",
    },
    {
      question: "Can you provide packing and materials?",
      answer:
        "Absolutely. We offer full or part packing and can supply boxes, bubble wrap, wardrobe cartons and covers.",
    },
    {
      question: "Are you insured?",
      answer:
        "Yes. We carry comprehensive goods‑in‑transit and public liability insurance. Details available on request.",
    },
    {
      question: "Are you a licensed waste carrier?",
      answer:
        "Yes. We are licensed to remove and dispose of waste responsibly, with a strong focus on recycling.",
    },
    {
      question: "How is pricing calculated?",
      answer:
        "Pricing depends on volume, distance, access/parking and any packing or special handling. We’ll provide an itemised quote.",
    },
    {
      question: "Do you handle single items or small moves?",
      answer:
        "Yes. From single‑item deliveries to student moves, we tailor the service to your needs.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.85) 100%), url('/Gemini_Generated_Image_dfkm99dfkm99dfkm.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-16 sm:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium leading-tight mb-6 text-white">
              Specialist B2B Removals & Logistics
            </h1>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-4 text-white px-8 py-4 rounded-full transition-all duration-300 group"
              style={{ backgroundColor: '#45c4af' }}
            >
              <span className="text-sm font-medium uppercase tracking-wide">
                Request consultation
              </span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6" style={{ color: '#45c4af' }} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
              <span className="text-lufte-gray-dark">Compliance‑Led </span>
              <span style={{ color: '#45c4af' }}>Mobilisations & Moves</span>
            </h2>
          </div>

          <div className="bg-[#45c4af] rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden min-h-[360px] lg:min-h-[420px]">
            <div className="flex flex-col justify-center h-full">
              <div className="max-w-3xl">
                <h4 className="text-2xl lg:text-3xl text-lufte-gray-dark mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="text-lg lg:text-xl text-lufte-gray-dark/80 font-light leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Timeline */}
              <div className="relative mt-6 lg:mt-8 h-32">
                {/* Base line (road) */}
                <div className="absolute left-12 right-12 bottom-6 h-2 bg-black rounded-full" />

                {/* Steps + labels */}
                <div className="absolute left-12 right-12 bottom-[6px]">
                  <div className="relative h-16">
                    {steps.map((s, i) => {
                      const percent = (i / (steps.length - 1)) * 100;
                      const isActive = i === activeStep;
                      const isCompleted = i <= activeStep;
                      return (
                        <div key={i} className="absolute bottom-[6px]" style={{ left: `calc(${percent}% - 12px)` }}>
                          <button
                            type="button"
                            onClick={() => setActiveStep(i)}
                            className={`w-6 h-6 rounded-full border-2 transition-colors duration-500 ${isCompleted ? "bg-black border-black" : "border-black/60"}`}
                            style={!isCompleted ? { backgroundColor: '#45c4af' } : undefined}
                            aria-label={s.title}
                          />
                          <div className="absolute left-1/2 -translate-x-1/2 top-6 w-44 text-center">
                            <div className="inline-flex items-center gap-1 text-black/80 text-sm">
                              <span className="whitespace-nowrap">{s.title}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Moving truck */}
                {(() => {
                  const ratio = activeStep / (steps.length - 1);
                  return (
                    <img
                      src="/delivery-van.png"
                      alt="Delivery van"
                      className="absolute w-24 h-24 object-contain drop-shadow pointer-events-none select-none"
                      style={{
                        bottom: "10px",
                        left: `calc(3rem + (100% - 6rem) * ${ratio} - 63px)`,
                        right: "auto",
                        transition: "left 1000ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                        willChange: "left",
                        transform: "translateZ(0)",
                      }}
                    />
                  );
                })()}
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous step"
                  className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center text-black hover:bg-black/5 transition-colors"
                  onClick={() => setActiveStep((activeStep + steps.length - 1) % steps.length)}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next step"
                  className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center text-black hover:bg-black/5 transition-colors"
                  onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
              <span className="text-lufte-gray-dark">Trusted by Healthcare </span>
              <span style={{ color: '#45c4af' }}>& Enterprise Teams</span>
            </h2>
            <p className="text-lg lg:text-2xl text-lufte-gray-dark/60 font-light leading-relaxed">
              Chosen for reliability, compliance and scalability. We operate in live environments
              with zero‑downtime priorities and clear reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="bg-white py-20 border-t border-b border-lufte-gray-dark/10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
              <span className="text-lufte-gray-dark">Every move handled with </span>
              <span className="text-lufte-gray-dark">care, clarity and respect.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Why Nartov */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
              <span className="text-lufte-gray-dark">Why Choose </span>
              <span style={{ color: '#45c4af' }}>Big Logistics</span>
            </h2>
            <p className="text-lg lg:text-2xl text-lufte-gray-dark/60 font-light leading-relaxed">
              Over 10 years’ experience, friendly uniformed teams and transparent pricing. Local
              or long‑distance, residential or commercial—we make your move straightforward.
            </p>
          </div>

          <div className="border border-lufte-gray-dark/10 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-8 flex flex-col items-start">
                <h3 className="text-2xl lg:text-3xl font-normal text-lufte-gray-dark mb-4">
                  Experience
                </h3>
                <p className="text-lufte-gray-dark/60 leading-relaxed">
                  A decade of B2B relocations across the UK. Skilled teams who plan and execute.
                </p>
              </div>
              <div className="p-8 flex flex-col items-start border-l border-r border-lufte-gray-dark/10">
                <h3 className="text-2xl lg:text-3xl font-normal text-lufte-gray-dark mb-4">
                  Care & Protection
                </h3>
                <p className="text-lufte-gray-dark/60 leading-relaxed">
                  Protective covers, secure packing and careful handling of fragile or bulky items.
                </p>
              </div>
              <div className="p-8 flex flex-col items-start">
                <h3 className="text-2xl lg:text-3xl font-normal text-lufte-gray-dark mb-4">
                  Fair, Transparent Pricing
                </h3>
                <p className="text-lufte-gray-dark/60 leading-relaxed">
                  Clear, itemised quotes with no hidden fees. Options for every budget and timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="relative h-screen overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 35%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, #000 100%), url('/Untitled-design-2024-09-27T040509.140.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-16 h-full flex items-end pb-20">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 w-full">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight mb-10 sm:mb-16">
                Case Studies
              </h2>
              <div className="border-b border-lufte-gray-dark/10 pb-8 mb-8">
                <h3 className="text-3xl lg:text-4xl font-medium text-white mb-6">
                  NHS Ward Decant, UK
                </h3>
                <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                  Out‑of‑hours decant with infection control measures. Tracked assets and phased handover to minimise disruption.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-8">
              <div className="flex gap-3">
                <button className="w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="flex gap-3">
                <div className="w-3 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              </div>
              <div className="flex gap-2.5 overflow-x-auto">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 ${index === 0 ? "border-white" : "border-transparent"}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section className="bg-white py-20 border-b border-lufte-gray-dark/10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-lufte-gray-dark leading-tight mb-16">
                Services
              </h2>
              <div className="space-y-0">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="border-b border-lufte-gray-dark/10"
                  >
                    <button
                      onClick={() =>
                        setActiveService(activeService === index ? -1 : index)
                      }
                      className="w-full py-7 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-2xl lg:text-3xl font-medium text-lufte-gray-dark">
                        {service.title}
                      </span>
                      <div className="w-10 h-10 border border-lufte-gray-dark/20 rounded-full flex items-center justify-center">
                        {activeService === index ? (
                          <Minus className="w-3 h-3 text-lufte-gray-dark" />
                        ) : (
                          <Plus className="w-3 h-3 text-lufte-gray-dark" />
                        )}
                      </div>
                    </button>
                    {activeService === index && (
                      <div className="pb-6 text-lufte-gray-dark/60 leading-relaxed">
                        {service.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-16">
              <img
                src="/New-Project-2024-10-02T175135.156.png"
                alt="Big Logistics team at work"
                className="w-full h-64 sm:h-80 lg:h-[580px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-lufte-gray-dark leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-lufte-gray-dark/10">
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    className="w-full py-7 flex items-start justify-between text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-lg lg:text-2xl font-medium text-lufte-gray-dark leading-tight pr-8">
                      {faq.question}
                    </span>
                    <div className="w-10 h-10 border border-lufte-gray-dark/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {activeFaq === index ? (
                        <Minus className="w-3 h-3 text-lufte-gray-dark" />
                      ) : (
                        <Plus className="w-3 h-3 text-lufte-gray-dark" />
                      )}
                    </div>
                  </button>
                  {activeFaq === index && (
                    <div className="pb-6 text-lufte-gray-dark/60 leading-relaxed pr-16">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white pt-10">
        <div className="border-t-[10px] bg-lufte-gray-medium" style={{ borderTopColor: '#45c4af' }}>
          <div className="container mx-auto px-16 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight mb-8">
                  Ready to mobilise? Request a consultation
                </h2>
                <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed">
                  Share scope, sites, timelines and any compliance requirements. We’ll propose a phased plan.
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
                      placeholder="Pickup postcode *"
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
                        <option>Google</option>
                        <option>Instagram</option>
                        <option>Recommendation</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="projectType"
                      id="projectType"
                      required
                      placeholder="Programme (e.g. ward decant, site fitout, DC reconfig) *"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                    />
                    <div className="flex items-center gap-2 mt-2 text-white/40 text-sm">
                      <Info className="w-4 h-4" />
                      <span>
                        Include dates, access, sensitive assets, RAMS/permit needs and reporting.
                      </span>
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wide transition-colors"
                    style={{ backgroundColor: '#45c4af' }}
                  >
                    Request consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
