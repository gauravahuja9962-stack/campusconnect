import bcrypt from 'bcryptjs';
import prisma from './src/config/prisma.js';

async function main() {
  const hashedPassword = await bcrypt.hash('Ahuja@123', 12);

  const user = await prisma.user.upsert({
    where: { email: '2023ucse042@mnit.ac.in' },
    update: {},
    create: {
      email: '2023ucse042@mnit.ac.in',
      password: hashedPassword,
      name: 'Aarav Sharma',
      rollNumber: '2023UCSE042',
      batchYear: 2023,
      department: 'Computer Science & Engineering',
    },
  });

  console.log('✅ Test user successfully seeded:', user.email);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());