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
