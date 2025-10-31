import './App.css'

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 px-6 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

function Hero() {
  return (
    <Section id="hero">
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">Portfolio</span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
          Nile Korobkov
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Frontend Engineer · React, TypeScript, UI Engineering
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded-md px-5 py-2 text-sm font-medium text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:text-white dark:ring-zinc-700 dark:hover:bg-zinc-900">
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-8 md:grid-cols-[160px,1fr] md:gap-12">
        <div className="order-2 md:order-1">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">About</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            I’m a frontend engineer focused on building fast, accessible, and elegant web experiences with React and TypeScript. I care about clean design, maintainable systems, and delightful details.
          </p>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 ring-2 ring-zinc-300 dark:from-zinc-800 dark:to-zinc-700 dark:ring-zinc-700 flex items-center justify-center text-3xl font-semibold text-zinc-600 dark:text-zinc-200">
            NK
          </div>
        </div>
      </div>
    </Section>
  )
}

type Project = {
  title: string
  description: string
  link?: string
  tags?: string[]
}

const projects: Project[] = [
  {
    title: 'Design System Components',
    description: 'Composable, accessible React component library with Tailwind and Radix.',
    tags: ['React', 'Tailwind', 'A11y'],
  },
  {
    title: 'Performance Dashboard',
    description: 'Real-time metrics dashboard with charts, filters, and offline caching.',
    tags: ['TypeScript', 'Vite', 'Charts'],
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI + templates to scaffold elegant personal sites in seconds.',
    tags: ['CLI', 'Node', 'Templates'],
  },
  {
    title: 'Image Optimizer',
    description: 'On-the-fly responsive images with caching and CDN integration.',
    tags: ['Images', 'CDN', 'Performance'],
  },
]

function Projects() {
  return (
    <Section id="projects">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
              <div className="flex gap-2">
                {p.tags?.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
            {p.link && (
              <a href={p.link} className="mt-4 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-white">
                View project
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">Contact</h2>
      <div className="flex flex-wrap items-center gap-4 text-zinc-700 dark:text-zinc-300">
        <a href="mailto:nile.korobkov@example.com" className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:ring-zinc-700 dark:hover:bg-zinc-900">
          <span className="i-heroicons-envelope-20-solid" />
          Email
        </a>
        <a href="https://github.com/yourname" target="_blank" className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:ring-zinc-700 dark:hover:bg-zinc-900">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourname" target="_blank" className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:ring-zinc-700 dark:hover:bg-zinc-900">
          LinkedIn
        </a>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-10 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Nile Korobkov. All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-full bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 md:px-10">
          <a href="#hero" className="text-sm font-semibold">NK</a>
          <div className="flex gap-5 text-sm">
            <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">About</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Projects</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
