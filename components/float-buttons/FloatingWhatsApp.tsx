"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/573212426083?text=Quiero%20obtener%20más%20info%20sobre%20sus%20servicios%20y%20certificaciones"
      target="_blank"
      className="fixed bottom-20 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        style={{ fontSize: "2rem" }}
      />
    </Link>
  )
}