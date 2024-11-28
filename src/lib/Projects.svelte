<script>
    import { fly } from 'svelte/transition';
    import image from '$lib/images/Project-Management-Base-Tasks-Airtable-11-27-2024_12_46_AM.png'
</script>

<div>
    <h1 class="font-medium text-gray-900 mb-4 text-lg" in:fly={{ y:100, duration:500, opacity:0 }}>Projects</h1>
    <div class="grid grid-cols-3 md:grid-cols-3 w-full gap-x-10 gap-y-5" in:fly={{ y:100, duration:500, opacity:0 }}>
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-100">
            <a href="/">
                <img src="{image}" alt="" class="max-h-48 w-full rounded-lg mb-3" style="color: transparent;">
                <div class="text-sm mb-1 font-medium text-gray-900">Meditations App</div>
                <div class="max-w-xs text-sm font-normal text-gray-500">An app for organizing book notes and personal reflections.</div>
            </a>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-100">
            <a href="/">
                <img src="{image}" alt="" class="max-h-48 w-full rounded-lg mb-3" style="color: transparent;">
                <div class="text-sm mb-1 font-medium text-gray-900">Meditations App</div>
                <div class="max-w-xs text-sm font-normal text-gray-500">An app for organizing book notes and personal reflections.</div>
            </a>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-100">
            <a href="/">
                <img src="{image}" alt="" class="max-h-48 w-full rounded-lg mb-3" style="color: transparent;">
                <div class="text-sm mb-1 font-medium text-gray-900">Meditations App</div>
                <div class="max-w-xs text-sm font-normal text-gray-500">An app for organizing book notes and personal reflections.</div>
            </a>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-100">
            <a href="/">
                <img src="{image}" alt="" class="max-h-48 w-full rounded-lg mb-3" style="color: transparent;">
                <div class="text-sm mb-1 font-medium text-gray-900">Meditations App</div>
                <div class="max-w-xs text-sm font-normal text-gray-500">An app for organizing book notes and personal reflections.</div>
            </a>
        </div>
    </div>
</div>

