import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const prenom = formData.get("prenom");
  const nom = formData.get("nom");
  const age = formData.get("age");

  if (!prenom || !nom || !age) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newName = await prisma.name.create({
    data: {
      prenom: String(prenom),
      nom: String(nom),
      age: String(age),
    },
  });

  return NextResponse.redirect(new URL("/", request.url));
}
