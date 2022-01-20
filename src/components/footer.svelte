<script>
  export let title;
  export let description;
  export let email;
  const year = new Date().getFullYear();
</script>

<div class="py-3 text-yellow-200 drop-shadow-md">
  <h1 class="text-lg subpixel-antialiased font-bold py-3">{title}</h1>
  <h2 class="text-sm subpixel-antialiased py-2">{description}</h2>
  <p class="text-sm subpixel-antialiased py-2">
    <a class="hover:underline hover:text-yellow-300" href="mailto:{email}" title="">{email}</a>
  </p>
  <p class="text-sm subpixel-antialiased py-2">Todos os direitos reservados - &copy;{year} Copyright</p>
</div>