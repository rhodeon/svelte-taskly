<!-- View mode of a Todo item -->
<script lang="ts">
  import type { Task } from "../types";
  import { tasks } from "../stores";

  export let task: Task;

  // completionStatus is used to update the completion
  // state of the task
  let completionStatus = task.isCompleted;

  // startEdit is callad when the edit button
  // is clicked to switch to the edit mode
  export let startEdit: () => void;

  // deleteTask removes the task from the
  // global task store
  function deleteTask() {
    tasks.remove(task.id);
  }
</script>

<form>
  <div>
    <input
      type="checkbox"
      bind:checked={completionStatus}
      on:change={() => tasks.toggle(task.id, completionStatus)}
    />

    <label for={task.id}>
      {task.name}
    </label>
  </div>

  <div>
    <button type="button" on:click={startEdit}>
      Edit <span>{task.name}</span>
    </button>

    <button type="button" on:click={deleteTask}>
      Delete <span>{task.name}</span>
    </button>
  </div>
</form>
