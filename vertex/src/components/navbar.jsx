
import React from 'react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-70 backdrop-blur-sm z-50 py-6" data-aos="fade-down">
      <div className="container mx-auto px-4 flex justify-between items-center">
         {/* Navbar */}

       {/* 
       
       <img
          src="/img/Diseño sin título (2).png"
          alt="Vertex Systems Logo"
          className="h-10"
        />
        
        */}

        <div className="flex items-center">
          <span className="font-extrabold text-xl md:text-2xl tracking-tight">
            Vertex Systems
          </span>
        </div>

        <nav className="space-x-8 text-sm font-medium hidden md:flex">
          <a href="#servicios" className="hover:text-gray-300 transition">
            Servicios
          </a>
          <a href="#nosotros" className="hover:text-gray-300 transition">
            Nosotros
          </a>
          <a href="#proyectos" className="hover:text-gray-300 transition">
            Proyectos
          </a>
          <a href="#testimonios" className="hover:text-gray-300 transition">
            Testimonios
          </a>
          <a href="#contacto" className="hover:text-gray-300 transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;