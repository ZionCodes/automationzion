<script>
    import { fly } from "svelte/transition";
    import SvelteSeo from "svelte-seo";
    import Cover from '$lib/images/AutomationZion-cover.png'
</script>

<SvelteSeo
  title='Contact Me | Get in Touch with Automation Zion'
  description="Have a question or need help with workflow automation? Contact me today to discuss your project and start building smarter systems."
  openGraph={{
    title: `Contact Me | Get in Touch with Automation Zion`,
    description:`Have a question or need help with workflow automation? Contact me today to discuss your project and start building smarter systems.`,
    image: {Cover},
    type: "website",
    site_name: "Relocate for Work",
  }}
  twitter={{
    card: "summary",
    site: "@RelocateforWork",
    title: `Contact Me | Get in Touch with Automation Zion`,
    description:`Have a question or need help with workflow automation? Contact me today to discuss your project and start building smarter systems.`,
    image: {Cover},
  }}
/>


<div class="opacity: 1; transform: none;" in:fly={{ y:100, duration:500, opacity:0 }}>
    <div>
        <p class="text-gray-500">A Roman emperor and Stoic philosopher who wrote reflective thoughts in his "Meditations," pondering on duty, virtue, and the transience of life.</p>
    </div>

    <div class="flex flex-wrap gap-2 mt-8">
        <a href="/blog">
            <button class=" hover:bg-gray-700 text-white text-sm transition-colors px-2 py-1 rounded-md relative border border-gray-500 bg-gray-900">
                <span class="relative z-10">Email</span>
            </button>
        </a>
        <a href="/tools">
            <button class="text-white hover:bg-gray-700 text-sm transition-colors px-2 py-1 rounded-md relative border border-gray-500 bg-gray-900">
                <span class="relative z-10">Book a call</span>
            </button>
        </a>
    </div>
</div>