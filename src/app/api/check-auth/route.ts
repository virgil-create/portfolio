import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const PASSWORD = "gsb$generique,1234";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("portfolio_auth");

  if (auth?.value === PASSWORD) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
