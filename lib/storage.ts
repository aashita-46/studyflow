export type UserData = {
  name: string;
  goal: string;
  subjects: string[];
  hours: number;
};

export function saveUserData(user: UserData) {
  localStorage.setItem("studyflow-user", JSON.stringify(user));
}

export function getUserData(): UserData | null {
  const data = localStorage.getItem("studyflow-user");

  if (!data) return null;

  return JSON.parse(data);
}

export function saveStudyPlan(plan: any) {
  localStorage.setItem("studyflow-plan", JSON.stringify(plan));
}

export function getStudyPlan() {
  const data = localStorage.getItem("studyflow-plan");

  if (!data) return null;

  return JSON.parse(data);
}