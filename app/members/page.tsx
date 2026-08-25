import { pinkFloydMembers } from "@/data/pinkfloyd";

export default function Members() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Header */}
        <section className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            English Rock Band
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Pink Floyd
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-purple-500 to-pink-500" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Pink Floyd were an English rock band formed in London in 1965.
            The band became known for its influential approach to progressive
            and psychedelic rock.
          </p>
        </section>

        {/* Members */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              The Band
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Members
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pinkFloydMembers.map((member) => (
              <article
                key={member.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.06]"
              >
                {/* Person header */}
                <div className="flex items-start gap-5">

                  {/* Avatar */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-lg font-bold text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                    {member.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm text-purple-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Details */}
                <div className="space-y-0">
                  <div className="grid grid-cols-3 gap-4 border-b border-white/5 py-3">
                    <span className="text-sm font-medium text-zinc-500">
                      Born
                    </span>

                    <span className="col-span-2 text-sm text-zinc-300">
                      {member.born}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-b border-white/5 py-3">
                    <span className="text-sm font-medium text-zinc-500">
                      Birthplace
                    </span>

                    <span className="col-span-2 text-sm text-zinc-300">
                      {member.birthplace}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-b border-white/5 py-3">
                    <span className="text-sm font-medium text-zinc-500">
                      Died
                    </span>

                    <span className="col-span-2 text-sm text-zinc-300">
                      {member.died ?? "—"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-3">
                    <span className="text-sm font-medium text-zinc-500">
                      Age
                    </span>

                    <span className="col-span-2 text-sm text-zinc-300">
                      {member.age}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Band Information */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              About
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Pink Floyd
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">

            {/* Origin */}
            <div className="grid gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Origin
              </span>

              <span className="sm:col-span-2 text-zinc-300">
                London, England
              </span>
            </div>

            {/* Founded */}
            <div className="grid gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Founded
              </span>

              <span className="sm:col-span-2 text-zinc-300">
                1965
              </span>
            </div>

            {/* Years active */}
            <div className="grid gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Years Active
              </span>

              <span className="sm:col-span-2 text-zinc-300">
                1965–1995, 2005, 2012–2014
              </span>
            </div>

            {/* Genre */}
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Genre
              </span>

              <span className="sm:col-span-2 text-zinc-300">
                Rock, progressive rock, psychedelic rock
              </span>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}