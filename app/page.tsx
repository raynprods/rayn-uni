"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const BRAND = {
  bg: "#000000",
  text: "#F5F5F5",
  mute: "#D9D9D9",
  accent: "#B22222",
};

const nav = [
  { id: "home", label: "Accueil" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Prestations" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Photographe & Réalisateur
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Alsacien installé à Bordeaux, je crée des images et des films qui
              racontent une histoire — avec une esthétique simple, ciné et sans
              chichi.
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
        </motion.div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="mx-auto max-w-7xl px-4 py-16 md:py-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>

        {/* Grille photos */}
        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <img src="/Photos/1.jpg" alt="Photo 1" className="rounded-lg w-full" />
          <img src="/Photos/2.jpg" alt="Photo 2" className="rounded-lg w-full" />
          <img src="/Photos/3.jpg" alt="Photo 3" className="rounded-lg w-full" />
          <img src="/Photos/4.jpg" alt="Photo 4" className="rounded-lg w-full" />
          <img src="/Photos/5.jpg" alt="Photo 5" className="rounded-lg w-full" />
          <img src="/Photos/6.jpg" alt="Photo 6" className="rounded-lg w-full" />
        </div>

        {/* Vidéos */}
        <h3 className="mt-16 mb-6 text-2xl font-semibold">Vidéos</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Echo",
              url: "https://www.youtube.com/embed/OlpkS8PBn4g",
              thumb: "https://img.youtube.com/vi/OlpkS8PBn4g/hqdefault.jpg",
            },
            {
              title: "Tous Jours",
              url: "https://www.youtube.com/embed/SV-q4rb_T5s",
              thumb: "https://img.youtube.com/vi/SV-q4rb_T5s/hqdefault.jpg",
            },
          ].map((video, i) => (
            <div
              key={i}
              onClick={() => setActiveVideo(video.url)}
              className="cursor-pointer block group rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 py-3 text-sm flex items-center justify-between">
                <span className="opacity-80">{video.title}</span>
                <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Prestations</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          De la préparation au rendu final, chaque projet est construit avec
          soin, une bonne dose de créativité et une esthétique assumée.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">Photographie</h3>
            <p className="mt-2 text-white/70 text-sm">
              Portraits, mode, événements ou campagnes… je capture des images
              qui marquent les esprits.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">Réalisation</h3>
            <p className="mt-2 text-white/70 text-sm">
              Clips, films institutionnels, aftermovies ou documentaires : je
              raconte ton histoire en vidéo avec rythme et authenticité.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">Post-production</h3>
            <p className="mt-2 text-white/70 text-sm">
              Montage, étalonnage, sound design… je peaufine chaque détail pour
              un rendu final propre et impactant.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/10"
      >
        <div className="grid md:grid-cols-2 gap-10">
          {/* Infos */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <p className="mt-3 text-white/70 max-w-lg">
              Besoin d’un shooting, d’un clip ou d’un film ? Dis-moi ce que tu
              as en tête et on construit ça ensemble.
            </p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>📍 Bordeaux • Alsace • France</li>
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
          </div>

          {/* Formulaire */}
          <form
            className="rounded-2xl border border-white/10 p-6 space-y-4 bg-black/30"
            action="https://formspree.io/f/xxxxxx" // remplace par ton endpoint Formspree
            method="POST"
          >
            <input
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
              placeholder="Nom"
              name="name"
              required
            />
            <input
              type="email"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              rows={5}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3"
              placeholder="Message..."
              name="message"
              required
            />
            <button
              type="submit"
              className="w-full rounded-xl px-5 py-3 font-semibold"
              style={{ background: BRAND.accent }}
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-xs flex items-center justify-between text-white/50">
          <span>© {year} RAYN.UNI — Tous droits réservés</span>
        </div>
      </footer>

      {/* Lightbox Vidéo */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Video player"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
