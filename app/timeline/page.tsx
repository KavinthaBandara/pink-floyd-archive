

import Timeline from "@/app/components/timelineShow"

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="mx-auto max-w-4xl px-6 pt-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-purple-400">
          Pink Floyd
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          A Journey Through Time
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          From their formation in London to their final studio album,
          explore the story of Pink Floyd.
        </p>
      </section>

      <Timeline />
    </main>
  )
}