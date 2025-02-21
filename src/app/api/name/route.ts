import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, env: process.env.NODE_ENV });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const newName = await prisma.name.create({
    data: {
      prenom: String(formData.get("prenom")),
      nom: String(formData.get("nom")),
    },
  });

  return NextResponse.json({ name: newName });
}
