<script lang="ts">
  export let href: string;
  export let target: string;
</script>

<a {href} {target}>
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    color: #386de7;
    transition: color 0.2s ease-in;
  }

  a:hover {
    color: #64c8fa;
  }

  a:visited {
    color: #6952e9;
  }
</style>
