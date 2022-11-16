<script lang="ts">
  import { tasks } from "../stores";

  let name: string = "";

  // addTask adds a new task to the
  // global tasks store
  function addTask(e: Event) {
    e.preventDefault();
    tasks.add(name);
  }
</script>

<form>
  <h2>
    <label for="new-todo-input"> What needs to be done? </label>
  </h2>

  <input
    type="text"
    id="new-todo-input"
    name="text"
    autoComplete="off"
    bind:value={name}
  />

  <button type="submit" on:click={addTask}> Add </button>
</form>
