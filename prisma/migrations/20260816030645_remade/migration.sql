/*
  Warnings:

  - The primary key for the `Album` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `artist` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `coverurl` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `releaseYear` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `tittle` on the `Album` table. All the data in the column will be lost.
  - The `id` column on the `Album` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[title]` on the table `Album` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Album" DROP CONSTRAINT "Album_pkey",
DROP COLUMN "artist",
DROP COLUMN "coverurl",
DROP COLUMN "description",
DROP COLUMN "releaseYear",
DROP COLUMN "tittle",
ADD COLUMN     "releaseDate" TIMESTAMP(3),
ADD COLUMN     "title" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Album_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "lyrics" TEXT,
    "albumId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Song_albumId_title_key" ON "Song"("albumId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Album_title_key" ON "Album"("title");

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;
