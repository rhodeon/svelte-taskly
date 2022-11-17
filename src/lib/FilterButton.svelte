<script lang="ts">
  import { Filter } from "../types";
  import { filter } from "../stores/filter";

  export let name: string;

  // setFilter updates the global filter store accordingly
  // based on the name of the selected button instance
  function setFilter() {
    switch (name) {
      case Filter.All.valueOf():
        filter.setAll();
        break;

      case Filter.Completed.valueOf():
        filter.setCompleted();
        break;

      case Filter.Pending.valueOf():
        filter.setPending();
        break;
    }
  }
</script>

<button type="button" class="btn toggle-btn" on:click={setFilter}>
  <span>{name}</span>
</button>
