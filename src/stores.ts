import { writable, type Writable } from "svelte/store";
import { Filter, newTask, type Task } from "./types";

export const tasks: TaskStore = createTasksStore();

// TaskStore is an interface with methods for
// abstracting the operations for adding, removing
// and editing task items in a global store.
interface TaskStore extends Writable<Task[]> {
  add: (name: string) => void;
  remove: (id: string) => void;
  edit: (id: string, name: string) => void;
  toggle: (id: string, completionStatus: boolean) => void;
}

function createTasksStore(): TaskStore {
  const { subscribe, set, update }: Writable<Task[]> = writable([]);

  return {
    subscribe,
    set,
    update,

    add: (name: string) => {
      update((tasks) => [...tasks, newTask(name)]);
    },

    remove: (id: string) => {
      // filter out task with a matching id
      update((tasks) => tasks.filter((task) => id != task.id));
    },

    edit: (id: string, name: string) => {
      update((tasks) => {
        // retrieve the index of the task with the given id
        // and edit the name in-place
        const index = tasks.findIndex((task) => task.id === id);
        tasks[index].name = name;
        return tasks;
      });
    },

    // toggle sets the isCompleted property of the task with the
    // given id to the completionStatus
    toggle: (id: string, completionStatus: boolean) => {
      update((tasks) => {
        const index = tasks.findIndex((task) => task.id === id);
        tasks[index].isCompleted = completionStatus;
        return tasks;
      });
    },
  };
}

// global filter store which holds the current filter state
export const filterStore: FilterStore = createFilterStore();

// FilterStore is store wrapper for setting a global filtered state.
interface FilterStore extends Writable<Filter> {
  setAll: () => void;
  setCompleted: () => void;
  setPending: () => void;
}

function createFilterStore(): FilterStore {
  const { subscribe, set, update }: Writable<Filter> = writable(Filter.All);

  return {
    subscribe,
    set,
    update,

    setAll: () => {
      set(Filter.All);
    },

    setCompleted: () => {
      set(Filter.Completed);
    },

    setPending: () => {
      set(Filter.Pending);
    },
  };
}
