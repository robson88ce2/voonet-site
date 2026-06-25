"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Headset, ShieldCheck, Wifi, Zap } from "lucide-react";
import { planos } from "./data/planos";

/* ── Variantes de animação ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

/* ── Dados ── */
const beneficios = [
  {
    titulo: "Ultra Velocidade",
    texto: "Navegue, jogue e assista sem travamentos.",
    Icone: Zap,
    cor: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    titulo: "Suporte 24h",
    texto: "Atendimento rápido e eficiente sempre que precisar.",
    Icone: Headset,
    cor: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    titulo: "Conexão Estável",
    texto: "Fibra óptica de verdade para máxima estabilidade.",
    Icone: ShieldCheck,
    cor: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    titulo: "Wi-Fi Grátis",
    texto: "Equipamentos modernos sem custo adicional.",
    Icone: Wifi,
    cor: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const estatisticas = [
  { valor: "100%", rotulo: "Fibra Óptica" },
  { valor: "24h", rotulo: "Suporte Técnico" },
  { valor: "99%", rotulo: "Estabilidade" },
  { valor: "5★", rotulo: "Atendimento" },
];

/* ════════════════════════════════ */
export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/images/banner-home.png')" }}
      >
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Fibra Óptica de Alta Performance
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight"
            >
              Internet rápida
              <br />
              para sua{" "}
              <span className="text-orange-500 relative">
                casa
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500/40 rounded-full" />
              </span>
              <br />e{" "}
              <span className="text-orange-500 relative">
                empresa
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500/40 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-lg text-zinc-300 max-w-xl leading-relaxed"
            >
              Conexão estável, atendimento humanizado e planos que cabem no seu
              bolso — com fibra óptica de verdade.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/planos"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Ver Planos <FaArrowRight size={14} />
              </Link>
              <Link
                href="/cobertura"
                className="inline-flex items-center gap-2 border border-zinc-500 hover:border-orange-500 hover:text-orange-400 px-8 py-4 rounded-2xl transition-all backdrop-blur-sm"
              >
                Consultar Cobertura
              </Link>
            </motion.div>

            {/* Stats rápidas */}
            <motion.div
              variants={fadeUp}
              className="mt-16 flex flex-wrap gap-8"
            >
              {estatisticas.map(({ valor, rotulo }) => (
                <div key={rotulo} className="flex flex-col">
                  <span className="text-2xl font-bold text-orange-500">{valor}</span>
                  <span className="text-xs text-zinc-400 mt-0.5">{rotulo}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ══════════════ BENEFÍCIOS ══════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Por que escolher a Voonet?
            </span>
            <h2 className="text-4xl font-bold text-black mt-3">
              Tudo que você precisa em um só lugar
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {beneficios.map(({ titulo, texto, Icone, cor, bg }) => (
              <motion.div
                key={titulo}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white border border-zinc-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 flex flex-col"
              >
                {/* Ícone em container colorido */}
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6`}>
                  <Icone size={28} className={cor} />
                </div>
                <h3 className="font-bold text-xl text-black">{titulo}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed text-sm flex-1">{texto}</p>
                {/* Barra inferior colorida */}
                <div className={`mt-6 h-1 w-10 rounded-full ${bg.replace("bg-", "bg-").replace("-50", "-400")} group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PLANOS ══════════════ */}
      <section className="bg-zinc-50 py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Planos Residenciais
            </span>
            <h2 className="text-5xl font-extrabold text-black mt-4">
              Escolha o plano ideal
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Fibra óptica de alta velocidade para toda a família.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start"
          >
            {planos.map((plano) => (
              <motion.div
                key={plano.nome}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.25 } }}
                className={`relative rounded-3xl p-8 flex flex-col transition-shadow hover:shadow-2xl
                  ${plano.destaque
                    ? "bg-orange-500 text-white shadow-xl shadow-orange-500/30 scale-105"
                    : "bg-white text-black shadow-lg border border-zinc-100"
                  }`}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-500 px-5 py-1.5 rounded-full text-xs font-extrabold shadow-md whitespace-nowrap">
                    ⚡ MAIS CONTRATADO
                  </div>
                )}

                <h3 className={`text-3xl font-extrabold ${plano.destaque ? "text-white" : "text-orange-500"}`}>
                  {plano.nome}
                </h3>
                <p className={`mt-1 text-sm ${plano.destaque ? "text-orange-100" : "text-gray-400"}`}>
                  {plano.descricao}
                </p>

                {/* Preço */}
                <div className="mt-6 flex items-end gap-1">
                  <span className={`text-lg font-bold self-start mt-2 ${plano.destaque ? "text-orange-100" : "text-orange-500"}`}>
                    R$
                  </span>
                  <span className={`text-6xl font-black leading-none ${plano.destaque ? "text-white" : "text-orange-500"}`}>
                    {plano.preco}
                  </span>
                  <span className={`text-sm mb-1 ${plano.destaque ? "text-orange-100" : "text-gray-400"}`}>
                    /mês
                  </span>
                </div>

                <hr className={`my-6 ${plano.destaque ? "border-orange-400/50" : "border-zinc-100"}`} />

                <ul className={`space-y-2.5 flex-1 ${plano.destaque ? "text-white" : "text-gray-600"}`}>
                  {plano.recursos.map((recurso) => (
                    <li key={recurso} className="flex items-center gap-2 text-sm">
                      <span className={`font-bold ${plano.destaque ? "text-white" : "text-orange-500"}`}>✓</span>
                      {recurso}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/5588982204215?text=${encodeURIComponent(
                    `Olá! Quero contratar o plano ${plano.nome}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 mt-8 py-4 rounded-2xl font-bold text-sm transition-all hover:scale-105
                    ${plano.destaque
                      ? "bg-white text-orange-500 hover:bg-zinc-100"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                >
                  <FaWhatsapp size={16} /> Contratar agora
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SOBRE ══════════════ */}
      <section className="bg-zinc-950 text-white py-28 relative overflow-hidden">
        {/* Decoração de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Sobre a Voonet
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
              Conectando pessoas com tecnologia de ponta
            </h2>
            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Levamos internet de alta velocidade para residências e empresas,
              oferecendo estabilidade, atendimento humanizado e suporte técnico
              especializado.
            </p>
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 mt-10 text-orange-500 font-semibold hover:gap-4 transition-all"
            >
              Conhecer planos <FaArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {estatisticas.map(({ valor, rotulo }) => (
              <motion.div
                key={rotulo}
                variants={fadeUp}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-3xl p-8 transition-colors"
              >
                <div className="text-orange-500 text-4xl font-black">{valor}</div>
                <p className="mt-2 text-zinc-400 text-sm">{rotulo}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CTA FINAL ══════════════ */}
      <section className="relative bg-orange-500 text-white py-24 overflow-hidden">
        {/* Decoração */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
            Sem fidelidade obrigatória
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Pronto para navegar
            <br />
            <span className="text-orange-100">sem limites?</span>
          </h2>
          <p className="mt-6 text-lg text-orange-100 max-w-xl mx-auto">
            Escolha seu plano e fale com nossa equipe agora mesmo. Instalação rápida e sem burocracia.
          </p>
          <a
            href="https://wa.me/5588982204215"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-white text-orange-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <FaWhatsapp size={22} /> Falar no WhatsApp
          </a>
        </motion.div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Marca */}
            <div>
              <h3 className="text-3xl font-black text-orange-500 tracking-tight">VOONET</h3>
              <p className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">Telecom</p>
              <p className="mt-5 text-zinc-400 leading-relaxed text-sm">
                Internet fibra óptica para residências e empresas, com
                velocidade, estabilidade e atendimento diferenciado.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://wa.me/5588982204215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-green-500/20 flex items-center justify-center text-green-500 hover:scale-110 transition-all"
                  aria-label="WhatsApp da VOONET"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.instagram.com/voonet_telecom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-pink-500/20 flex items-center justify-center text-pink-500 hover:scale-110 transition-all"
                  aria-label="Instagram da VOONET"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="font-bold text-base text-zinc-200">Navegação</h4>
              <ul className="mt-5 space-y-3 text-zinc-400">
                {[
                  { href: "/", label: "Home" },
                  { href: "/planos", label: "Planos" },
                  { href: "/cobertura", label: "Cobertura" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm hover:text-orange-500 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                    >
                      <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold text-base text-zinc-200">Contato</h4>
              <ul className="mt-5 space-y-4 text-zinc-400 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-orange-500" size={13} />
                  </span>
                  (88) 98220-4215
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-500" size={14} />
                  </span>
                  WhatsApp disponível
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaEnvelope className="text-orange-500" size={13} />
                  </span>
                  <span className="leading-relaxed">
                    <span className="text-zinc-500 block text-xs mb-0.5">Autoridades e aplicação da lei</span>
                    contato@voonet.com.br
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-red-500" size={14} />
                  </span>
                  Ceará, Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-zinc-800 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
            <span>© 2026 VOONET Telecom — Todos os direitos reservados.</span>
            <span className="text-zinc-700 text-xs">Feito com 🧡 no Ceará</span>
          </div>
        </div>
      </footer>
    </main>
  );
}