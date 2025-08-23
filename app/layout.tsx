import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rayn Uni — Photographe & Réalisateur à Bordeaux",
  description:
    "Photographe et réalisateur basé à Bordeaux. Je crée des images et des films avec une esthétique cinématographique et authentique. Disponible partout en France.",
  keywords: [
    "photographe Bordeaux",
    "réalisateur Bordeaux",
    "photographie Alsace",
    "vidéaste Bordeaux",
    "photographe mode",
    "film institutionnel",
    "shooting Bordeaux",
  ],
  openGraph: {
    title: "Rayn Uni — Photographe & Réalisateur à Bordeaux",
    description:
      "Portfolio de Rayn Uni, photographe et réalisateur basé à Bordeaux. Découvrez mes photos, vidéos et prestations.",
    url: "https://raynuni.com",
    siteName: "Rayn Uni",
    images: [
      {
        url: "/Photos/logo.png", // tu peux mettre une photo ou un logo
        width: 1200,
        height: 630,
        alt: "Rayn Uni Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayn Uni — Photographe & Réalisateur à Bordeaux",
    description:
      "Photographe et réalisateur basé à Bordeaux, je crée des images et vidéos avec une esthétique simple et ciné.",
    images: ["/Photos/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}