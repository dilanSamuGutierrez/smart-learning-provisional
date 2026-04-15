"use client";

import { useState } from "react";
import { FaWhatsapp, FaGift, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-5 bottom-5 z-50 flex items-center gap-2 rounded-full bg-[#c6d647] px-5 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <FaGift />
        <span className="hidden sm:inline">Obtener código promocional</span>
      </button>

      {/* MODAL CON ANIMACIÓN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-5 bottom-20 z-50 w-[90%] max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl"
          >
            {/* CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-slate-500 hover:text-black"
            >
              <FaTimes />
            </button>

            {/* CONTENIDO */}
            <div className="text-center">
              <p className="text-sm text-slate-500">
                Tu código promocional:
              </p>

              <div className="mt-2 rounded-xl bg-[#c6d647]/20 px-4 py-3 text-lg font-bold text-slate-900">
                SMART100
              </div>

              <p className="mt-3 text-sm text-slate-600">
                Úsalo ahora y recibe información prioritaria.
              </p>

              {/* BOTÓN WHATSAPP */}
              <a
                href="https://wa.me/573212426083?text=Hola%2C%20tengo%20el%20c%C3%B3digo%20SMART100%20y%20quiero%20informaci%C3%B3n%20sobre%20la%20certificaci%C3%B3n"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full rounded-bl-none bg-[#25D366] px-5 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                <FaWhatsapp />
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}