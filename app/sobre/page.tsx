"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Cable,
  Eye,
  HeartHandshake,
  MapPin,
  RadioTower,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Wifi,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

/* ── Variantes ── */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

/* ── Dados ── */
const timeline = [
  {
    ano: "2015",
    titulo: "Início da operação",
    texto:
      "A VOONET nasceu com o propósito de levar conexão de qualidade para o interior.",
    Icone: RadioTower,
  },
  {
    ano: "Evolução",
    titulo: "Da rádio para a fibra",
    texto:
      "A rede evoluiu com fibra óptica, ampliando velocidade, estabilidade e segurança.",
    Icone: Cable,
  },
  {
    ano: "Hoje",
    titulo: "Infraestrutura moderna",
    texto:
      "Trabalhamos com equipamentos atuais, Wi-Fi 6 e suporte próximo do cliente.",
    Icone: Wifi,
  },
];

const valores = [
  {
    titulo: "Missão",
    texto:
      "Levar internet de alta qualidade para residências, empresas e comunidades, promovendo inclusão digital e desenvolvimento.",
    Icone: Target,
    cor: "text-orange-500",
    bg: "bg-orange-50",
    badge: "O que fazemos",
  },
  {
    titulo: "Visão",
    texto:
      "Ser referência em conectividade no interior, oferecendo tecnologia de ponta e atendimento de excelência.",
    Icone: Eye,
    cor: "text-blue-500",
    bg: "bg-blue-50",
    badge: "Onde queremos chegar",
  },
  {
    titulo: "Valores",
    texto:
      "Ética, respeito ao cliente, inovação, compromisso, transparência e melhoria contínua.",
    Icone: HeartHandshake,
    cor: "text-emerald-500",
    bg: "bg-emerald-50",
    badge: "Como agimos",
  },
];

const numeros = [
  { valor: "2015", rotulo: "Início da trajetória", Icone: RadioTower },
  { valor: "100%", rotulo: "Foco em fibra óptica", Icone: Cable },
  { valor: "Wi-Fi 6", rotulo: "Tecnologia atual", Icone: Wifi },
  { valor: "24h", rotulo: "Suporte ao cliente", Icone: ShieldCheck },
];

