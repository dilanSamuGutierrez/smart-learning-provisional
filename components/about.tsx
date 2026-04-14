import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdPublic } from "react-icons/md";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-8">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-full">
        <img
            src="/about.webp"
            className="w-full h-full object-contain"
        />

        <div className="absolute bottom-4 left-4 bg-[#c6d647] rounded-xl px-4 py-2 shadow-md">
            <span className="text-black font-semibold text-sm">
            Certificación rápida y válida
            </span>
        </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">

        {/* MINI TEXTO */}
        <p className="text-sm uppercase tracking-widest text-[#c6d647] font-semibold mb-2">
            Nuestra solución
        </p>

        {/* H2 SEO */}
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Certificación de inglés{" "}
            <span className="text-[#c6d647]">
            rápida y válida
            </span>{" "}
            sin procesos complicados
        </h2>

        {/* TEXTO */}
        <p className="text-gray-600 mt-4">
            En Smart Learning te ayudamos a obtener tu certificación de inglés de forma ágil,
            con acompañamiento y sin perder tiempo en procesos innecesarios.
        </p>

        {/* FEATURES + TESTIMONIO */}
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">

            {/* FEATURES */}
            <div className="space-y-5">

            <div className="flex items-start gap-3">
                <div className="bg-[#c6d647] p-3 rounded-full text-black text-lg">
                <GiGraduateCap />
                </div>
                <div>
                <h4 className="font-semibold text-black">Proceso simplificado</h4>
                <p className="text-gray-600 text-sm">
                    Sin trámites largos ni pasos innecesarios.
                </p>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <div className="bg-[#c6d647] p-3 rounded-full text-black text-lg">
                <MdPublic />
                </div>
                <div>
                <h4 className="font-semibold text-black">100% enfocado en tu objetivo</h4>
                <p className="text-gray-600 text-sm">
                    Obtén tu certificado para grado o trabajo sin perder tiempo.
                </p>
                </div>
            </div>

            </div>

            {/* TESTIMONIO */}
            <div className="relative h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* quote icon */}
            <div className="mb-3 text-[#b7c772] text-2xl font-bold">
                “”
            </div>

            <p className="text-gray-600 text-sm leading-relaxed italic">
                “Gracias a Smart Learning logré obtener mi certificación de inglés a tiempo para graduarme. Todo fue rápido y sencillo.”
            </p>

            <div className="mt-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#b7c772]/20 flex items-center justify-center text-[#b7c772] font-bold text-sm">
                    SL
                </div>

                <div className="text-xs text-gray-500">
                    Estudiante verificado
                </div>
                </div>

            </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
            <button className="bg-[#c6d647] text-black px-6 py-3 rounded-full rounded-bl-none font-semibold hover:opacity-90">
            Obtener mi certificación
            </button>

            <div className="flex items-center gap-2 text-black">
            <FaPhoneAlt />
            <span className="font-semibold">+57 123 456 7890</span>
            </div>
        </div>

        </div>
    </div>
    </section>
  );
}
