const projects = [
  { title: "NHS ward decant", img: "/Untitled-design-2024-09-27T040509.140.png" },
  { title: "Site mobilisation", img: "/New-Project-2024-10-02T175135.156.png" },
  { title: "Warehouse reconfiguration", img: "/istockphoto-135385164-612x612.webp" },
  { title: "Enterprise office move", img: "/istockphoto-1193079433-612x612.webp" },
  { title: "Specialist equipment move", img: "/Untitled-design-2024-09-27T040509.140.png" },
  { title: "Sustainable clearance", img: "/New-Project-2024-10-02T175135.156.png" },
];

export default function Projects() {
  return (
    <div>
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,0)), url('/istockphoto-1193079433-612x612.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-10">
          <h1 className="text-4xl md:text-6xl text-white font-medium">
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
                className="rounded-2xl overflow-hidden group border border-black/5"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-[1.02] transition-transform"
                />
                <figcaption className="p-4 font-medium" style={{ color: '#45c4af' }}>
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
