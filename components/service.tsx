"use client";

import {
  FaCertificate,
  FaBook,
  FaGraduationCap,
  FaTools,
  FaClock,
} from "react-icons/fa";

const services = [
  {
    icon: FaCertificate,
    title: "Certificación de inglés",
    text: "La opción más rápida para cumplir tu requisito de grado.",
    featured: true,
  },
  {
    icon: FaBook,
    title: "Asesorías académicas",
    text: "Tesis, trabajos, normas APA, correcciones y más.",
  },
  {
    icon: FaGraduationCap,
    title: "Bachillerato virtual",
    text: "Obtén tu título siendo adulto, 100% online.",
  },
  {
    icon: FaTools,
    title: "Carreras técnicas",
    text: "Formación práctica con certificación.",
  },
  {
    icon: FaClock,
    title: "Cursos por horas",
    text: "Aprendizaje flexible y certificado.",
  },
];

export default function ServiciosSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#b7c772]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7f8f2f]">
            Servicios
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para avanzar sin perder el foco
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Reunimos las soluciones más buscadas en un solo lugar, con una opción principal destacada para que la decisión sea más rápida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.featured
                    ? "border-[#c6d647]/40 bg-gradient-to-br from-[#050816] to-[#0f172a] text-white md:col-span-2 xl:col-span-2"
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}