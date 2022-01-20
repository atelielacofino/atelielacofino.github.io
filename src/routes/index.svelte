<script context="module">
	export const load = async ({ fetch }) => {
		const response = await fetch('data.json');
		const data = await response.json();
		return {
			props: {
				data
			}
		};
	};
</script>

<script>
  import SvelteSeo from "svelte-seo";
  import SocialIcons from '@rodneylab/svelte-social-icons';

	export let data;

  const year = new Date().getFullYear();

  $: title = `${data.title} por ${data.author}`;
  $: twitter = data.networks.find(network => network.name === 'twitter');
  $: email = data.networks.find(network => network.name === 'email');
</script>

<SvelteSeo
  title={title}
  description={data.description}
  keywords=""
  canonical={data.url}

  openGraph={{
    title: data.title,
    description: data.description,
    url: data.url,
    type: 'website',
    images: [
      {
        url: data.image.url,
        width: data.image.width,
        height: data.image.height,
        alt: data.title
      }
     ]
  }}

  twitter={{
    site: twitter.url,
    title: data.title,
    description: data.description,
    image: data.image.url,
    imageAlt: data.image.alt,
  }}

  jsonLd={{
    '@type': 'Organization',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url
    },
    headline: data.description,
    image: [data.image.url],
    datePublished: '2020-08-03T17:31:37Z',
    dateModified: '2020-08-20T09:31:37Z',
    author: {
      '@type': 'Person',
      name: data.author
    },
    publisher: {
      '@type': 'Organization',
      name: data.organization,
      logo: {
        '@type': 'ImageObject',
        url: data.logo.url
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      itemReviewed: data.title,
      ratingCount: 1,
      ratingValue: 5,
      bestRating: 10
    }
  }}
/>

<!-- <div class="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed blur-sm" style="background-image: url('{data.image.url}');"></div> -->
<div class="w-full min-h-screen content-background">

  {#if data}
    <div class="flex justify-center items-center min-h-screen">
      <div class="text-center p-8">

        <div class="flex justify-center">
          <a href="/" title={data.name}>
            <img src={data.logo.url} alt={data.title} class="object-contain h-48 w-96" />
          </a>
        </div>

        <ul class="flex justify-center py-8">

          {#each data.networks as item}
            <li class="px-1">
              <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>
                <SocialIcons network={item.name} fgColor="#FE63AF" bgColor="#FFE75E" />
              </a>
            </li>
          {/each}

        </ul>

        <div class="py-3 text-yellow-200 drop-shadow-md">
          <h1 class="text-lg subpixel-antialiased">&copy; {year} <b>{data.title}</b></h1>
          <h2 class="text-sm subpixel-antialiased">{data.description}</h2>
          <p class="text-sm subpixel-antialiased">
            <a href={email.url} title={email.title}>{email.target}</a>
          </p>
        </div>

      </div>
    </div>

  {/if}
</div>

<style>
  .content-background {
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.2) 10px,
      rgba(0, 0, 0, 0.1) 50px,
      rgba(0, 0, 0, 0.1) 10px
    ),
    url("./background/atelie-laco-fino-laco-background-6.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>