// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAYN.UNI — Photographe & Réalisateur",
  description:
    "Portfolio de RAYN.UNI — Photographe & Réalisateur basé à Bordeaux. Projets photo et vidéo pour marques, artistes et particuliers.",
  metadataBase: new URL("https://raynuni.com"),
  alternates: { canonical: "/" },

  // Favicons / icônes
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }, // favicon
    ],
    apple: [
      { url: "/logo.png", type: "image/png" }, // icône iOS (si tu veux une version 180x180, renomme-la et ajoute-la ici)
    ],
  },

  // Open Graph (aperçus Facebook/LinkedIn + parfois Google)
  openGraph: {
    title: "RAYN.UNI — Photographe & Réalisateur",
    description:
      "Portfolio de RAYN.UNI — Photographe & Réalisateur basé à Bordeaux.",
    url: "https://raynuni.com",
    siteName: "RAYN.UNI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Logo RAYN.UNI",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "RAYN.UNI — Photographe & Réalisateur",
    description:
      "Portfolio de RAYN.UNI — Photographe & Réalisateur basé à Bordeaux.",
    images: ["/logo.png"],
    creator: "@rayn_prods",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD (aide Google à associer ton logo à ta "marque")
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RAYN.UNI",
    url: "https://raynuni.com",
    logo: "https://raynuni.com/logo.png",
    sameAs: [
      "https://www.instagram.com/rayn.uni/",
      "https://www.linkedin.com/in/rayyan-khennaoui-a85623205/",
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          // On stringify ici pour éviter les erreurs d’objets dans l’attribut
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}