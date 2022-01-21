<script>
  export let title;
  export let description;
  export let email;
  const year = new Date().getFullYear();
</script>

<div class="py-3 text-yellow-200 drop-shadow-md text-center">
  <h1 class="text-2xl subpixel-antialiased font-bold py-1">{title}</h1>
  <h2 class="text-sm subpixel-antialiased py-5">{description}</h2>
  <p class="text-sm subpixel-antialiased py-1">
    <a class="hover:underline hover:text-yellow-300" href="mailto:{email}" title="">{email}</a>
  </p>
  <p class="text-sm subpixel-antialiased">Todos os direitos reservados - &copy;{year} Copyright</p>
  <p class="text-3xl subpixel-antialiased">❤</p>
</div>