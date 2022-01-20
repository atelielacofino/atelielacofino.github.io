<script>
  export let title;
  export let url;
</script>

<div class="flex justify-center">
  <a href="/" title={title}>
    <img src={url} alt={title} class="object-contain h-48 w-96" />
  </a>
</div>