import { nanoid } from "nanoid";

export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

// newTask creates a new task with the given name
// and a random id, having a default completed state
// of false.
export function newTask(name: string): Task {
  return {
    id: nanoid(),
    name: name,
    isCompleted: false,
  };
}

export enum Filter {
  All = "ALL",
  Completed = "COMPLETED",
  Pending = "PENDING",
}
