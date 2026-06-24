"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-zinc-800">

      <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between">

        <Image
          src="/images/logo.png"
          alt="Voonet"
          width={220}
          height={70}
          priority
        />

        {/* Desktop */}
        <nav className="hidden md:flex gap-10 text-white">

          <a href="/" className="hover:text-orange-500">
            Home
          </a>

          <a href="/planos" className="hover:text-orange-500">
            Planos
          </a>

          <a href="/cobertura" className="hover:text-orange-500">
            Cobertura
          </a>

          <a href="/contato" className="hover:text-orange-500">
            Contato
          </a>

        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">

          <nav className="flex flex-col p-6 text-white gap-5">

            <a href="/">Home</a>

            <a href="/planos">Planos</a>

            <a href="/cobertura">Cobertura</a>

            <a href="#">Contato</a>

          </nav>

        </div>
      )}

    </header>
  );
}