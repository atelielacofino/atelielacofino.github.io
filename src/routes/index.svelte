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
  
  import Logo from './logo.svelte';
  import Social from './social.svelte';
  import Footer from './footer.svelte';

	export let data;

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

<div class="w-full min-h-screen content-background">

  {#if data}

    <div class="flex justify-center items-center min-h-screen">
      <div class="text-center p-8">
        <Logo title={data.title} url={data.logo.url} />
        <Social networks={data.networks} />
        <Footer title={data.title} description={data.description} email={email.target} />
      </div>
    </div>

  {/if}

</div>

<style>
  .content-background {
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 10px,
      rgba(0, 0, 0, 0.2) 50px,
      rgba(0, 0, 0, 0.1) 10px
    ),
    url('/images/atelie-laco-fino-laco-background.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
</style>