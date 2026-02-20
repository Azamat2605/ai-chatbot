import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Temporarily disable guest auth, redirect to home
  return NextResponse.redirect(new URL("/", request.url));
}
