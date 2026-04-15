"use client";

import {
  FaCertificate,
  FaBook,
  FaGraduationCap,
  FaTools,
  FaClock,
  FaGlobe,
  FaUserGraduate,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: FaCertificate,
    title: "Certificación de inglés",
    text: "La opción más rápida para cumplir tu requisito de grado.",
    featured: true,
  },
  {
    icon: FaGlobe,
    title: "Educación virtual en toda Colombia",
    text: "Estudia desde cualquier lugar con acompañamiento.",
  },
  {
    icon: FaBook,
    title: "Asesorías tesis Bogotá",
    text: "Apoyo profesional para tesis, trabajos y normas APA.",
  },
  {
    icon: FaClock,
    title: "Preparación exámenes inglés",
    text: "Prepárate para aprobar tu examen sin perder tiempo.",
  },
  {
    icon: FaUserGraduate,
    title: "Asesorías académicas",
    text: "Correcciones, trabajos y acompañamiento completo.",
  },
  {
    icon: FaGraduationCap,
    title: "Títulos bachiller",
    text: "Obtén tu título siendo adulto de forma flexible.",
  },
  {
    icon: FaTools,
    title: "Títulos técnicos laborales",
    text: "Formación práctica con certificación laboral.",
  },
];

export default function ServiciosSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="servicios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#b7c772]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7f8f2f]">
            Servicios
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para avanzar sin perder el foco
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Reunimos las soluciones más buscadas en un solo lugar, con una opción principal destacada para que la decisión sea más rápida.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.featured
                    ? "border-[#c6d647]/40 bg-linear-to-br from-[#050816] to-[#0f172a] text-white sm:col-span-2 lg:col-span-2 xl:col-span-2"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                {item.featured && (
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#c6d647]/15" />
                )}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
                    item.featured
                      ? "bg-[#c6d647] text-slate-900"
                      : "bg-[#c6d647]/15 text-[#7f8f2f]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    item.featured ? "text-white/75" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>

                {item.featured && (
                  <div className="mt-6 inline-flex rounded-full bg-[#c6d647] px-4 py-2 text-xs font-semibold text-slate-900">
                    Servicio destacado
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}