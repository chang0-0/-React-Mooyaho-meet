/*
  Warnings:

  - Added the required column `code` to the `Meet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "chennelId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    CONSTRAINT "Meet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Meet" ("chennelId", "id", "userId") SELECT "chennelId", "id", "userId" FROM "Meet";
DROP TABLE "Meet";
ALTER TABLE "new_Meet" RENAME TO "Meet";
CREATE INDEX "Meet_code_idx" ON "Meet"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
