"use client";

import { FaCheckCircle, FaPaperPlane, FaEnvelope } from "react-icons/fa";

export default function OfertaPrincipalSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/hero_1.webp')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#0f172a]/80 to-[#0f172a]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,214,71,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,199,114,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Formulario */}
          <div className="relative">
            <div className="rounded-3xl rounded-bl-none border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c6d647]">
                  Solicita información
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                  Déjanos tus datos
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Te contactamos con la información del proceso y tu nivel recomendado.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#c6d647] focus:ring-2 focus:ring-[#c6d647]/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="tucorreo@email.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#c6d647] focus:ring-2 focus:ring-[#c6d647]/30"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+57 300 000 0000"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#c6d647] focus:ring-2 focus:ring-[#c6d647]/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Nivel que necesitas
                    </label>
                    <select
                      name="level"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#c6d647] focus:ring-2 focus:ring-[#c6d647]/30"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="A2">A2</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="C1">C1</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Bogotá, Medellín, Cali..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#c6d647] focus:ring-2 focus:ring-[#c6d647]/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Cuéntanos tu caso
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos para qué necesitas tu certificación."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#c6d647] focus:ring-2 focus:ring-[#c6d647]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full rounded-bl-none bg-[#c6d647] px-6 py-4 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105"
                >
                  Solicitar certificación
                </button>

                <div className="flex items-center justify-center gap-2 pt-1 text-sm text-slate-500">
                  <FaEnvelope className="text-[#b7c772]" />
                  Respuesta rápida por correo o WhatsApp
                </div>
              </form>
            </div>
          </div>

          {/* Texto */}
          <div className="max-w-2xl text-white">
            <span className="inline-flex rounded-full border border-[#c6d647]/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c6d647] backdrop-blur-sm">
              Oferta principal
            </span>

            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Certificación de inglés{" "}
              <span className="text-[#c6d647]">A2, B1, B2, C1</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
              Solicita tu certificación hoy con el código{" "}
              <span className="font-semibold text-[#c6d647]">SMART100</span> y recibe acompañamiento durante todo el proceso.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-[#c6d647]" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Evaluación de nivel</h3>
                  <p className="mt-1 text-sm text-white/70">Identificamos tu punto de partida.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-[#c6d647]" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Preparación guiada</h3>
                  <p className="mt-1 text-sm text-white/70">Te acompañamos paso a paso.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-[#c6d647]" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Certificación válida</h3>
                  <p className="mt-1 text-sm text-white/70">Sirve para grado y requisitos académicos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-[#c6d647]" />
                <div>
                  <h3 className="font-semibold text-white text-sm">Proceso claro</h3>
                  <p className="mt-1 text-sm text-white/70">Sin pasos innecesarios.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c6d647] px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:shadow-xl">
              <FaPaperPlane className="h-4 w-4" />
              Solicita tu certificación hoy con SMART100
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}