"use client";

import { FaGlobe, FaBolt, FaUserCheck, FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: FaGlobe,
    title: "100% online",
    text: "Desde Bucaramanga para todo el mundo, sin límites geográficos.",
  },
  {
    icon: FaBolt,
    title: "Proceso rápido",
    text: "Avanza sin procesos largos ni complicaciones innecesarias.",
  },
  {
    icon: FaUserCheck,
    title: "Acompañamiento personalizado",
    text: "Te guiamos en todo el proceso según tu caso específico.",
  },
  {
    icon: FaLayerGroup,
    title: "Según tu nivel",
    text: "Opciones adaptadas desde A2 hasta C1 según tu necesidad.",
  },
];

export default function BeneficiosClaveSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TEXTO CENTRAL */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b7c772]">
            Beneficios clave
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Razones por las que estudiantes nos eligen
          </h2>

          <p className="mt-4 text-slate-600 text-base leading-7">
            Todo está diseñado para que obtengas tu certificación sin perder tiempo ni complicarte con procesos innecesarios.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c6d647] text-slate-900 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}