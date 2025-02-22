import { buttonVariants } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

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
  if (user != false) {
    return (
      <div className="">
        <ul>
          {user.map((name, index) => (
            <li key={index}>
              {name.prenom} {name.nom}
            </li>
          ))}
        </ul>
        <div>
          <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href={"/"}
          >
            Retour
          </Link>
        </div>
      </div>
    );
  }
  return <div className="text-4xl"> No user of that age </div>;
}
