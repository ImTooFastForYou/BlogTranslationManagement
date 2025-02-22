//import { InputAgeForm } from "@/components/input-form-age";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page({
  params,
}: {
  params: { prenom: string; nom: string };
}) {
  console.log(params);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter the age</CardTitle>
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
}
