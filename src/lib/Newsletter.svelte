<script>
    import { fly } from "svelte/transition";
</script>

<div class="mt-16" in:fly={{ y:100, duration:500, opacity:0 }}>
    <div class="mt-1">
        <h1 class="font-medium text-gray-900 mb-4 text-lg">Automation Newsletter</h1>
        <p class="text-gray-500 mt-4">Stay ahead with Automated Insights, my monthly newsletter. Discover the latest tools, tips, and trends in automation to automate workflows and boost productivity effortlessly..</p>
        <form action="" class="relative">
            <label for="email" class="text-sm font-medium text-gray-700 hidden">
                Email Address
            </label>
            <input type="email" class="border w-full mt-4 px-2 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
            <button class="bg-gray-900 hover:bg-gray-700 inline-block top-6 text-xs right-1 text-white px-2 py-2 rounded-md absolute disabled:opacity-80">Subscribe</button>
        </form>
    </div>
</div>