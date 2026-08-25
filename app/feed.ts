//import {pink_floyd_lyrics} from "../data/";

//import { PrismaClient } from "../app/generated/prisma/client";


//const prisma = new PrismaClient({});

//async function fetchFeed() {
  //  return await prisma.album.create({
   //     data: 
   // })
//} 

import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
//import { PrismaClient } from "./generated/prisma/client";
import { prisma } from "@/lib/prisma";
import "dotenv/config";



type CsvRow = {
  album: string;
  song_title: string;
  year: string;
  lyrics: string;
};

async function main() {
  // 1. Read the actual CSV file
  const filePath = path.join(process.cwd(), "data", "pink_floyd_lyrics.csv");

  const csv = fs.readFileSync(filePath, "utf-8");

  // 2. Convert CSV → JavaScript objects
  const rows = parse(csv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
  }) as CsvRow[];

  console.log(`Found ${rows.length} songs`);

  // 3. Process every CSV row
  for (const row of rows) {
    // 4. Find/create the album
    const album = await prisma.album.upsert({
      where: {
        title: row.album,
      },
      update: {
        year: new Date(row.year).getFullYear(),
      },
      create: {
        title: row.album,
        year: new Date(row.year).getFullYear(),
      },
    });

    // 5. Insert/update the song
    await prisma.song.upsert({
      where: {
        albumId_title: {
          albumId: album.id,
          title: row.song_title,
        },
      },
      update: {
        lyrics: row.lyrics,
      },
      create: {
        title: row.song_title,
        lyrics: row.lyrics,
        albumId: album.id,
      },
    });

    console.log(`Imported: ${row.album} → ${row.song_title}`);
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });


  console.log("DATABASE_URL:", process.env.DATABASE_URL);