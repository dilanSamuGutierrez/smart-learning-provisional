"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCertificate, FaClock, FaFileAlt, FaLanguage } from "react-icons/fa";
import { useEffect, useState } from "react";

const images = ["/hero_1.webp", "/hero_2.webp", "/hero_3.webp"];

const services = [
  {
    icon: FaCertificate,
    title: "Certificado válido",
    text: "Ideal para procesos académicos y requisitos institucionales en Colombia.",
  },
  {
    icon: FaClock,
    title: "Rápido y flexible",
    text: "Avanza sin perder tiempo con una ruta clara y acompañamiento continuo.",
  },
  {
    icon: FaFileAlt,
    title: "Soporte académico",
    text: "Te orientamos para que uses tu certificado en grado, homologación o perfil laboral.",
  },
  {
    icon: FaLanguage,
    title: "Niveles A2 a C1",
    text: "Prepara y certifícate según tu meta actual y el nivel que necesitas alcanzar.",
  },
];

export default function HeroCertificacionIngles() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <section className="relative isolate overflow-visible" id="inicio">
      <div className="relative isolate overflow-visible min-h-225 sm:min-h-245 lg:min-h-190">
        {/* CAROUSEL */}
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="Certificación de inglés"
              fill
              priority
              className={`object-cover object-center transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-[#0f172a]/70 to-transparent" />

        {/* CONTENIDO */}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-2xl text-left text-white">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-sm text-[#c6d647]">
                Certificación de inglés
              </span>

              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Certificación de inglés{" "}
                <span className="text-[#c6d647]">rápida y válida</span> en Colombia y el exterior
                (A2, B1, B2, C1)
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                Obtén tu certificado de inglés en poco tiempo, cumple tu requisito de
                grado o mejora tu perfil profesional sin complicaciones.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row relative z-30">
                <Link
                  href="#contacto"
                  onClick={(e) => handleScroll(e, "#contacto")}
                  className="inline-flex items-center justify-center rounded-full rounded-bl-none bg-[#c6d647] px-6 py-4 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105"
                >
                  Solicitar información
                </Link>

                <Link
                  href="#servicios"
                  onClick={(e) => handleScroll(e, "#servicios")}
                  className="inline-flex items-center justify-center rounded-full rounded-bl-none border border-[#c6d647]/50 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl"
                >
                  Ver niveles y proceso
                </Link>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>

          {/* CARDS EN FLUJO NORMAL EN MÓVIL / ABSOLUTAS SOLO EN DESKTOP */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:w-full">
            <div className="mx-auto max-w-7xl px-0 sm:px-1 lg:px-6">
              <div className="flex justify-center lg:justify-end">
                <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:w-[80%] lg:translate-y-[55%]">
                  {services.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="group rounded-3xl border border-white/25 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6d647] text-slate-900 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}