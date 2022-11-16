<script lang="ts">
  import Form from "./lib/AddTaskForm.svelte";
  import Todo from "./lib/Todo.svelte";
  import { tasks } from "./stores";
</script>

<div>
  <h1>Taskly</h1>

  <Form />

  <!-- display each task from the global store -->
  {#each $tasks as task}
    <Todo {task} />
  {/each}
</div>
