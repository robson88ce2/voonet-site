export default function Planos() {
  const planos = [
    {
      nome: "500 MB",
      preco: "79,90",
      descricao: "Ideal para uso diário",
      destaque: false,
    },
    {
      nome: "700 MB",
      preco: "99,90",
      descricao: "Mais contratado",
      destaque: true,
    },
    {
      nome: "1000 MB",
      preco: "134,90",
      descricao: "Alta performance",
      destaque: false,
    },
    {
      nome: "1500 MB",
      preco: "150,00",
      descricao: "Máxima velocidade",
      destaque: false,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-widest">
            PLANOS RESIDENCIAIS
          </span>

          <h1 className="text-5xl font-bold mt-4 text-black">
            Escolha o plano ideal para você
          </h1>

          <p className="text-gray-600 mt-4">
            Internet fibra óptica com ultravelocidade e suporte especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {planos.map((p, i) => (
            <div
              key={i}
              className={`
                rounded-3xl
                shadow-xl
                p-8
                text-center
                transition
                hover:-translate-y-2
                hover:shadow-2xl
                ${
                  p.destaque
                    ? "bg-orange-500 text-white border-4 border-orange-300"
                    : "bg-white"
                }
              `}
            >
              {p.destaque && (
                <div className="mb-4">
                  <span className="bg-white text-orange-500 text-xs font-bold px-4 py-2 rounded-full">
                    MAIS CONTRATADO
                  </span>
                </div>
              )}

              <h2
                className={`text-5xl font-bold ${
                  p.destaque ? "text-white" : "text-orange-500"
                }`}
              >
                {p.nome}
              </h2>

              <p
                className={`mt-4 ${
                  p.destaque ? "text-orange-100" : "text-gray-500"
                }`}
              >
                {p.descricao}
              </p>

              <div className="mt-8">
                <span
                  className={`text-2xl ${
                    p.destaque ? "text-white" : "text-orange-500"
                  }`}
                >
                  R$
                </span>

                <span
                  className={`text-6xl font-bold ${
                    p.destaque ? "text-white" : "text-orange-500"
                  }`}
                >
                  {p.preco}
                </span>
              </div>

              <ul
                className={`mt-8 text-left space-y-2 ${
                  p.destaque ? "text-orange-100" : "text-gray-700"
                }`}
              >
                <li>✓ Fibra óptica</li>
                <li>✓ Wi-Fi grátis</li>
                <li>✓ Suporte técnico</li>
                <li>✓ Instalação rápida</li>
              </ul>

              <a
                href={`https://wa.me/5588982204215?text=Olá! Quero contratar o plano ${encodeURIComponent(
                  p.nome
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block
                  mt-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  ${
                    p.destaque
                      ? "bg-white text-orange-500 hover:bg-zinc-100"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }
                `}
              >
                Contratar Agora
              </a>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}