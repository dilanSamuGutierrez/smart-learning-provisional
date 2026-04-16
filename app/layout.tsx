import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartlearningcolombia.com"),

  title:
    "Certificación de inglés rápida y válida en Colombia y en el exterior (A2, B1, B2, C1)",
  description:
    "Obtén tu certificación de inglés en Colombia y en el exterior de forma rápida y 100% online. Cumple tu requisito de grado o mejora tu perfil profesional sin procesos complicados.",

  keywords: [
    "certificación de inglés Colombia",
    "certificado de inglés rápido",
    "certificación B1 Colombia",
    "certificación B2 Colombia",
    "certificación inglés requisito de grado",
    "certificación inglés online Colombia",
    "curso de inglés con certificación",
  ],

  authors: [{ name: "Smart Learning" }],
  creator: "Smart Learning",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/Logo_img.png",
    apple: "/Logo_img.png",
  },

  openGraph: {
    title:
      "Certificación de inglés rápida | Smart Learning",
    description:
      "Obtén tu certificado de inglés rápido en Colombia. Ideal para requisito de grado, trabajo o crecimiento profesional.",
    url: "https://smartlearningcolombia.com",
    siteName: "Smart Learning",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://smartlearningcolombia.com/Logo_img.png",
        width: 1200,
        height: 630,
        alt: "Certificación de inglés en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Certificación de inglés rápida y válida en Colombia (A2, B1, B2, C1)",
    description:
      "Certifícate en inglés rápido y sin complicaciones. 100% online en Colombia.",
    images: ["https://smartlearningcolombia.com/Logo_img.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "Smart Learning",
                url: "https://smartlearningcolombia.com",
                logo: "https://smartlearningcolombia.com/Logo_img.png",
                description:
                  "Certificación de inglés rápida y válida en Colombia (A2, B1, B2, C1) con acompañamiento personalizado.",
                areaServed: "CO",
                sameAs: [
                  "https://www.instagram.com/smartlearningacademia",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Certificación de inglés en Colombia",
                description:
                  "Servicio de certificación de inglés rápida y válida para requisito de grado en Colombia.",
                provider: {
                  "@type": "Organization",
                  name: "Smart Learning",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Colombia",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿La certificación de inglés es válida para universidades?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, la certificación es válida para cumplir requisitos académicos en universidades en Colombia.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuánto tiempo tarda el proceso?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "El proceso es rápido y depende de tu nivel actual y disponibilidad.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Es completamente online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, todo el proceso se realiza 100% online con acompañamiento.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Qué nivel de inglés necesito?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Se evalúa tu nivel inicial y se adapta el proceso desde A2 hasta C1 según tu necesidad.",
                    },
                  },
                ],
              },
            ]),
          }}
        />

        {children}
      </body>
    </html>
  );
}