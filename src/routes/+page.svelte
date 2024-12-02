<script>

    import Cover from '$lib/images/AutomationZion-cover.png'
    import { fly } from 'svelte/transition';
	import Experience from '$lib/Experience.svelte';
	import Blog from '$lib/Blog.svelte';
	import Newsletter from '$lib/Newsletter.svelte';
	import Tools from '$lib/Tools.svelte';
    import SvelteSeo from "svelte-seo";
    let { data } = $props();
</script>

<SvelteSeo
  title='Automation Zion | Workflow Automation Specialist'
  description="I create systems and workflow automations to save you time, eliminate busywork, and help your business scale effortlessly."
  openGraph={{
    title: `Automation Zion | Workflow Automation Specialist`,
    description:`I create systems and workflow automations to save you time, eliminate busywork, and help your business scale effortlessly.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `Automation Zion | Workflow Automation Specialist`,
    description:`I create systems and workflow automations to save you time, eliminate busywork, and help your business scale effortlessly.`,
    image: `${Cover}`,
  }}
/>


<div class="opacity: 1; transform: none;" in:fly={{ y:100, duration:500, opacity:0 }}>
    <div>
        <p class="text-gray-500">I’m Zion Gonet - a developer and automation specialist passionate about making life simpler through technology. I combine creativity and technical know-how to build smart, user-friendly systems and solutions that help people and businesses thrive in the digital age.</p>
    </div>
    
    <Experience />
    <div class="mt-16">
        <h2 class="font-medium text-gray-900 mb-4 text-lg">Latest Blogs</h2>
        <Blog data={data.records}/>
        <a href="/blog" class="hover:underline text-sm">Read more</a>
    </div>
    <Newsletter />
</div>