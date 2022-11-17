<!-- View mode of a Todo item -->
<script lang="ts">
  import { tasks } from "../stores/tasks";

  import type { Task } from "../types";

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

<div class="stack-small">
  <div class="c-cb">
    <input
      type="checkbox"
      bind:checked={completionStatus}
      on:change={() => tasks.toggle(task.id, completionStatus)}
    />

    <label class="todo-label" for={task.id}>
      {task.name}
    </label>
  </div>

  <div class="btn-group">
    <button class="btn" type="button" on:click={startEdit}>
      Edit <span>{task.name}</span>
    </button>

    <button class="btn btn__danger" type="button" on:click={deleteTask}>
      Delete <span>{task.name}</span>
    </button>
  </div>
</div>
