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
</script>

<SvelteSeo
  title={data.title} description={data.description}

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
    site: data.networks[3].url,
    title: data.title,
    description: data.description,
    image: data.image.url,
    imageAlt: data.image.alt,
  }}

  jsonLd={{
    '@type': 'Article',
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
    }
  }}

/>

<!-- <div class="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed blur-sm" style="background-image: url('{data.image.url}');"></div> -->
<div class="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed" style="background-image: url('{data.image.url}');">
  {#if data}
    <div class="flex justify-center items-center min-h-screen">
      <div class="text-center p-8">

        <div class="flex justify-center">
          <img src={data.logo.url} alt={data.title} class="object-contain h-48 w-96" />
        </div>

        <ul class="flex justify-center py-8">

          {#each data.networks as item}
            <li class="px-1">
              <SocialIcons network={item.name} fgColor="#EC3D8C" bgColor="#FFE75E" />
            </li>
          {/each}

        </ul>

        <h2 class="flex justify-center py-3 text-sm subpixel-antialiased text-yellow-200 drop-shadow-md">{data.description}</h2>

      </div>
    </div>

  {/if}
</div>