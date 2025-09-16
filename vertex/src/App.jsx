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
            src="../img/img_inventario.png" 
            alt="Inventory System" 
            className="w-20 h-20 object-cover mx-auto mt-6"
            />
            <div className="p-6 bg-gray-800">
              <h3 className="text-xl font-semibold">
                Inventory System
              </h3>
            </div>
          </div>
        </AnimateOnScroll>

        {/* --- PROYECTO 2 --- */}
        <AnimateOnScroll delay={0}>
          <div className=" bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src="../img/img_ecommerce.png"
              alt="Ecommerce Frontend"
              className="w-20 h-20 object-cover mx-auto mt-6"
            />
            <div className="p-6 bg-gray-800">
              <h3 className="text-xl font-semibold">
                Ecommerce Frontend
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
  <div className="container mx-auto max-w-5xl"> {/* Un poco más ancho para las tarjetas */}
    
    <AnimateOnScroll>
      <h2 className="text-4xl font-bold mb-1">
        Ponte en contacto
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-12">
        Elige tu plataforma preferida. Estamos listos para escuchar tu idea.
      </p>
    </AnimateOnScroll>

    {/* La cuadrícula que contiene las 3 tarjetas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* --- Tarjeta 1: WhatsApp --- */}
      <AnimateOnScroll delay={100}>
        <a
          href="https://wa.me/[TU_NUMERO_DE_TELEFONO]" // <-- CAMBIA ESTO
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Ícono de WhatsApp (puedes usar el que ya tenías) */}
          <div className="flex justify-center mb-4">
            <img 
              className="h-12 w-12" 
              src="../img/img_whatsapp.png" 
              alt="WhatsApp Logo">
            </img>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
          <p className="text-gray-400">Envíanos un mensaje directo para una respuesta rápida.</p>
        </a>
      </AnimateOnScroll>

      {/* --- Tarjeta 2: Correo Electrónico --- */}
      <AnimateOnScroll delay={200}>
        <a
          href="mailto:Vertexsystem@hotmail.com"
          className="block p-8 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Ícono de Correo */}
          <div className="flex justify-center mb-4">
            <img 
              className="h-12 w-12" 
              src="../img/gmail.png" 
              alt="Email Logo">
            </img>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Correo Electrónico</h3>
          <p className="text-gray-400">Ideal para detalles del proyecto y adjuntar archivos.</p>
        </a>
      </AnimateOnScroll>

      {/* --- Tarjeta 3: Instagram --- */}
      <AnimateOnScroll delay={300}>
        <a
          href="https://instagram.com/[TU_USUARIO_DE_INSTAGRAM]" // <-- CAMBIA ESTO
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Ícono de Instagram (puedes usar el que ya tenías) */}
          <div className="flex justify-center mb-4">
            <img 
              className="h-12 w-12" 
              src="../img/instagram.png" 
              alt="Instagram Logo">
            </img>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
          <p className="text-gray-400">Sigue nuestro trabajo y envíanos un DM.</p>
        </a>
      </AnimateOnScroll>

    </div>
  </div>
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