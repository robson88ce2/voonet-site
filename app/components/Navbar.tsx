"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-zinc-800">
      <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Voonet"
            width={220}
            height={70}
            priority
          />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-white">

          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="/planos" className="hover:text-orange-500 transition">
            Planos
          </a>

          <a href="/cobertura" className="hover:text-orange-500 transition">
            Cobertura
          </a>

          <a href="/contato" className="hover:text-orange-500 transition">
            Contato
          </a>

          <a
            href="https://voonettelecom.gesprovcloud.com.br/central"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-orange-500
              hover:bg-orange-600
              px-5
              py-2
              rounded-xl
              font-semibold
              transition
            "
          >
            Central do Assinante
          </a>

        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">

          <nav className="flex flex-col p-6 text-white gap-5">

            <a
              href="/"
              className="hover:text-orange-500 transition"
            >
              Home
            </a>

            <a
              href="/planos"
              className="hover:text-orange-500 transition"
            >
              Planos
            </a>

            <a
              href="/cobertura"
              className="hover:text-orange-500 transition"
            >
              Cobertura
            </a>

            <a
              href="/contato"
              className="hover:text-orange-500 transition"
            >
              Contato
            </a>

            <a
              href="https://voonettelecom.gesprovcloud.com.br/central"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-orange-500
                hover:bg-orange-600
                text-center
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Central do Assinante
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}