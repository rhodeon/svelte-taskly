<script lang="ts">
  import { Filter } from "../types";
  import { filterStore } from "../stores";

  export let name: string;

  // setFilter updates the global filter store accordingly
  // based on the name of the selected button instance
  function setFilter() {
    switch (name) {
      case Filter.All.valueOf():
        filterStore.setAll();
        break;

      case Filter.Completed.valueOf():
        filterStore.setCompleted();
        break;

      case Filter.Pending.valueOf():
        filterStore.setPending();
        break;
    }
  }
</script>

<button type="button" on:click={setFilter}>
  {name}
</button>
