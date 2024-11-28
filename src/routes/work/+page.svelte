<script>
	import Certifications from "$lib/Certifications.svelte";
	import Projects from "$lib/Projects.svelte";
	import SvelteSeo from "svelte-seo";
  import Cover from '$lib/images/AutomationZion-cover.png'

</script>

<SvelteSeo
  title='My Work | Projects and Certifications by Automation Zion'
  description="Explore my portfolio of workflow automation projects, certifications, and achievements. See how I help businesses save time and scale efficiently."
  openGraph={{
    title: `My Work | Projects and Certifications by Automation Zion`,
    description:`Explore my portfolio of workflow automation projects, certifications, and achievements. See how I help businesses save time and scale efficiently.`,
    image: {Cover},
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@AutomatonZion",
    title: `My Work | Projects and Certifications by Automation Zion`,
    description:`Explore my portfolio of workflow automation projects, certifications, and achievements. See how I help businesses save time and scale efficiently.`,
    image: {Cover},
  }}
/>


<Projects />
<Certifications />