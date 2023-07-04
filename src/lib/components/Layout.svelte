<main>
  <slot />
</main>

<style>
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    min-width: 480px;
    padding: var(--indent-small);
    border-radius: var(--indent-small);
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgba(200,200,200,0.4);
  }
</style>
