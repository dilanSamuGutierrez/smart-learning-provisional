"use client";

import Image from "next/image";

export default function ProblemaSection() {
  return (
    <section className="bg-white py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 ">

          {/* IZQUIERDA - TEXTO */}
          <div className="max-w-xl mt-40">
            
            {/* MINI TEXTO */}
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#c6d647]">
              Problema real
            </span>

            {/* TITULO */}
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
              ¿Te están exigiendo el{" "}
              <span className="text-[#c6d647]">
                certificado de inglés
              </span>{" "}
              para graduarte?
            </h2>

            {/* DESCRIPCIÓN */}
            <p className="mt-6 text-lg text-slate-600">
              ¿No sabes cómo hacerlo rápido o no tienes tiempo para procesos largos?
            </p>

            <p className="mt-4 text-slate-500">
              Muchos estudiantes terminan retrasando su grado o perdiendo oportunidades
              simplemente por no cumplir este requisito a tiempo.
            </p>

          </div>

          {/* DERECHA - IMAGEN */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[420px] rounded-3xl rounded-bl-none overflow-hidden shadow-xl mt-40">
                <Image
                    src="/hero_1.webp"
                    alt="Problema certificación inglés"
                    fill
                    className="object-cover"
                />
          </div>

        </div>

      </div>
    </section>
  );
}