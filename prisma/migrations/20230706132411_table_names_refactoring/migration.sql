/*
  Warnings:

  - You are about to drop the `Login` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Moradores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Servidores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServidoresTelefones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Telefone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Login" DROP CONSTRAINT "Login_moradorId_fkey";

-- DropForeignKey
ALTER TABLE "Servidores" DROP CONSTRAINT "Servidores_moradorId_fkey";

-- DropForeignKey
ALTER TABLE "ServidoresTelefones" DROP CONSTRAINT "ServidoresTelefones_servidorId_fkey";

-- DropForeignKey
ALTER TABLE "ServidoresTelefones" DROP CONSTRAINT "ServidoresTelefones_telefoneId_fkey";

-- DropTable
DROP TABLE "Login";

-- DropTable
DROP TABLE "Moradores";

-- DropTable
DROP TABLE "Servidores";

-- DropTable
DROP TABLE "ServidoresTelefones";

-- DropTable
DROP TABLE "Telefone";

-- CreateTable
CREATE TABLE "moradores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ap" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "moradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servidores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "servico" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "servidores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servidoresTelefones" (
    "servidorId" INTEGER NOT NULL,
    "telefoneId" INTEGER NOT NULL,

    CONSTRAINT "servidoresTelefones_pkey" PRIMARY KEY ("servidorId","telefoneId")
);

-- CreateTable
CREATE TABLE "telefone" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "telefone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "moradores_email_key" ON "moradores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "login_token_key" ON "login"("token");

-- CreateIndex
CREATE UNIQUE INDEX "login_moradorId_key" ON "login"("moradorId");

-- CreateIndex
CREATE UNIQUE INDEX "servidores_email_key" ON "servidores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "telefone_telefone_key" ON "telefone"("telefone");

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "moradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servidores" ADD CONSTRAINT "servidores_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "moradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servidoresTelefones" ADD CONSTRAINT "servidoresTelefones_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "servidores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servidoresTelefones" ADD CONSTRAINT "servidoresTelefones_telefoneId_fkey" FOREIGN KEY ("telefoneId") REFERENCES "telefone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
