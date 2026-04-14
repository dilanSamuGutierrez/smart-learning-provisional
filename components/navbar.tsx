"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "X / Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function NavbarTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="border-b border-black/10 bg-[#b7c772] text-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">

          {/* Redes */}
          <div className="flex items-center gap-3 group">
            <span className="text-xs font-semibold opacity-0 transition group-hover:opacity-100">
              Síguenos →
            </span>

            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40 transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-md"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Contacto + ubicación */}
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden md:flex items-center gap-2 opacity-80 hover:opacity-100 transition">
              <FaMapMarkerAlt /> Bogotá, Colombia
            </span>

            <a href="mailto:contacto@tuempresa.com" className="flex items-center gap-2 transition hover:opacity-70">
              <FaEnvelope /> contacto@tuempresa.com
            </a>

            <a href="tel:+573001112233" className="flex items-center gap-2 transition hover:opacity-70">
              <FaPhoneAlt /> +57 300 111 2233
            </a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className="relative bg-white border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

          {/* LOGO */}
          <Link href="/" className="relative flex items-center">
            <div className="absolute -top-10 left-0 z-10 flex items-center justify-center">
              
              <div className="w-[150px] h-[150px] bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                
                <div className="relative w-[140px] h-[140px]">
                  <Image
                    src="/Logo_img.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>

              </div>

            </div>
          </Link>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium relative transition-all duration-300 hover:text-[#7f8f2f] text-black"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] text-black transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}

            <Link
              href="#contacto"
              className="bg-[#c6d647] px-5 py-3 rounded-full rounded-bl-none font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Cotizar ahora <FaChevronRight className="inline ml-1" />
            </Link>
          </div>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden transition hover:scale-110"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden px-4 pb-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 transition hover:text-[#7f8f2f]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}