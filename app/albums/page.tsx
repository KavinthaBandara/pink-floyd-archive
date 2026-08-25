
import { prisma } from "@/lib/prisma";

export default async function AlbumsPage() {
  const albums = await prisma.album.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      songs: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Header */}
        <section className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Studio Discography
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Pink Floyd
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-purple-500 to-pink-500" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore the albums that shaped Pink Floyd&apos;s legendary
            sound, from their early psychedelic beginnings to their
            most influential progressive rock records.
          </p>
        </section>

        {/* Albums */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Discography
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Albums
            </h2>
          </div>

          {albums.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-md">
              <p className="text-zinc-400">
                No albums found.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {albums.map((album) => (
                <article
                  key={album.id}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.06]"
                >
                  {/* Album Header */}
                  <div className="flex items-start gap-5">
                    {/* Album Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-xl font-bold text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                      {album.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white">
                        {album.title}
                      </h3>

                      {album.year && (
                        <p className="mt-1 text-sm text-purple-400">
                          {album.year}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/10" />

                  {/* Album Details */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Tracklist
                      </p>

                      <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                        {album.songs.length}{" "}
                        {album.songs.length === 1 ? "song" : "songs"}
                      </span>
                    </div>

                    {album.songs.length === 0 ? (
                      <div className="rounded-xl border border-white/5 bg-black/20 px-4 py-5">
                        <p className="text-sm text-zinc-500">
                          No songs found.
                        </p>
                      </div>
                    ) : (
                      <ol className="space-y-2">
                        {album.songs.map((song, index) => (
                          <li
                            key={song.id}
                            className="group/song flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.04]"
                          >
                            {/* Track Number */}
                            <span className="w-6 text-center text-sm font-medium text-zinc-600 group-hover/song:text-purple-400">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Song Title */}
                            <span className="flex-1 text-sm text-zinc-300 transition-colors group-hover/song:text-white">
                              {song.title}
                            </span>

                            {/* Song Year */}
                            {song.year && (
                              <span className="text-xs text-zinc-600">
                                {song.year}
                              </span>
                            )}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Discography Information */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              About
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              The Discography
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">

            {/* Albums */}
            <div className="grid gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Albums
              </span>

              <span className="text-zinc-300 sm:col-span-2">
                {albums.length} albums in the collection
              </span>
            </div>

            {/* Songs */}
            <div className="grid gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Songs
              </span>

              <span className="text-zinc-300 sm:col-span-2">
                {albums.reduce(
                  (total, album) => total + album.songs.length,
                  0
                )}{" "}
                songs
              </span>
            </div>

            {/* Genre */}
            <div className="grid gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Genre
              </span>

              <span className="text-zinc-300 sm:col-span-2">
                Progressive rock, psychedelic rock, art rock
              </span>
            </div>

            {/* Origin */}
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-3">
              <span className="font-medium text-purple-400">
                Origin
              </span>

              <span className="text-zinc-300 sm:col-span-2">
                London, England
              </span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

