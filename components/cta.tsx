"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 sm:py-24 lg:py-28">
      
      {/* FONDOS */}
      <div className="absolute inset-0 bg-linear-to-br from-[#050816] via-[#0f172a] to-[#1a2238]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,214,71,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(183,199,114,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CARD PRINCIPAL */}
        <div className="relative grid gap-10 overflow-hidden rounded-3xl rounded-bl-none border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10 lg:grid-cols-2 lg:p-14">

          {/* IZQUIERDA */}
          <div className="max-w-xl text-white">
            <span className="inline-flex rounded-full border border-[#c6d647]/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c6d647]">
              Último paso
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              No sigas retrasando{" "}
              <span className="text-[#c6d647]">
                tu certificación
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              Escríbenos ahora y asegura tu proceso con descuento. Mientras más esperas, más retrasas tu avance académico o profesional.
            </p>

            {/* BOTÓN */}
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full rounded-bl-none bg-[#c6d647] px-6 py-4 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105"
            >
              <FaWhatsapp className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* DERECHA (ELEMENTO VISUAL QUE LLENA) */}
          <div className="relative flex items-center justify-center">

            <div className="relative w-full max-w-sm">

              {/* BLOQUE DESTACADO */}
              <div className="rounded-3xl rounded-bl-none border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-xl">

                <p className="text-sm uppercase tracking-widest text-[#c6d647] font-semibold">
                  Acceso inmediato
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Inicia hoy mismo tu proceso
                </h3>

                <p className="mt-3 text-sm text-white/70">
                  Sin procesos largos. Sin vueltas innecesarias. Todo claro desde el inicio.
                </p>

                {/* MINI BENEFICIOS */}
                <div className="mt-5 space-y-2 text-sm text-white/80">
                  <p>• Evaluación rápida</p>
                  <p>• Proceso guiado</p>
                  <p>• Certificación válida</p>
                </div>

              </div>

              {/* EFECTOS */}
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[#c6d647]/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#b7c772]/20 blur-2xl" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}