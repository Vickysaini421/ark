import { NextResponse } from "next/server";
import { loadAll } from "@/lib/data";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    const data = loadAll();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to load experiment data" },
      { status: 500 }
    );
  }
}
