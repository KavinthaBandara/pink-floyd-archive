

import Image from "next/image"
import { timeline } from "@/data/timeline"

export default function Timeline() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      
      {/* Center line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500 to-transparent md:block" />

      <div className="space-y-16">
        {timeline.map((event, index) => {
          const isLeft = index % 2 === 0

          return (
            <div
              key={`${event.year}-${event.title}`}
              className="relative grid md:grid-cols-2"
            >
              {/* Dot */}
              <div className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-400 bg-black shadow-[0_0_20px_#a855f7] md:block" />

              {/* Left */}
              <div
                className={
                  isLeft
                    ? "md:pr-16"
                    : "md:col-start-2 md:pl-16"
                }
              >
                <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.06]">
                  
                  <span className="text-sm font-bold tracking-[0.25em] text-purple-400">
                    {event.year}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {event.title}
                  </h2>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {event.description}
                  </p>

                  {event.image && (
                    <div className="relative mt-6 aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </article>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}