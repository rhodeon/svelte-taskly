<script lang="ts">
  import type { Task } from "src/types";
  import TodoEdit from "./TodoEdit.svelte";
  import TodoView from "./TodoView.svelte";

  export let task: Task;

  // isEditing is used to determine which view to display.
  // When "true", the edit component is shown.
  // When "false", the view component is shown.
  let isEditing = false;

  // used as a call back in the view component to
  // switch to edit mode
  function startEdit() {
    isEditing = true;
  }

  // used as a call back in the edit component to
  // switch to view mode
  function stopEdit() {
    isEditing = false;
  }
</script>

<!-- switch between views based on edit status -->
{#if isEditing}
  <TodoEdit {task} {stopEdit} />
{:else}
  <TodoView {task} {startEdit} />
{/if}
