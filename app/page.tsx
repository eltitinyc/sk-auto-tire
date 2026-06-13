export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black">
            <span className="text-red-600">SK</span> AUTO & TIRE{" "}
            <span className="text-blue-500">SOLUTION</span>
          </a>

          <nav className="hidden md:flex gap-8 font-bold text-sm">
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT US</a>
            <a href="#hours">HOURS</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <a
            href="#quote"
            className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-bold"
          >
            GET A FREE QUOTE
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home">
       <img
  src="/hero.png"
  alt="SK Auto & Tire Solution"
  className="w-full h-auto object-contain pt-0"
/>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10">OUR SERVICES</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            "Tires",
            "Wheel Alignment",
            "Balancing",
            "Brake Service",
            "Suspension",
            "Oil Change",
            "Vehicle Inspection",
            "Flat Tire Repair",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-red-500">{item}</h3>
              <p className="text-zinc-300 mt-3">
                Professional service with quality parts and honest pricing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            SK Auto & Tire Solution provides professional tire and auto services
            in Staten Island. We focus on quality service, honest prices, fast
            turnaround, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="px-6 py-16 bg-black">
        <h2 className="text-4xl font-bold text-center mb-8">BUSINESS HOURS</h2>

        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl p-8 text-xl space-y-4">
          <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      {/* CONTACT + QUOTE */}
      <section id="contact" className="px-6 py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">VISIT US</h2>

            <p className="text-xl text-zinc-300">
              📍 1074 Bay St, Staten Island, NY 10305
            </p>

            <p className="text-xl text-zinc-300 mt-3">
              📞{" "}
              <a href="tel:3476563903" className="text-blue-400 font-bold">
                (347) 656-1771
              </a>
            </p>

            <iframe
              className="w-full h-80 rounded-xl border border-zinc-800 mt-8"
              loading="lazy"
              src="https://www.google.com/maps?q=1074%20Bay%20St,%20Staten%20Island,%20NY%2010305&output=embed"
            ></iframe>
          </div>

          <div id="quote" className="bg-zinc-900 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">GET A FREE QUOTE</h2>

            <form className="space-y-4">
              <input className="w-full p-4 rounded bg-black border border-zinc-700" placeholder="Your Name" />
              <input className="w-full p-4 rounded bg-black border border-zinc-700" placeholder="Phone Number" />
              <input className="w-full p-4 rounded bg-black border border-zinc-700" placeholder="Email Address" />
              <input className="w-full p-4 rounded bg-black border border-zinc-700" placeholder="Service Needed" />
              <textarea className="w-full p-4 rounded bg-black border border-zinc-700 h-32" placeholder="Message" />

              <button className="w-full bg-red-600 hover:bg-red-700 p-4 rounded font-bold">
                SEND REQUEST
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-400">
        <p className="font-bold text-white">
          <span className="text-red-600">SK</span> AUTO & TIRE{" "}
          <span className="text-blue-500">SOLUTION</span>
        </p>
        <p className="mt-2">1074 Bay St, Staten Island, NY 10305</p>
        <p className="mt-2">
          <a href="tel:3476563903">(347) 656-3903</a>
        </p>
        <p className="mt-2">
          © 2026 SK Auto & Tire Solution. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}