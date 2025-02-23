import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const prenom = String(formData.get("prenom"));
  const nom = String(formData.get("nom"));
  const age = String(formData.get("age"));

  if (!prenom || !nom || !age) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await prisma.name.create({
    data: {
      prenom: prenom,
      nom: nom,
      age: age,
    },
  });

  return NextResponse.redirect(new URL("/", request.url));
}
