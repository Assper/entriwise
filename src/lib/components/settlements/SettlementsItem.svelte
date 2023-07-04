<script lang="ts">
  import MdAssignment from "svelte-icons/md/MdAssignment.svelte";
  import MdAttachMoney from "svelte-icons/md/MdAttachMoney.svelte";
  import MdFileUpload from "svelte-icons/md/MdFileUpload.svelte";
  import MdImportExport from 'svelte-icons/md/MdImportExport.svelte'
  import type { Settlement } from "../../api/settlements";
  import Button from "../ui/Button.svelte";
  import {
    formatDate,
    getPaymentsTransactionsUrl,
    getSettlementStatus,
  } from "../../utils";
  import Link from "../ui/Link.svelte";
  import { SettlementStatus } from "../../enums";

  export let settlement: Settlement;

  const handleImport = () => {
    console.log("Call import for settlement:", settlement);
  };

  const handleBuy = () => {
    console.log("Call buy for settlement:", settlement);
  };

  const handleUpgrade = () => {
    console.log("Call upgrade for settlement:", settlement);
  };

  const handleReport = () => {
    console.log("Call report for settlement:", settlement);
  };

  const link =
    settlement.financialEventGroupId &&
    getPaymentsTransactionsUrl(settlement.financialEventGroupId);
  const { status, value } = getSettlementStatus(settlement);
  const startDate = formatDate(settlement.startDate);
  const endDate = formatDate(settlement.endDate);
  const isReportDisabled = !(
    settlement.importedAmount || settlement.importedIgnoredAmount
  );
  const actionVariants = {
    [SettlementStatus.FullyImported]: {
      disabled: true,
      type: "Import",
      variant: "warning",
      onClick: handleImport,
    },
    [SettlementStatus.NotImported]: {
      disabled: false,
      type: "Import",
      variant: "warning",
      onClick: handleImport,
    },
    [SettlementStatus.FetchingEvents]: {
      disabled: true,
      type: "Import",
      variant: "warning",
      onClick: handleImport,
    },
    [SettlementStatus.IncompleteImport]: {
      disabled: false,
      type: "Import",
      variant: "warning",
      onClick: handleImport,
    },
    [SettlementStatus.Buy]: {
      disabled: false,
      type: "Buy",
      variant: "danger",
      onClick: handleBuy,
    },
    [SettlementStatus.Upgrade]: {
      disabled: false,
      type: "Upgrade",
      variant: "danger",
      onClick: handleUpgrade,
    },
  };
  const actionButton = actionVariants[status];
</script>

<li>
  <p class="dates">
    {#if link}
      <Link href={link} target="_blank">
        {startDate} - {endDate}
      </Link>
    {:else}
      {startDate} - {endDate}
    {/if}
  </p>
  <p>{value}</p>
  <Button
    disabled={actionButton.disabled}
    title={actionButton.type}
    variant={actionButton.variant}
    onClick={actionButton.onClick}
  >
    <div class="icon">
      {#if actionButton.type === 'Import'}
        <MdImportExport />
      {/if}

      {#if actionButton.type === 'Buy'}
        <MdAttachMoney />
      {/if}

      {#if actionButton.type === 'Upgrade'}
        <MdFileUpload />
      {/if}
    </div>
  </Button>
  <Button
    disabled={isReportDisabled}
    variant="success"
    title="Report"
    onClick={handleReport}
  >
    <div class="icon">
      <MdAssignment />
    </div>
  </Button>
</li>

<style>
  li {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: var(--indent-small);
    font-weight: bolder;
    border: 1px solid var(--color-lightgray);
  }

  p {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--indent-small);
    margin: 0;
    background-color: var(--color-light);
    color: var(--color-dark);
  }

  .dates {
    max-width: max-content;
  }

  .icon {
    width: 32px;
    height: 32px;
  }
</style>
