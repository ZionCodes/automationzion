<script>
    import { page } from '$app/stores';
    import { scale } from 'svelte/transition';

    // Helper function to check if the current route matches
    const isActive = (route) => $page.url.pathname === route;
</script>

<div class="flex items-center flex-wrap gap-2 mb-8">
    <a href="/">
        <button class={`text-sm transition-colors px-2 py-1 rounded-md relative ${
            isActive('/') ? 'text-white' : 'text-gray-500 hover:text-gray-900'
        }`}>
            <span class="relative z-10">About</span>
            {#if isActive('/')}
                <span class="absolute inset-0 z-0 bg-gray-900 rounded-md" style="opacity: 1;" in:scale></span>
            {/if}
        </button>
    </a>
    <a href="/work">
        <button class={`text-sm transition-colors px-2 py-1 rounded-md relative ${
            isActive('/work') ? 'text-white' : 'text-gray-500 hover:text-gray-900'
        }`}>
            <span class="relative z-10">Work</span>
            {#if isActive('/work')}
                <span class="absolute inset-0 z-0 bg-gray-900 rounded-md" style="opacity: 1;" in:scale></span>
            {/if}
        </button>
    </a>
    <a href="/blog">
        <button class={`text-sm transition-colors px-2 py-1 rounded-md relative ${
            isActive('/blog') ? 'text-white' : 'text-gray-500 hover:text-gray-900'
        }`}>
            <span class="relative z-10">Blog</span>
            {#if isActive('/blog')}
                <span class="absolute inset-0 z-0 bg-gray-900 rounded-md" style="opacity: 1;" in:scale></span>
            {/if}
        </button>
    </a>
    <a href="/tools">
        <button class={`text-sm transition-colors px-2 py-1 rounded-md relative ${
            isActive('/tools') ? 'text-white' : 'text-gray-500 hover:text-gray-900'
        }`}>
            <span class="relative z-10">Tools</span>
            {#if isActive('/tools')}
                <span class="absolute inset-0 z-0 bg-gray-900 rounded-md" style="opacity: 1;" in:scale></span>
            {/if}
        </button>
    </a>
    <a href="/contact">
        <button class={`text-sm transition-colors px-2 py-1 rounded-md relative ${
            isActive('/contact') ? 'text-white' : 'text-gray-500 hover:text-gray-900'
        }`}>
            <span class="relative z-10">Contact</span>
            {#if isActive('/contact')}
                <span class="absolute inset-0 z-0 bg-gray-900 rounded-md" style="opacity: 1;" in:scale></span>
            {/if}
        </button>
    </a>
</div>
