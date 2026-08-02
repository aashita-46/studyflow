import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await req.json();

  const plan = user.subjects.map(
    (subject: string, index: number) => ({
      id: index + 1,
      subject,
      topic: `Introduction to ${subject}`,
      duration: Math.floor(user.hours * 60 / user.subjects.length),
      priority: index === 0 ? "High" : "Medium",
      completed: false,
    })
  );

  return NextResponse.json({
    success: true,
    plan,
  });
}