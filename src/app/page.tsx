"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { InputForm } from "@/components/input-form-front-page";

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Card>
        <CardHeader>
          <CardTitle>Entrez un prénom et un nom</CardTitle>
        </CardHeader>
        <CardContent>
          <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href="/name/Franz/Liszt"
          >
            A nice link !
          </Link>
          <InputForm />
        </CardContent>
      </Card>
      <div className={"flex justify-center mt-4"}>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}
