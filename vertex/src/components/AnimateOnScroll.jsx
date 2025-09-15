// src/components/AnimateOnScroll.jsx

import React, { useState, useEffect, useRef } from 'react';

/**
 * Componente que anima a sus hijos cuando entran en la vista.
 * Utiliza IntersectionObserver y clases de Tailwind.
 * * Props:
 * - children: Los elementos a animar.
 * - className: Clases de Tailwind adicionales para el contenedor.
 * - delay: Un retraso en milisegundos (similar a data-aos-delay).
 * - threshold: Qué porcentaje del elemento debe estar visible para disparar la animación (0 a 1).
 */
function AnimateOnScroll({ children, className = '', delay = 0, threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento es intersectado (visible)
        if (entry.isIntersecting) {
          // Usamos un setTimeout para respetar el delay
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Dejamos de observar este elemento una vez que es visible
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: threshold // Dispara cuando el 10% del elemento es visible
      }
    );

    // Empezamos a observar el elemento
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Limpieza al desmontar el componente
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, delay, threshold]); // Se re-ejecuta si estas props cambian

  // Clases base para la transición
  const baseClasses = 'transition-all duration-1000 ease-in-out';
  
  // Clases para el estado inicial (oculto, movido hacia abajo)
  // Reemplaza el "fade-up" de AOS
  const hiddenClasses = 'opacity-0 translate-y-10';
  
  // Clases para el estado final (visible, en su posición original)
  const visibleClasses = 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      // Combinamos las clases: base, estado (visible/oculto) y las personalizadas
      className={`${baseClasses} ${isVisible ? visibleClasses : hiddenClasses} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimateOnScroll;