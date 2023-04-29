import { Problem as TProblem } from "../api/problem/Problem";

export const PROBLEM_TITLE_FIELD = "title";

export const ProblemTitle = (record: TProblem): string => {
  return record.title || String(record.id);
};
