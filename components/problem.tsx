"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProblemaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-0">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* IZQUIERDA - TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl lg:mt-40"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#c6d647]">
              Problema rea
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              ¿Te están exigiendo el{" "}
              <span className="text-[#c6d647]">
                certificado de inglés
              </span>{" "}
              y no sabes cómo conseguirlo a tiempo?
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Ya sea para graduarte, aplicar a un empleo o avanzar en un proceso importante,
              el tiempo empieza a jugar en tu contra.
            </p>

            <p className="mt-4 text-slate-500">
              Muchos estudiantes y profesionales terminan retrasando su grado,
              perdiendo oportunidades laborales, becas o incluso procesos de visa,
              simplemente por no cumplir este requisito a tiempo.
            </p>

            {/* NUEVO REFUERZO */}
            <p className="mt-4 text-slate-500">
              Este requisito también es clave en concursos de mérito y convocatorias donde
              no tener el certificado puede dejarte fuera automáticamente.
            </p>
          </motion.div>

          {/* DERECHA - IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-75 w-full overflow-hidden rounded-3xl rounded-bl-none shadow-xl sm:h-95 lg:mt-40 lg:h-105"
          >
            <Image
              src="/problem.webp"
              alt="Problema certificación inglés"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}