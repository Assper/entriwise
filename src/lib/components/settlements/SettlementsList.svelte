<script lang="ts">
  import type { Settlement } from "../../api/settlements";
  import SettlementsEmptyItem from "./SettlementsEmptyItem.svelte";
  import SettlementsHeader from "./SettlementsHeader.svelte";
  import SettlementsItem from "./SettlementsItem.svelte";

  export let settlements: Settlement[];

  const maxItems = 6;
  $: itemsToShow = settlements.slice(0, maxItems);
  $: emptyItemsCount = maxItems - itemsToShow.length;
</script>

<SettlementsHeader />
<ul>
  {#each itemsToShow as settlement}
    <SettlementsItem {settlement} />
  {/each}

  {#each new Array(emptyItemsCount) as _}
    <SettlementsEmptyItem />
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: var(--indent-small) 0;
    list-style: none;
  }
</style>
