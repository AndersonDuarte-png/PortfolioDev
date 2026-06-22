function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">


        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Anderson Duarte
        </h1>
        <p className="text-sm text-cyan-400 font-medium">
          Desenvolvedor de Software
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Olá, seja bem-vindo ao meu portfólio. Sou desenvolvedor com foco em
          soluções corporativas, atuando com Pega Systems, APIs, banco de dados,
          automação de processos e IA aplicada ao desenvolvimento.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/AndersonDuarte-png"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-zinc-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anderson-duarte-machado-336a34125/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-3 font-medium text-white"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">
          Áreas de atuação
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold text-cyan-400">
              Pega Systems
            </h3>
            <p className="mt-3 text-zinc-300 leading-7">
              Desenvolvimento low-code, workflows, regras de negócio,
              integrações, correções e melhorias evolutivas em aplicações corporativas.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold text-cyan-400">
              APIs e integrações
            </h3>
            <p className="mt-3 text-zinc-300 leading-7">
              Apoio na criação, manutenção e consumo de APIs, conectando sistemas
              e organizando fluxos de dados entre aplicações.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold text-cyan-400">
              Banco de dados
            </h3>
            <p className="mt-3 text-zinc-300 leading-7">
              Atuação com consultas, análise, organização e validação de dados
              utilizados por sistemas corporativos.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold text-cyan-400">
              Automação e IA
            </h3>
            <p className="mt-3 text-zinc-300 leading-7">
              Uso de Python, automações e engenharia de prompt para apoiar análise,
              documentação, produtividade e resolução de problemas técnicos.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">
          Experiência profissional
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">
                Capgemini
              </h3>
              <span className="text-sm text-zinc-400">
                Dez/2025 - Atual
              </span>
            </div>

            <p className="mt-2 text-cyan-400 font-medium">
              Desenvolvedor Sênior
            </p>

            <p className="mt-3 text-zinc-300 leading-7">
              Atuação no desenvolvimento e manutenção de soluções corporativas,
              com foco em Pega Systems, workflows, regras de negócio, integrações
              e melhorias evolutivas.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">
                BRQ
              </h3>
              <span className="text-sm text-zinc-400">
                Set/2024 - Dez/2025
              </span>
            </div>

            <p className="mt-2 text-cyan-400 font-medium">
              Desenvolvedor Júnior
            </p>

            <p className="mt-3 text-zinc-300 leading-7">
              Desenvolvimento, sustentação e evolução de aplicações, atuando com
              correções, melhorias, integrações e apoio à automação de processos.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">
                EY
              </h3>
              <span className="text-sm text-zinc-400">
                Jan/2023 - Set/2024
              </span>
            </div>

            <p className="mt-2 text-cyan-400 font-medium">
              Trainee FSO Consulting - SDC
            </p>

            <p className="mt-3 text-zinc-300 leading-7">
              Participação em projetos de tecnologia e consultoria, com apoio em
              análise, documentação, processos e desenvolvimento de soluções.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">
          Projetos
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-300 leading-7">
          Projetos pessoais e estudos práticos com foco em backend, automação,
          integração com IA e soluções para produtividade.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              DevRadar
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              Projeto que utiliza a API do Gemini para consultar e analisar
              estatísticas de desenvolvimento, explorando IA generativa aplicada
              à análise técnica.
            </p>

            <a
              href="https://github.com/AndersonDuarte-png/IA/tree/main/DevRadar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-cyan-400 font-medium"
            >
              Ver no GitHub
            </a>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Tradutor de Tela
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              Aplicação em Python criada para auxiliar na tradução de conteúdos
              exibidos na tela, com foco em produtividade e automação.
            </p>

            <a
              href="https://github.com/AndersonDuarte-png/Tradutor-de-tela"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-cyan-400 font-medium"
            >
              Ver no GitHub
            </a>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Loan Simulation API
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              API para simulação de empréstimos, com cálculo de parcelas,
              validações, regras de negócio e estrutura backend com Python.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Projetos corporativos
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              Experiência em aplicações empresariais com workflows, regras de
              negócio, integrações, APIs, correções e melhorias evolutivas.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
