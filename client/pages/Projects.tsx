const projects = [
  { title: "NHS ward decant", img: "/guillaume-techer-XvNPUh6fWVk-unsplash-1024x683.jpg" },
  { title: "Site mobilisation", img: "/airfocus-K_VeavYEfdA-unsplash-1024x683.jpg" },
  { title: "Warehouse reconfiguration", img: "/scott-blake-sXASnaWglyY-unsplash-1024x683.jpg" },
  { title: "Enterprise office move", img: "/kobu-agency-7okkFhxrxNw-unsplash-1024x683.jpg" },
  { title: "Specialist equipment move", img: "/maxime-agnelli-QC1oHW5JVu4-unsplash-1024x683.jpg" },
  { title: "Sustainable clearance", img: "/kate-townsend-hEC6zxdFF0M-unsplash-1024x680.jpg" },
];

export default function Projects() {
  return (
    <div>
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,0)), url('/peter-zhou-LUeUUFLGgnY-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-10">
          <h1 className="text-4xl md:text-6xl text-white font-medium" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
            Case Studies
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Selected B2B programmes across healthcare, contractor and enterprise logistics.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <figure
                key={i}
                className=" overflow-hidden group border border-black/5"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-[1.02] transition-transform"
                />
                <figcaption className="p-4 font-medium text-yellow-500">
                  {p.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
