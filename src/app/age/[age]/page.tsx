import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findByAge(age: string) {
  const user = await prisma.name.findMany({
    where: { age },
  });
  if (user) {
    return user;
  } else {
    return false;
  }
}

export default async function Page({ params }: { params: { age: string } }) {
  console.log(params);

  const user = await findByAge(params.age);
  if (user == false) {
    return <div className=""> {user} </div>;
  }
  return <div className="text-4xl"> No user of that age </div>;
}
