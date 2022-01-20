<script>
  import SocialIcons from '@rodneylab/svelte-social-icons';
  export let networks;
</script>


<ul class="flex justify-center py-8">
  
  {#if networks}

    {#each networks as item}
      <li class="px-1">
        <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>
          <SocialIcons network={item.name} fgColor="#FE63AF" bgColor="#FFE75E" />
        </a>
      </li>
    {/each}

  {/if}

</ul>