import prisma from "../src/config/database"

async function getDefaultMorador() {
  const user = await prisma.moradores.findFirst({
    where: {
      email: "admin@admin.com.br"
    }
  });

  return user;
}

async function createDefaultMorador() {
  console.log("Creating default user!");
  const user = await prisma.moradores.create({
    data: {
        nome: "admin",
        ap: "admin",
        email: "admin@admin.com.br",
        senha: "admin"
    }
  });

  return user;
}

async function checkOrCreateDefaultMorador() {
  const user = await getDefaultMorador();
  if (!user) await createDefaultMorador();
  else console.log("Default user already created.");

  return user;
}

async function main() {
  return checkOrCreateDefaultMorador();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })