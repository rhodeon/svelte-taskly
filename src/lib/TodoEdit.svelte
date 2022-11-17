<!-- Edit mode of a Todo item -->
<script lang="ts">
  import { tasks } from "../stores/tasks";

  import type { Task } from "../types";

  export let task: Task;
  let newName: string = task.name;

  // stopEdit is called when the edit is cancelled
  // or submitted to switch to the view mode
  export let stopEdit: () => void;

  // updateTask submits and edits the task name
  // change in the global tasks store
  function updateTask(e: Event) {
    e.preventDefault();
    tasks.edit(task.id, newName);
    stopEdit();
  }
</script>

<form class="stack-small">
  <div class="form-group">
    <label class="todo-label" for={task.id}>
      New name for {task.name}
    </label>
    <input id={task.id} class="todo-text" type="text" bind:value={newName} />
  </div>

  <div class="btn-group">
    <button type="button" class="btn todo-cancel" on:click={stopEdit}>
      Cancel
    </button>

    <button
      type="submit"
      class="btn btn__primary todo-edit"
      on:click={updateTask}
    >
      Save
    </button>
  </div>
</form>
