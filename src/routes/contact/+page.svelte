<script>
    import { fly } from "svelte/transition";
</script>


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