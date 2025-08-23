"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

// ✅ Wrapper propre pour Framer Motion (évite les erreurs de typage)
const MotionDiv = motion.div;

// 🎨 Thème
const BRAND = {
  bg: "#000000",
  text: "#F5F5F5",
  mute: "#D9D9D9",
  accent: "#B22222",
};

// 🧭 Nav
const nav = [
  { id: "home", label: "Accueil" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Prestations" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div
      style={{ background: BRAND.bg, color: BRAND.text }}
      className="min-h-screen font-[Inter,ui-sans-serif,system-ui]"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="text-2xl font-extrabold tracking-wider">
              <span>RAYN</span>
              <span style={{ color: BRAND.accent }}>.</span>
              <span>UNI</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="hover:opacity-80 transition-opacity"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-7xl px-4 py-24 md:py-36">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Photographe & Réalisateur
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Alsacien installé à Bordeaux, je crée des images et des films qui
              racontent une histoire — avec une esthétique minimaliste et
              cinématographique.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#portfolio"
                className="rounded-xl px-5 py-3 font-semibold"
                style={{ background: BRAND.text, color: BRAND.bg }}
              >
                Voir le portfolio
              </a>
              <a
                href="#contact"
                className="rounded-xl px-5 py-3 font-semibold border border-white/20 hover:border-white/40"
                style={{ color: BRAND.text }}
              >
                Demander un devis
              </a>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/Photos/logo.png"
              alt="Preview"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div
              className="absolute bottom-4 left-4 text-sm uppercase tracking-widest"
              style={{ color: BRAND.mute }}
            >
              Showreel / Still Frame
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Portfolio (masonry simple via CSS columns) */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
          <p className="mt-2 text-white/60">
            Sélection d’images — la grille s’adapte automatiquement au format
            des photos.
          </p>
        </MotionDiv>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {["1", "2", "3", "4", "5", "6"].map((n, i) => (
            <MotionDiv
              key={n}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="break-inside-avoid mb-4 overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={`/Photos/${n}.jpg`}
                alt={`Photo ${n}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/10"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Prestations</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            De la préparation au rendu final, j&apos;accompagne chaque projet
            avec une attention au détail et une esthétique assumée.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Photographie",
              d: "Portrait, mode, corporate, événements, campagnes.",
            },
            {
              t: "Réalisation",
              d: "Clips, films institutionnels, aftermovies, documentaire.",
            },
            {
              t: "Post-production",
              d: "Montage, étalonnage, sound design, livraison optimisée.",
            },
          ].map((s, i) => (
            <MotionDiv
              key={s.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 p-6 bg-black/20"
            >
              <h3 className="text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.d}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* À propos (optionnel) */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/10"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/Photos/moi.jpg"
              alt="Portrait"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">À propos</h2>
            <p className="mt-3 text-white/70">
              Je conçois des images soignées avec une direction artistique
              claire, pour des marques, artistes et particuliers.
            </p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>📍 Bordeaux • Alsace • France</li>
              <li>🌙 Esthétique ciné, lumière naturelle et teintures sobres</li>
              <li>⚙️ Adobe Premiere Pro • DaVinci Resolve • Lightroom</li>
            </ul>
          </div>
        </MotionDiv>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/10"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <p className="mt-3 text-white/70 max-w-lg">
              Dis-moi en quelques mots ton besoin (shooting, clip, film, autre)
              et tes dates souhaitées. Je reviens vers toi rapidement.
            </p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>✉️ khennaoui@gmail.com</li>
              <li>📞 +33 6 15 77 98 43</li>
              <li>
                🔗{" "}
                <a
                  href="https://www.instagram.com/rayn_prods/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>{" "}
                •{" "}
                <a
                  href="https://www.linkedin.com/in/rayyan-khennaoui-a85623205/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-white/10 p-6 space-y-4 bg-black/30"
          >
            <form
               action="https://formspree.io/f/mjkonqdd" // ⚡ remplace TON-ID-FORM par ton lien Formspree
  method="POST"
  className="rounded-2xl border border-white/10 p-6 space-y-4 bg-black/30"
>
  <input
    type="text"
    name="name"
    placeholder="Nom"
    required
    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
  />
  <textarea
    name="message"
    rows={5}
    placeholder="Message..."
    required
    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
  />
  <button
    type="submit"
    className="w-full rounded-xl px-5 py-3 font-semibold"
    style={{ background: BRAND.accent }}
  >
    Envoyer
              </button>
            </form>
          </MotionDiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-xs flex items-center justify-between text-white/50">
          <span>© {year} RAYN.UNI — Tous droits réservés</span>
        </div>
      </footer>
    </div>
  );
}
