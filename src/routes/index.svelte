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
    site: data.twitter.username,
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

<div class="project">
  {#if data}
    <div class="flex justify-center items-center min-h-screen">
      <div class="text-center p-8">
        <h1 class="uppercase">{data.title}</h1>
        <h3>{data.description}</h3>
      </div>
    </div>  
  {/if}
</div>
