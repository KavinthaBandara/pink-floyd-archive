/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `Album` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Album" DROP COLUMN "releaseDate",
ADD COLUMN     "year" INTEGER;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "year" INTEGER;
