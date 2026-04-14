"use client";

import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

const steps = [
  "Escribes por WhatsApp",
  "Evaluamos tu caso",
  "Inicias tu proceso",
  "Obtienes tu certificado",
];

export default function ComoFuncionaSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/hero_2.webp')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#0f172a]/80 to-[#0f172a]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,214,71,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,199,114,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* IZQUIERDA */}
          <div className="max-w-2xl text-white">
            <span className="inline-flex rounded-full border border-[#c6d647]/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c6d647] backdrop-blur-sm">
              Cómo funciona
            </span>

            <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Un proceso simple para avanzar sin fricción
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
              Te guiamos paso a paso para que inicies rápido, sin procesos largos ni complicaciones innecesarias.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#c6d647] text-slate-900">
                    <FaCheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{step}</p>
                    <p className="mt-1 text-sm text-white/70">
                      Paso {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full rounded-bl-none bg-[#c6d647] px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105"
            >
              <FaWhatsapp className="h-4 w-4" />
              Empieza hoy mismo por WhatsApp
            </a>
          </div>

          {/* DERECHA (MEJORADO - SIN REPETIR PASOS) */}
          <div className="relative flex justify-end -mt-40">
            <div className="relative z-10 w-full max-w-md translate-y-10 lg:translate-y-16">

              <div className="overflow-hidden rounded-3xl rounded-bl-none border border-white/15 bg-white/95 shadow-2xl">

                <div className="border-b border-slate-200 px-6 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b7c772]">
                    Información clave
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Lo que debes saber antes de empezar
                  </h3>
                </div>

                <div className="space-y-5 px-6 py-6 text-sm text-slate-700">

                  <div>
                    <p className="font-semibold text-slate-900">Tiempo estimado</p>
                    <p>Proceso ágil según tu nivel y disponibilidad. Sin cursos largos.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">Requisitos</p>
                    <p>No necesitas experiencia previa ni conocimientos avanzados.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">Modalidad</p>
                    <p>Acompañamiento guiado desde el primer contacto por WhatsApp.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">Resultado</p>
                    <p>Certificación lista para uso académico o profesional.</p>
                  </div>

                </div>

                <div className="bg-slate-50 px-6 py-5">
                  <p className="text-sm text-slate-600">
                    En lugar de explicarte el proceso otra vez, aquí entiendes qué obtienes realmente.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}