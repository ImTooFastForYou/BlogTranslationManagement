import { PrismaClient } from "@prisma/client";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const prisma = new PrismaClient();

async function findPersonAge(prenom: string, nom: string) {
  const user = await prisma.name.findFirst({
    where: { prenom, nom },
  });

  if (user) {
    return user.age;
  } else {
    return false;
  }
}

export default async function Page({
  params,
}: {
  params: { prenom: string; nom: string };
}) {
  console.log(params);
  const age = await findPersonAge(params.prenom, params.nom);
  if (age == false) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Entrez l&apos;âge de {params.prenom} {params.nom}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action="/api/name" method="post">
            <input type="hidden" name="prenom" value={params.prenom} />
            <input type="hidden" name="nom" value={params.nom} />
            <label>
              Age:
              <input type="text" name="age" />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div>
            <Link
              className={buttonVariants({ size: "lg", variant: "outline" })}
              href={"/"}
            >
              Retour
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardHeader>
          <CardTitle>L&apos;âge de cette personne est {age} ans</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Link
              className={buttonVariants({ size: "lg", variant: "outline" })}
              href={"/"}
            >
              Retour
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }
}
