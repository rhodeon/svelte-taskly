<script lang="ts">
  import AddTaskForm from "./lib/AddTaskForm.svelte";
  import FilterButton from "./lib/FilterButton.svelte";
  import Todo from "./lib/Todo.svelte";
  import { tasks, filterStore } from "./stores";
  import { Filter, type Task } from "./types";

  // filteredTasks is an array derived from the global tasks store
  // based on the selected filter and is passed to the task view
  let filteredTasks: Task[] = [];
  $: {
    // update the filtered tasks whenever there is a change in the selected
    // filter saved in filterStore
    switch ($filterStore) {
      case Filter.All:
        // on the All filter, set filteredTasks to all tasks
        filteredTasks = $tasks;
        break;

      case Filter.Completed:
        // on the Completed filter, set filteredTasks to only completed tasks
        filteredTasks = $tasks.filter((task) => task.isCompleted === true);
        break;

      case Filter.Pending:
        // on the Pending filter, set filteredTasks to only uncompleted tasks
        filteredTasks = $tasks.filter((task) => task.isCompleted === false);
        break;
    }
  }
</script>

<div>
  <h1>Taskly</h1>

  <AddTaskForm />

  <!-- populate the filter buttons -->
  {#each Object.values(Filter) as filter}
    <FilterButton name={filter} />
  {/each}

  <!-- display each task from the global store -->
  {#each filteredTasks as task (task.id)}
    <Todo {task} />
  {/each}
</div>
