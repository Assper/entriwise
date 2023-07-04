<script lang="ts">
  import { onMount } from "svelte";
  import Layout from "../lib/components/Layout.svelte";
  import { getSettlements } from "../lib/api/settlements";
  import { settlements } from "../lib/store/settlements";
  import SettlementsList from "../lib/components/settlements/SettlementsList.svelte";

  onMount(async () => {
    const res = await getSettlements();
    $settlements = res.settlements;
  });
</script>

<Layout>
  <SettlementsList bind:settlements={$settlements} />
</Layout>
