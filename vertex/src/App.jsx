import React from "react";
import AnimateOnScroll from "./components/AnimateOnScroll";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="checkered-bg relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans">

      <Navbar />  

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <AnimateOnScroll>
          <img
            src="../img/Diseño sin título (2).png"
            className="h-24 mb-6"
            alt="Vertex Logo"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            VERTEX <br /> SYSTEMS
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Desarrollamos experiencias digitales extraordinarias. <br />
            <span className="text-white">Web • Apps • Innovación</span>
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              COMENZAR PROYECTO
            </a>
            <a
              href="#proyectos"
              className="px-8 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition duration-300"
            >
              VER PORTAFOLIO
            </a>
          </div>
        </AnimateOnScroll>
      </main>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Desarrollo Web",
              desc: "Creamos sitios modernos, rápidos y optimizados.",
            },
            {
              title: "Aplicaciones Móviles",
              desc: "Apps intuitivas y potentes para iOS y Android.",
            },
            {
              title: "Consultoría Digital",
              desc: "Estrategias tecnológicas para hacer crecer tu negocio.",
            },
          ].map((service, i) => (
            <AnimateOnScroll delay={i * 200} key={i}>
              <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-20 px-6 bg-gray-950 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-8">Sobre Nosotros</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            En Vertex Systems somos un equipo apasionado por la innovación
            tecnológica. Nuestro objetivo es transformar ideas en soluciones
            digitales que marquen la diferencia.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Proyectos */}
    <section id="proyectos" className="py-20 px-6 text-center">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold mb-12">Proyectos Destacados</h2>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* --- PROYECTO 1 --- */}
        <AnimateOnScroll delay={0}>
          <div className=" bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src="../img/monitor.png"
              alt="Nombre del Proyecto Uno"
              className="w-20 h-20 object-cover mx-auto mt-6"
            />
            <div className="p-6 bg-gray-800">
              <h3 className="text-xl font-semibold">
                Nombre del Proyecto Uno
              </h3>
            </div>
          </div>
        </AnimateOnScroll>

        {/* --- PROYECTO 2 --- */}
        <AnimateOnScroll delay={0}>
          <div className=" bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src="../img/"
              alt="Nombre del Proyecto Uno"
              className="w-20 h-20 object-cover mx-auto mt-6"
            />
            <div className="p-6 bg-gray-800">
              <h3 className="text-xl font-semibold">
                Nombre del Proyecto Uno
              </h3>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 px-6 bg-gray-950 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-12">Lo que dicen nuestros clientes</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Ana López",
              feedback:
                "Vertex Systems transformó nuestra página web en una experiencia única. ¡100% recomendados!",
            },
            {
              name: "Carlos Pérez",
              feedback:
                "Su equipo es profesional, creativo y rápido. Cumplieron con todo lo prometido.",
            },
          ].map((test, i) => (
            <AnimateOnScroll delay={i * 200} key={i}>
              <div className="p-8 bg-gray-800 rounded-2xl shadow-lg">
                <p className="text-gray-300 mb-4">“{test.feedback}”</p>
                <h4 className="font-semibold text-lg">- {test.name}</h4>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
          <p className="text-lg text-gray-400 mb-12">
            ¿Tienes un proyecto en mente? Escríbenos y hagámoslo realidad.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <form className="max-w-2xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Tu Email"
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Tu Mensaje"
              rows="4"
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </AnimateOnScroll>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Vertex Systems. Todos los derechos
        reservados.
      </footer>
    </div>
  );
}

export default App;