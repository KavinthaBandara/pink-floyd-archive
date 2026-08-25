//import Navbara from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-16 text-center">

      <head>

      </head>

  <body>

    <div>
          <h1 className="text-4xl font-bold text-black dark:text-white sm:text-6xl">
            Pink Floyd
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
            Welcome to the Pink Floyd fan page! Explore the music, history,
            and legacy of one of the most iconic rock bands of all time.
          </p>
        </div>

        <div>
          <Image
            src="/images/pinkfloyd.jpg"
            alt="Pink Floyd"
            loading="eager"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
  </body>
  
  <footer>
          &copy; {new Date().getFullYear()} Pink Floyd Fan Page. All rights reserved.
  </footer>

      </main>
    </div>


  );
}


