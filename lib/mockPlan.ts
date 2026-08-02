export interface StudyTask {
  id: number;
  subject: string;
  topic: string;
  duration: number;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
  reason: string;
}

export const studyPlan: StudyTask[] = [
  {
    id: 1,
    subject: "DSA",
    topic: "Graphs",
    duration: 75,
    priority: "High",
    completed: false,
    reason:
      "Graphs haven't been revised recently and are frequently asked in coding interviews.",
  },
  {
    id: 2,
    subject: "Agentic AI",
    topic: "Model Context Protocol",
    duration: 60,
    priority: "Medium",
    completed: false,
    reason:
      "Keeps you progressing toward becoming an AI Engineer.",
  },
  {
    id: 3,
    subject: "Research Papers",
    topic: "Legal NLP Survey Paper",
    duration: 45,
    priority: "Low",
    completed: false,
    reason:
      "Builds research consistency without causing mental fatigue.",
  },
];