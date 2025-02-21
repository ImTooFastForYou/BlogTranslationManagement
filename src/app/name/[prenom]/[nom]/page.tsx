import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Page(props: {
  params: Promise<{ prenom: string; nom: string }>;
}) {
  const params = await props.params;
  console.log(params);
  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent>
        <Link
          className={buttonVariants({ size: "lg", variant: "outline" })}
          href={"/"}
        >
          Retour
        </Link>
      </CardContent>
    </Card>
  );
}
