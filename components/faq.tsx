"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "¿La certificación de inglés es válida para universidades?",
    answer:
      "Depende del requisito específico de cada universidad. Te ayudamos a revisar lo que necesitas para orientarte con la opción más adecuada según tu caso.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso?",
    answer:
      "El tiempo depende de tu nivel actual y de la ruta que necesites. La idea es que avances de forma ágil, sin procesos largos ni complicaciones innecesarias.",
  },
  {
    question: "¿Es completamente online?",
    answer:
      "Sí. Todo el proceso se gestiona online, con acompañamiento personalizado desde el primer contacto hasta la orientación final.",
  },
  {
    question: "¿Qué nivel necesito?",
    answer:
      "Podemos trabajar contigo según el nivel que necesites: A2, B1, B2 o C1. Si no lo tienes claro, te ayudamos a identificarlo.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-14 lg:py-12" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left side */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-[#b7c772]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7f8f2f]">
              FAQ
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Preguntas frecuentes
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Resolvemos las dudas más comunes para que avances con claridad y tomes una decisión más rápida.
            </p>

            <div className="mt-8 rounded-3xl rounded-bl-none border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6d647] text-slate-900">
                  <FaQuestionCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    No te quedes con dudas
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Si tu caso es particular, te orientamos para encontrar la mejor ruta según tu nivel y objetivo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const active = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 ${
                    active
                      ? "border-[#c6d647]/40 bg-[#050816]"
                      : "border-slate-200 bg-white hover:shadow-lg"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(active ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 ${
                      active ? "text-white" : "text-slate-900"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                          active ? "bg-[#c6d647] text-slate-900" : "bg-[#c6d647]/15 text-[#7f8f2f]"
                        }`}
                      >
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-base font-semibold leading-6 sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <FaChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        active ? "rotate-180 text-[#c6d647]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0">
                        <div
                          className={`rounded-2xl p-5 text-sm leading-7 ${
                            active
                              ? "bg-white/5 text-white/80"
                              : "bg-slate-50 text-slate-600"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-3xl rounded-bl-none border border-[#c6d647]/25 bg-[#c6d647]/10 p-6">
              <p className="text-sm font-medium text-slate-800">
                ¿Tu pregunta no aparece aquí? La revisamos contigo y te damos una orientación clara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}