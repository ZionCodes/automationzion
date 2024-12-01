<script>
	import Blog from "$lib/Blog.svelte";
	import Newsletter from "$lib/Newsletter.svelte";
    import SvelteSeo from "svelte-seo";
    import Cover from '$lib/images/AutomationZion-cover.png'
    let { data } = $props();

</script>

<SvelteSeo
  title='Automation Zion Blog | Workflow Automation Tips'
  description="Explore tutorials, insights, and ideas on systems and workflow automation."
  openGraph={{
    title: `Automation Zion Blog | Workflow Automation Tips`,
    description:`Explore tutorials, insights, and ideas on systems and workflow automation.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Relocate for Work",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `Automation Zion Blog | Workflow Automation Tips`,
    description:`Explore tutorials, insights, and ideas on systems and workflow automation.`,
    image: `${Cover}`,
  }}
/>

<div class="opacity: 1; transform: none;">
    <div>
        <Blog data={data.records} />
    </div>
    <Newsletter />
</div>