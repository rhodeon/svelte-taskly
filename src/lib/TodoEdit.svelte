<!-- Edit mode of a Todo item -->
<script lang="ts">
  import { tasks } from "../stores";
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

<form>
  <div>
    <label for={task.id}>
      New name for {task.name}
    </label>
    <input id={task.id} type="text" bind:value={newName} />
  </div>

  <div>
    <button type="button" on:click={stopEdit}> Cancel </button>
    <button type="submit" on:click={updateTask}> Save </button>
  </div>
</form>
