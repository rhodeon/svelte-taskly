import { Filter } from "../types";
import { writable, type Writable } from "svelte/store";

// global filter store which holds the current filter state
export const filter: FilterStore = createFilterStore();

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
