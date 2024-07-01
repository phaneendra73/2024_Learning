import { PrismaClient } from '@prisma/client';
import { log } from 'console';
const prisma = new PrismaClient();

async function createUser(
  Email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      email: Email,
      firstName,
      lastName,
      password,
    },
    select: {
      id: true,
      firstName: true,
    },
  });
  log(res);
}

createUser('phaneedra@gmail.com', 'PHANI', 'SAI', 'qwertyuiop');
