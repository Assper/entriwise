<script lang="ts">
  export let disabled: boolean = false;
  export let onClick: () => void | null = null;
  export let title: string = '';
  export let variant: string = '';
</script>

<button {disabled} {title} class={variant} on:click={onClick}>
  <slot />
</button>

<style>
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
    color: var(--color-light);
    font-weight: bold;
  }

  button:hover {
    opacity: 0.7;
  }

  button:disabled,
  button[disabled] {
    color: var(--color-lightgray);
    cursor: not-allowed;
    opacity: 0.85;
  }
  
  .danger {
    background-color: var(--color-danger);
  }

  .warning {
    background-color: var(--color-warning);
  }

  .success {
    background-color: var(--color-success);
  }
</style>
