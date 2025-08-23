export const metadata = {
  title: "RAYN.UNI — Portfolio",
  description: "Portfolio de photographie & réalisation — RAYN.UNI",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

<head>
  <title>Raynuni | Photographe & Réalisateur à Bordeaux</title>
  <meta name="description" content="Portfolio de Raynuni, photographe et réalisateur basé à Bordeaux. Spécialisé en portrait, mode, clips et films institutionnels." />
  <meta name="keywords" content="photographe Bordeaux, réalisateur Bordeaux, photographe Alsace, clip vidéo Bordeaux" />
  <meta property="og:title" content="Raynuni | Photographe & Réalisateur" />
  <meta property="og:description" content="Découvrez mon univers photo et vidéo à Bordeaux et en Alsace." />
  <meta property="og:image" content="/Photos/logo.png" />
  <meta property="og:url" content="https://raynuni.com" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
