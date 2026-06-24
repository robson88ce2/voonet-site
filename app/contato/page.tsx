"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarWhatsapp = () => {
    const texto = `
Olá, VOONET!

Nome: ${nome}
Telefone: ${telefone}

Mensagem:
${mensagem}
`;

    const url = `https://wa.me/5588982204215?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-zinc-100">

      {/* HERO */}
      <section className="bg-black text-white py-24">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <span className="text-orange-500 font-bold uppercase tracking-widest">
            Contato
          </span>

          <h1 className="text-6xl font-bold mt-4">
            Fale com a VOONET
          </h1>

          <p className="mt-6 text-zinc-300 text-xl">
            Estamos prontos para atender você.
          </p>

        </div>

      </section>

      {/* CONTEÚDO */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* INFORMAÇÕES */}
            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold">
                Informações
              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-orange-500 text-xl" />
                  <span>(88) 98220-4215</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <span>WhatsApp Comercial</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-orange-500 text-xl" />
                  <span>contato@voonet.com.br</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-red-500 text-xl" />
                  <span>Itapipoca - Ceará</span>
                </div>

              </div>

              <div className="flex gap-5 mt-10">

                <a
                  href="https://wa.me/5588982204215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-3xl hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://instagram.com/voonet_telecom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-3xl hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="text-blue-500 text-3xl hover:scale-110 transition"
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

            {/* FORMULÁRIO */}
            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold">
                Envie uma mensagem
              </h2>

              <div className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-4"
                />

                <input
                  type="text"
                  placeholder="WhatsApp"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-4"
                />

                <textarea
                  placeholder="Mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-4"
                />

                <button
                  onClick={enviarWhatsapp}
                  className="
                    w-full
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    py-4
                    rounded-xl
                    font-bold
                    transition-all
                    duration-300
                  "
                >
                  Enviar pelo WhatsApp
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAPA */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <iframe
              src="https://maps.google.com/maps?q=Itapipoca&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              loading="lazy"
            />

          </div>

        </div>

      </section>

    </main>
  );
}