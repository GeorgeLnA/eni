const services = [
  {
    title: "Kitchens",
    desc: "Design, supply and installation with bespoke joinery and premium appliances.",
  },
  {
    title: "Bathrooms",
    desc: "Luxurious suites, wet rooms and underfloor heating with perfect tiling.",
  },
  {
    title: "Extensions",
    desc: "Rear, side‑return and wrap‑around extensions, fully managed end‑to‑end.",
  },
  {
    title: "Loft Conversions",
    desc: "Dormer and mansard conversions with structural works and building control.",
  },
  {
    title: "Full Refurbishments",
    desc: "Complete property renovations including rewires, plastering and flooring.",
  },
  {
    title: "Outdoor & Garden Rooms",
    desc: "Studios, offices and functional outdoor spaces built to last.",
  },
];

export default function Services() {
  return (
    <div>
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,0)), url('/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-10">
          <h1 className="text-4xl md:text-6xl text-white font-medium" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
            Services
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            End‑to‑end renovations with UK building regs compliance and
            guaranteed craftsmanship.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6  border border-black/10 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl font-medium mb-2 text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  {s.title}
                </h3>
                <p className="text-lufte-gray-dark/70 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
