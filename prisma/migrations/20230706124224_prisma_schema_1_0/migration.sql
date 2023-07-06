-- CreateTable
CREATE TABLE "Moradores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ap" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Moradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servidores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "servico" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "Servidores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServidoresTelefones" (
    "servidorId" INTEGER NOT NULL,
    "telefoneId" INTEGER NOT NULL,

    CONSTRAINT "ServidoresTelefones_pkey" PRIMARY KEY ("servidorId","telefoneId")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Moradores_email_key" ON "Moradores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Login_token_key" ON "Login"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Login_moradorId_key" ON "Login"("moradorId");

-- CreateIndex
CREATE UNIQUE INDEX "Servidores_email_key" ON "Servidores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Telefone_telefone_key" ON "Telefone"("telefone");

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "Moradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servidores" ADD CONSTRAINT "Servidores_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "Moradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServidoresTelefones" ADD CONSTRAINT "ServidoresTelefones_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "Servidores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServidoresTelefones" ADD CONSTRAINT "ServidoresTelefones_telefoneId_fkey" FOREIGN KEY ("telefoneId") REFERENCES "Telefone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
