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
  <h2 class="label-wrapper">
    <label for="new-todo-input" class="label__lg"> What needs to be done? </label>
  </h2>

  <input
    type="text"
    id="new-todo-input"
    class="input input__lg"
    name="text"
    autoComplete="off"
    bind:value={name}
  />

  <button type="submit" class="btn btn__primary btn__lg" on:click={addTask}>
    Add
  </button>
</form>
