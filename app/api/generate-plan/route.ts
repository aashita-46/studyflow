import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API Working 🚀",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    plan: [
      {
        id: 1,
        subject: "DSA",
        topic: "Graphs",
        duration: 75,
        priority: "High",
        completed: false,
      },
      {
        id: 2,
        subject: "Agentic AI",
        topic: "MCP Lecture",
        duration: 60,
        priority: "Medium",
        completed: false,
      },
      {
        id: 3,
        subject: "Research Papers",
        topic: "LegalBench",
        duration: 30,
        priority: "Low",
        completed: false,
      },
    ],
  });
}