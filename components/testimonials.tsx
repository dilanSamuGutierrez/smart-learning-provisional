"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaUserGraduate } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Camila R.",
    text: "Necesitaba el certificado urgente para graduarme y lo logré sin complicaciones.",
  },
  {
    name: "Juan P.",
    text: "El proceso fue claro desde el inicio. Me guiaron en todo y avancé rápido.",
  },
  {
    name: "Laura M.",
    text: "Pensé que iba a ser largo, pero fue mucho más rápido de lo que esperaba.",
  },
  {
    name: "Andrés G.",
    text: "Gracias a esto pude cumplir el requisito y aplicar a mejores oportunidades.",
  },
];

export default function TestimoniosSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // 🔥 AUTOPLAY
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

        {/* TITULO */}
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Estudiantes que ya lograron su{" "}
          <span className="text-[#c6d647]">certificación</span>
        </h2>

        <p className="mt-3 text-sm text-slate-600">
          Personas que necesitaban cumplir su requisito y ya lo lograron.
        </p>

        {/* CARD */}
        <div
          className="mt-8 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
            >
              <div className="flex items-start gap-4 text-left">

                {/* ICONO */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#c6d647] text-slate-900">
                  <FaUserGraduate className="h-5 w-5" />
                </div>

                {/* TEXTO */}
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    “{testimonials[index].text}”
                  </p>

                  <p className="mt-3 font-semibold text-slate-900">
                    {testimonials[index].name}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES */}
          <div className="mt-5 flex justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-[#c6d647] hover:text-black"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-[#c6d647] hover:text-black"
            >
              <FaChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}