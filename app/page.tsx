"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { Zap, Headset, ShieldCheck, Wifi } from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-black overflow-hidden text-white">

        <div className="max-w-[1600px] mx-auto px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* TEXTO */}
            <div>

              <span
                className="
                inline-block
                bg-orange-500/20
                text-orange-400
                px-4
                py-2
                rounded-full
                text-sm
              "
              >
                🚀 Fibra Óptica de Alta Performance
              </span>

              <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">

                Internet rápida
                <br />

                para sua

                <span className="text-orange-500">
                  {" "}casa
                </span>

                <br />

                e

                <span className="text-orange-500">
                  {" "}empresa
                </span>

              </h1>

              <p className="mt-8 text-xl text-zinc-300 max-w-xl">
                Conexão estável, atendimento humanizado e planos que cabem no seu bolso.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="/planos"
                  className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
                >
                  Ver Planos
                </a>

                <a
                  href="/cobertura"
                  className="
                  border
                  border-zinc-500
                  hover:border-orange-500
                  px-8
                  py-4
                  rounded-xl
                  transition
                "
                >
                  Consultar Cobertura
                </a>

              </div>

            </div>

            {/* IMAGEM */}
            <div className="flex justify-end">

              <Image
                src="/images/hero-fibra.png"
                alt="Fibra óptica"
                width={1800}
                height={1000}
                priority
                className="
                  w-full
                  max-w-none
                  scale-110
                  object-contain
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
<section className="bg-white py-12">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-4 gap-8">

      {/* VELOCIDADE */}
      <div
        className="
          bg-white
          shadow-xl
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          rounded-3xl
          p-8
        "
      >
        <Zap
          size={48}
          className="text-orange-500"
        />

        <h3 className="font-bold text-2xl mt-5 text-black">
          Ultra Velocidade
        </h3>

        <p className="mt-3 text-gray-600">
          Navegue, jogue e assista sem travamentos.
        </p>

      </div>

      {/* SUPORTE */}
      <div
        className="
          bg-white
          shadow-xl
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          rounded-3xl
          p-8
        "
      >
        <Headset
          size={48}
          className="text-orange-500"
        />

        <h3 className="font-bold text-2xl mt-5 text-black">
          Suporte 24h
        </h3>

        <p className="mt-3 text-gray-600">
          Atendimento rápido e eficiente sempre que precisar.
        </p>

      </div>

      {/* ESTABILIDADE */}
      <div
        className="
          bg-white
          shadow-xl
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          rounded-3xl
          p-8
        "
      >
        <ShieldCheck
          size={48}
          className="text-orange-500"
        />

        <h3 className="font-bold text-2xl mt-5 text-black">
          Conexão Estável
        </h3>

        <p className="mt-3 text-gray-600">
          Fibra óptica de verdade para máxima estabilidade.
        </p>

      </div>

      {/* WIFI */}
      <div
        className="
          bg-white
          shadow-xl
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          rounded-3xl
          p-8
        "
      >
        <Wifi
          size={48}
          className="text-orange-500"
        />

        <h3 className="font-bold text-2xl mt-5 text-black">
          Wi-Fi Grátis
        </h3>

        <p className="mt-3 text-gray-600">
          Equipamentos modernos sem custo adicional.
        </p>

      </div>

    </div>

  </div>

</section>
     {/* PLANOS */}
<section className="bg-zinc-100 py-24">

  <div className="max-w-5xl mx-auto px-8">

    <div className="text-center mb-16">

      <span className="text-orange-500 font-bold uppercase tracking-widest">
        Planos Residenciais
      </span>

      <h2 className="text-5xl font-bold text-black mt-4">
        Escolha o plano ideal
      </h2>

      <p className="text-gray-600 mt-4">
        Fibra óptica de alta velocidade para toda a família.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* 500 MB */}
      <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-10
            hover:-translate-y-3
            hover:shadow-2xl
            transition-all
            duration-300
          "
        >
        <h3 className="text-4xl font-bold text-orange-500">
          500 MB
        </h3>

        <p className="text-gray-500 mt-2">
          Ideal para uso diário
        </p>

        <div className="mt-6">
          <span className="text-2xl text-orange-500">R$ </span>
          <span className="text-6xl font-bold text-orange-500">
            79,90
          </span>
        </div>
        <ul className="mt-6 space-y-2 text-orange-50">
            <li>✓ Fibra Óptica</li>
            <li>✓ Wi-Fi Grátis</li>
            <li>✓ Suporte 24h</li>
            <li>✓ Instalação Rápida</li>
          </ul>
                  <a
          href="https://wa.me/5588982204215"
          className="
