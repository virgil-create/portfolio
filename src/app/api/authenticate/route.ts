import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const PASSWORD = "gsb$generique,1234";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== PASSWORD) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("portfolio_auth", PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ ok: true });
}
