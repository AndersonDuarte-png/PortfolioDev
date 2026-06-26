import { useState } from 'react'
import { translations, type Language } from './data/translations'

function App() {
  const [language, setLanguage] = useState<Language>('pt')

  const t = translations[language]

  return (<main className="min-h-screen bg-zinc-950 text-white">
    <button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="fixed right-6 top-6 z-50 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:border-cyan-400 hover:text-cyan-400"
    >
      {t.buttonLabel} </button>


    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="mt-4 text-5xl font-bold tracking-tight">
        {t.hero.name}
      </h1>

      <p className="text-sm text-cyan-400 font-medium">
        {t.hero.role}
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        {t.hero.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://github.com/AndersonDuarte-png"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-zinc-950"
        >
          {t.hero.github}
        </a>

        <a
          href="https://www.linkedin.com/in/anderson-duarte-machado-336a34125/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-700 px-5 py-3 font-medium text-white"
        >
          {t.hero.linkedin}
        </a>
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">
        {t.areas.title}
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {t.areas.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-zinc-800 p-6"
          >
            <h3 className="font-semibold text-cyan-400">
              {card.title}
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">
        {t.experience.title}
      </h2>

      <div className="mt-8 space-y-4">
        {t.experience.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-zinc-800 p-6"
          >
            <h3 className="text-xl font-semibold">
              {card.title}
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">
        {t.projects.title}
      </h2>

      <p className="mt-4 max-w-3xl text-zinc-300 leading-7">
        {t.projects.description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {t.projects.cards.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-zinc-800 p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {project.title}
            </h3>

            <p className="mt-3 text-zinc-300 leading-7">
              {project.description}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-cyan-400 font-medium"
              >
                {t.projects.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  </main>


  )
}

export default App