block
mt-8
bg-orange-500
hover:bg-orange-600
hover:scale-105
text-white
text-center
py-4
rounded-xl
font-semibold
transition-all
duration-300
"
        >
          Contratar
        </a>

      </div>

      {/* 700 MB */}
      <div className="bg-orange-500 rounded-3xl shadow-2xl p-10 text-white relative border-4 border-orange-300">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-500 px-5 py-2 rounded-full text-xs font-bold">
          MAIS CONTRATADO
        </div>

        <h3 className="text-4xl font-bold">
          700 MB
        </h3>

        <p className="mt-2 text-orange-100">
          Melhor custo-benefício
        </p>

        <div className="mt-6">
          <span className="text-2xl">R$ </span>
          <span className="text-6xl font-bold">
            99,90
          </span>
        </div>
        <ul className="mt-6 space-y-2 text-white">
            <li>✓ Fibra Óptica</li>
            <li>✓ Wi-Fi Grátis</li>
            <li>✓ Suporte 24h</li>
            <li>✓ Instalação Rápida</li>
          </ul>
        <a
          href="https://wa.me/5588982204215"
          className="block mt-8 bg-white text-orange-500 text-center py-4 rounded-xl font-semibold"
        >
          Contratar
        </a>

      </div>

      {/* 1000 MB */}
      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300
        "
      >

        <h3 className="text-4xl font-bold text-orange-500">
          1000 MB
        </h3>

        <p className="text-gray-500 mt-2">
          Alta performance
        </p>

        <div className="mt-6">
          <span className="text-2xl text-orange-500">R$ </span>
          <span className="text-6xl font-bold text-orange-500">
            134,90
          </span>
        </div>
        <ul className="mt-6 space-y-2 text-white">
          <li>✓ Fibra Óptica</li>
          <li>✓ Wi-Fi Grátis</li>
          <li>✓ Suporte 24h</li>
          <li>✓ Instalação Rápida</li>
        </ul>
        <a
          href="https://wa.me/5588982204215"
          className="
block
mt-8
bg-orange-500
hover:bg-orange-600
hover:scale-105
text-white
text-center
py-4
rounded-xl
font-semibold
transition-all
duration-300
"
        >
          Contratar
        </a>

      </div>

      {/* 1500 MB */}
      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300
        "
      >

        <h3 className="text-4xl font-bold text-orange-500">
          1500 MB
        </h3>

        <p className="text-gray-500 mt-2">
          Máxima velocidade
        </p>

        <div className="mt-6">
          <span className="text-2xl text-orange-500">R$ </span>
          <span className="text-6xl font-bold text-orange-500">
            150,00
          </span>
        </div>
          <ul className="mt-6 space-y-2 text-white">
            <li>✓ Fibra Óptica</li>
            <li>✓ Wi-Fi Grátis</li>
            <li>✓ Suporte 24h</li>
            <li>✓ Instalação Rápida</li>
          </ul>
        <a
          href="https://wa.me/5588982204215"
          className="
block
mt-8
bg-orange-500
hover:bg-orange-600
hover:scale-105
text-white
text-center
py-4
rounded-xl
font-semibold
transition-all
duration-300
"
        >
          Contratar
        </a>

      </div>

  </div>