const diferenciais = [
  {
    Icone: ShieldCheck,
    titulo: "Estabilidade",
    texto: "Rede pensada para manter sua rotina conectada.",
    cor: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    Icone: Users,
    titulo: "Atendimento",
    texto: "Equipe próxima para resolver com agilidade.",
    cor: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    Icone: Rocket,
    titulo: "Evolução",
    texto: "Investimento contínuo em tecnologia e infraestrutura.",
    cor: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    Icone: Wifi,
    titulo: "Wi-Fi 6",
    texto: "Mais desempenho para todos os dispositivos da casa.",
    cor: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const depoimentos = [
  {
    nome: "Maria Helena",
    cidade: "Trairi - CE",
    texto:
      "A internet ficou muito mais estável depois que colocamos a VOONET. O atendimento também é excelente.",
  },
  {
    nome: "Carlos Eduardo",
    cidade: "Interior do Ceará",
    texto:
      "Ótima velocidade e suporte rápido quando precisamos. Recomendo sem pensar duas vezes.",
  },
  {
    nome: "Fernanda Lima",
    cidade: "Região atendida",
    texto:
      "Passei a trabalhar de casa com muito mais tranquilidade. A conexão não me deixa na mão.",
  },
];

/* ════════════════════════════════════════ */
export default function Sobre() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* ══════════ HERO ══════════ */}
      <section className="bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <MapPin size={14} />
              Trairi — Ceará
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold mt-7 leading-[1.08] tracking-tight"
            >
              Conectando pessoas{" "}
              <span className="relative inline-block">
                <span className="text-orange-500">com internet</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500/30 rounded-full" />
              </span>{" "}
              de verdade
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-zinc-300 text-lg mt-7 max-w-xl leading-relaxed"
            >
              Desde 2015, a VOONET Telecom leva tecnologia, estabilidade e
              atendimento próximo para famílias, empresas e comunidades do
              interior.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/planos"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Conhecer planos <ArrowRight size={16} />
              </Link>
              <Link
                href="/cobertura"
                className="inline-flex items-center gap-2 border border-zinc-600 hover:border-orange-500 hover:text-orange-400 px-8 py-4 rounded-2xl font-semibold transition-all"
              >
                Ver cobertura
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-3xl" />
            <Image
              src="/images/hero-fibra.png"
              alt="Fibra óptica VOONET"
              width={1718}
              height={916}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="relative w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            className="w-full fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ══════════ NÚMEROS ══════════ */}
      <section className="py-20 bg-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {numeros.map(({ valor, rotulo, Icone }) => (
            <motion.div
              key={rotulo}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white border border-zinc-100 hover:border-orange-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-full h-1 bg-orange-500/20 group-hover:bg-orange-500 rounded-full mb-6 transition-colors duration-300" />
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                <Icone className="text-orange-500" size={24} />
              </div>
              <div className="text-4xl font-black text-orange-500">{valor}</div>
              <p className="text-gray-500 mt-2 text-sm">{rotulo}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ QUEM SOMOS / TIMELINE ══════════ */}
      <section className="bg-zinc-50 py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="lg:sticky lg:top-12"
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Quem somos
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mt-4 leading-tight">
              Uma empresa local, feita para atender de perto
            </h2>
            <p className="text-gray-500 mt-6 leading-relaxed text-lg">
              A VOONET Telecom nasceu para aproximar pessoas da tecnologia.
              Nosso trabalho é entregar uma conexão estável, rápida e
              confiável, com atendimento humano e compromisso com a região onde
              atuamos.
            </p>
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 mt-8 text-orange-500 font-semibold hover:gap-4 transition-all"
            >
              Ver planos <FaArrowRight size={12} />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative"
          >
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-zinc-200" />

            <div className="space-y-6">
              {timeline.map(({ ano, titulo, texto, Icone }) => (
                <motion.div
                  key={titulo}
                  variants={fadeUp}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="relative flex gap-6 bg-white border border-zinc-100 hover:border-orange-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <Icone size={26} className="text-white" />
                  </div>
                  <div>
                    <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider">
                      {ano}
                    </span>
                    <h3 className="text-xl font-bold text-black mt-1">
                      {titulo}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-2 text-sm">
                      {texto}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ DIFERENCIAIS ══════════ */}
      <section className="bg-zinc-950 text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Nosso jeito de trabalhar
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
              Tecnologia forte com atendimento próximo
            </h2>
            <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
              Mais do que fornecer internet, nossa missão é conectar pessoas,
              fortalecer empresas e contribuir para o desenvolvimento das
              cidades onde atuamos.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {diferenciais.map(({ Icone, titulo, texto, cor, bg }) => (
              <motion.div
                key={titulo}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-3xl p-7 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-5`}
                >
                  <Icone size={24} className={cor} />
                </div>
                <h3 className="text-lg font-bold">{titulo}</h3>
                <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                  {texto}
                </p>
                <div
                  className={`mt-5 h-0.5 w-8 group-hover:w-full rounded-full transition-all duration-500 ${bg}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ PRINCÍPIOS ══════════ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Princípios
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mt-4">
              O que guia a VOONET
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Nossos valores definem cada decisão que tomamos.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {valores.map(({ titulo, texto, Icone, cor, bg, badge }) => (
              <motion.div
                key={titulo}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white border border-zinc-100 hover:border-orange-200 rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all flex flex-col"
              >
                <span
                  className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full ${bg} ${cor} mb-6`}
                >
                  {badge}
                </span>

                <div
                  className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6`}
                >
                  <Icone className={cor} size={30} />
                </div>

                <h3 className="text-2xl font-extrabold text-black">{titulo}</h3>
                <hr className="my-5 border-zinc-100" />
                <p className="text-gray-500 leading-relaxed text-sm flex-1">
                  {texto}
                </p>

                <div
                  className={`mt-6 h-1 w-10 rounded-full ${bg.replace(
                    "-50",
                    "-400"
                  )} group-hover:w-full transition-all duration-500`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ DEPOIMENTOS ══════════ */}
      <section className="bg-zinc-50 py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Depoimentos
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mt-4">
              O que os clientes dizem
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Experiência real de quem já usa a VOONET no dia a dia.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {depoimentos.map((item) => (
              <motion.div
                key={item.nome}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
              >
                <Quote className="text-orange-500/20 absolute right-6 top-6" size={42} />
                <div className="flex items-center gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  “{item.texto}”
                </p>

                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <div className="font-bold text-black">{item.nome}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.cidade}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="relative bg-orange-500 text-white py-24 overflow-hidden">
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
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
            <FaWhatsapp size={16} />
            Atendimento direto no WhatsApp
          </span>

          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Pronto para navegar
            <br />
            <span className="text-orange-100">sem limites?</span>
          </h2>

          <p className="mt-6 text-lg text-orange-100 max-w-xl mx-auto">
            Escolha seu plano e fale com nossa equipe agora mesmo. Instalação
            rápida e sem burocracia.
          </p>

          <a
            href="https://wa.me/5588982204215?text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20da%20VOONET."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-white text-orange-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <FaWhatsapp size={22} /> Falar no WhatsApp
          </a>
        </motion.div>
      </section>
    </main>
  );
}