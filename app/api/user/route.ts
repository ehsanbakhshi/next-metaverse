import { NextResponse } from "next/server";

export default function handler(req: Request, res: Response) {
  return NextResponse.json({ name: "John Doe" }, { status: 200 });
}