</div>
</section>
{/* SOBRE A VOONET */}
<section className="bg-black text-white py-24">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <span className="text-orange-500 font-bold uppercase tracking-widest">
          Sobre a Voonet
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Conectando pessoas com tecnologia de ponta
        </h2>

        <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
          Levamos internet de alta velocidade para residências e empresas,
          oferecendo estabilidade, atendimento humanizado e suporte técnico
          especializado.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-3xl p-8">
          <div className="text-orange-500 text-4xl font-bold">
            100%
          </div>
          <p className="mt-2">
            Fibra Óptica
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8">
          <div className="text-orange-500 text-4xl font-bold">
            24h
          </div>
          <p className="mt-2">
            Suporte Técnico
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8">
          <div className="text-orange-500 text-4xl font-bold">
            +5000
          </div>
          <p className="mt-2">
            Clientes
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8">
          <div className="text-orange-500 text-4xl font-bold">
            99%
          </div>
          <p className="mt-2">
            Disponibilidade
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* ESTATÍSTICAS */}
<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-6xl font-bold text-orange-500">
          100%
        </h3>

        <p className="mt-3 text-gray-600">
          Fibra Óptica
        </p>
      </div>

      <div>
        <h3 className="text-6xl font-bold text-orange-500">
          24h
        </h3>

        <p className="mt-3 text-gray-600">
          Suporte Técnico
        </p>
      </div>

      <div>
        <h3 className="text-6xl font-bold text-orange-500">
          99%
        </h3>

        <p className="mt-3 text-gray-600">
          Estabilidade
        </p>
      </div>

      <div>
        <h3 className="text-6xl font-bold text-orange-500">
          5★
        </h3>

        <p className="mt-3 text-gray-600">
          Atendimento
        </p>
      </div>

    </div>

  </div>

</section>
{/* CHAMADA FINAL */}
<section className="bg-orange-500 text-white py-20">

  <div className="max-w-5xl mx-auto px-8 text-center">

    <h2 className="text-5xl font-bold">
      Pronto para navegar sem limites?
    </h2>

    <p className="mt-6 text-xl">
      Escolha seu plano e fale com nossa equipe agora mesmo.
    </p>

    <a
      href="https://wa.me/5588982204215"
      target="_blank"
      className="
        inline-block
        mt-10
        bg-white
        text-orange-500
        px-10
        py-5
        rounded-2xl
        font-bold
        text-lg
      "
    >
      Falar no WhatsApp
    </a>

  </div>

</section>
{/* RODAPÉ */}
<footer className="bg-zinc-950 text-white border-t border-zinc-800">

  <div className="max-w-7xl mx-auto px-8 py-16">

    <div className="grid md:grid-cols-3 gap-10">

      {/* EMPRESA */}
      <div>

        <h3 className="text-3xl font-bold text-orange-500">
          VOONET
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          Internet fibra óptica para residências e empresas,
          com velocidade, estabilidade e atendimento diferenciado.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="https://wa.me/5588982204215"
            target="_blank"
            className="text-green-500 text-2xl hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/voonet_telecom"
            className="text-pink-500 text-2xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="text-blue-500 text-2xl hover:scale-110 transition"
          >
            <FaFacebook />
          </a>

        </div>

      </div>

      {/* LINKS */}
      <div>

        <h4 className="font-bold text-xl">
          Navegação
        </h4>

        <ul className="mt-4 space-y-3 text-zinc-400">

          <li>
            <a href="/" className="hover:text-orange-500">
              Home
            </a>
          </li>

          <li>
            <a href="/planos" className="hover:text-orange-500">
              Planos
            </a>
          </li>

          <li>
            <a href="/cobertura" className="hover:text-orange-500">
              Cobertura
            </a>
          </li>

        </ul>

      </div>

      {/* CONTATO */}
      <div>

        <h4 className="font-bold text-xl">
          Contato
        </h4>

        <ul className="mt-4 space-y-4 text-zinc-400">

          <li className="flex items-center gap-3">
            <FaPhoneAlt className="text-orange-500" />
            (88) 98220-4215
          </li>

          <li className="flex items-center gap-3">
            <FaWhatsapp className="text-green-500" />
            WhatsApp
          </li>

          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            Ceará
          </li>

        </ul>

      </div>

    </div>

    <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-zinc-500">
      © 2026 VOONET Telecom - Todos os direitos reservados.
    </div>

  </div>

</footer>


    </main>
  );
}