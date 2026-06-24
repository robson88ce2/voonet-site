"use client";

import { useState } from "react";

export default function Cobertura() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");

  const consultarCobertura = () => {
    const mensagem = `
Olá!

Gostaria de consultar cobertura da VOONET.

Nome: ${nome}
Telefone: ${telefone}
Cidade: ${cidade}
Bairro: ${bairro}
    `;

    const url = `https://wa.me/5588982204215?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-zinc-100">

      <section className="bg-black text-white py-24">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <span className="text-orange-500 font-bold uppercase tracking-widest">
            Cobertura
          </span>

          <h1 className="text-6xl font-bold mt-4">
            Consulte a disponibilidade
          </h1>

          <p className="text-zinc-300 mt-6 text-xl">
            Descubra se a fibra óptica da Voonet já está disponível na sua região.
          </p>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-3xl mx-auto px-8">

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <h2 className="text-3xl font-bold text-center">
              Verificar Cobertura
            </h2>

            <p className="text-center text-gray-500 mt-3">
              Preencha os dados abaixo e fale conosco pelo WhatsApp.
            </p>

            <div className="mt-10 space-y-5">

              <input
                type="text"
                placeholder="Nome"
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

              <input
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-4"
              />

              <input
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-4"
              />

              <button
                onClick={consultarCobertura}
                className="
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  py-4
                  rounded-xl
                  font-bold
                  transition
                "
              >
                Consultar Cobertura
              </button>

            </div>

          </div>

        </div>

      </section>
      {/* CIDADES ATENDIDAS */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center">

      <span className="text-orange-500 font-bold uppercase tracking-widest">
        Área de Cobertura
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Cidades Atendidas
      </h2>

      <p className="text-gray-600 mt-4">
        Levando internet de alta velocidade para toda a região.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-16">

      <div className="bg-zinc-100 rounded-3xl p-8 text-center">
        <h3 className="font-bold text-2xl">
          Itapipoca
        </h3>
      </div>

      

      <div className="bg-zinc-100 rounded-3xl p-8 text-center">
        <h3 className="font-bold text-2xl">
          Trairi
        </h3>
      </div>

      <div className="bg-zinc-100 rounded-3xl p-8 text-center">
        <h3 className="font-bold text-2xl">
          Tururu
        </h3>
      </div>

      

      

    </div>

  </div>

</section>

    </main>
  );
}