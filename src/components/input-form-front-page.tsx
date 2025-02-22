"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  prenom: z.string(),
  nom: z.string(),
  age: z.string(),
});

export function InputNameForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      age: "",
    },
  });

  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    if (data.nom && data.prenom && !data.age) {
      router.push(`/name/${data.prenom}/${data.nom}`);
    } else if (!data.nom && !data.prenom && data.age) {
      router.push(`/age/${data.age}`);
    } else {
      toast({
        title: "You must fill in all fields.",
        description: "Please fill in all fields to continue.",
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div>
          <p>Entrez un prénom et un nom </p>
        </div>
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Entrez un prénom" {...field} />
              </FormControl>
              <FormDescription>Ceci est le prénom.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Entrez un nom" {...field} />
              </FormControl>
              <FormDescription>Ceci est le nom.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <p>Ou entrez un âge</p>
        </div>
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="Entrez un âge" {...field} />
              </FormControl>
              <FormDescription>Ceci est l&apos;âge.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
