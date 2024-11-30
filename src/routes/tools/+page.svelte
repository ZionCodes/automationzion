<script>
    import Tools from "$lib/Tools.svelte";
	import { fly, scale } from "svelte/transition";
    import SvelteSeo from "svelte-seo";
    import Cover from '$lib/images/AutomationZion-cover.png'
    export let data;
</script>

<SvelteSeo
  title='Tools I Use | Workflow Automation Tools by Automation Zion'
  description="Discover the powerful tools I use to create custom systems and workflow automations, including Zapier, Make, and other cutting-edge software."
  openGraph={{
    title: `Tools I Use | Workflow Automation Tools by Automation Zion`,
    description:`Discover the powerful tools I use to create custom systems and workflow automations, including Zapier, Make, and other cutting-edge software.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@Automation Zion",
    title: `Tools I Use | Workflow Automation Tools by Automation Zion`,
    description:`Discover the powerful tools I use to create custom systems and workflow automations, including Zapier, Make, and other cutting-edge software.`,
    image: `${Cover}`,
  }}
/>

<div class="opacity: 1; transform: none;">
    <Tools data={data.records}/>

</div>