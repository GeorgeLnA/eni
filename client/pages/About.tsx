export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[45vh] md:h-[60vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 40%), url('/Untitled-design-2024-09-27T040509.140.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-12">
          <h1 className="text-4xl md:text-6xl text-white font-medium leading-tight">
            About Big Logistics
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Specialist B2B removals, relocations and logistics support for healthcare,
            contractors and enterprise logistics teams—planned for compliance and continuity.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium" style={{ color: '#45c4af' }}>
              Our Story
            </h2>
            <p className="text-lufte-gray-dark/70 leading-relaxed">
              Founded in the UK, Big Logistics delivers compliance‑led B2B moves and mobilisations.
              From live healthcare environments to complex contractor programmes, we minimise downtime
              with clear planning, trained crews and scalable resources nationwide.
            </p>
            <h3 className="text-2xl md:text-3xl font-medium" style={{ color: '#45c4af' }}>
              Values
            </h3>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <li className="p-6 rounded-2xl border border-black/10">
                <h4 className="text-xl font-medium mb-2" style={{ color: '#45c4af' }}>
                  Compliance
                </h4>
                <p className="text-lufte-gray-dark/70">
                  RAMS, permits and H&S alignment for live environments and critical spaces.
                </p>
              </li>
              <li className="p-6 rounded-2xl border border-black/10">
                <h4 className="text-xl font-medium mb-2" style={{ color: '#45c4af' }}>
                  Continuity
                </h4>
                <p className="text-lufte-gray-dark/70">
                  Zero‑downtime planning, phased handovers and out‑of‑hours working.
                </p>
              </li>
              <li className="p-6 rounded-2xl border border-black/10">
                <h4 className="text-xl font-medium mb-2" style={{ color: '#45c4af' }}>
                  Clarity
                </h4>
                <p className="text-lufte-gray-dark/70">
                  Transparent scopes, itemised pricing and reporting with audit trails.
                </p>
              </li>
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-lufte-gray-medium text-white">
              <h4 className="text-xl font-medium mb-2">Fast Facts</h4>
              <ul className="space-y-2 text-white/80">
                <li>10+ years in B2B relocations</li>
                <li>Licensed waste carrier, H&S compliant</li>
                <li>Scalable crews and specialist handling</li>
                <li>Nationwide coverage</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-black/10">
              <h4 className="text-xl font-medium mb-2" style={{ color: '#45c4af' }}>
                Accreditations
              </h4>
              <p className="text-lufte-gray-dark/70">
                Licensed waste carrier, H&S compliance, RAMS and permit‑to‑work processes.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
