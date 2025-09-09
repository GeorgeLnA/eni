export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[45vh] md:h-[60vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 40%), url('/kobu-agency-7okkFhxrxNw-unsplash-1024x683.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-12">
          <h1 className="text-4xl md:text-6xl text-white font-medium leading-tight" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
            About Elite Network International
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Welcome to Elite Network International ENI – Your Premier HR Solutions Provider. 
            Established in 2016, we have quickly emerged as a leading Recruitment and HR service provider.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
              Our Story
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Established in 2016, Elite Network International ENI has quickly emerged as a leading 
              Recruitment and HR service provider in Malta. As a C 76838 certified company, we provide 
              innovative and tailored solutions for recruitment, talent management, training, and consulting, 
              building long-lasting partnerships based on trust, integrity, and mutual respect.
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
              Values
            </h3>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <li className="p-6  border border-black/10">
                <h4 className="text-xl font-medium mb-2 text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  Trust
                </h4>
                <p className="text-gray-300">
                  Building long-lasting partnerships based on trust, integrity, and mutual respect.
                </p>
              </li>
              <li className="p-6  border border-black/10">
                <h4 className="text-xl font-medium mb-2 text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  Excellence
                </h4>
                <p className="text-gray-300">
                  Delivering innovative and tailored HR solutions with professional standards.
                </p>
              </li>
              <li className="p-6  border border-black/10">
                <h4 className="text-xl font-medium mb-2 text-yellow-500" style={{ fontFamily: 'Uni Sans, sans-serif' }}>
                  Innovation
                </h4>
                <p className="text-gray-300">
                  Continuously evolving our services to meet changing workforce needs.
                </p>
              </li>
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="p-6  bg-lufte-gray-medium text-white">
              <h4 className="text-xl font-medium mb-2" style={{ fontFamily: 'Uni Sans, sans-serif' }}>Fast Facts</h4>
              <ul className="space-y-2 text-white/80">
                <li>Established in 2016</li>
                <li>C 76838 certified company</li>
                <li>Offices in Malta and UAE</li>
                <li>Multi-industry expertise</li>
              </ul>
            </div>
            <div className="p-6  border border-black/10">
              <h4 className="text-xl font-medium mb-2 text-yellow-500">
                Accreditations
              </h4>
              <p className="text-gray-300">
                C 76838 certified company with full compliance and professional standards for HR services.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
