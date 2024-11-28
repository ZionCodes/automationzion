<script>
    import Airtable from '$lib/images/Airtable.png'
    import Make from '$lib/images/Make.png'
    import Zapier from '$lib/images/Zapier.png'
    import { fly } from 'svelte/transition';
</script>

<div class="grid grid-cols-2 gap-4 w-full">
    <a href="/" in:fly={{ y:100, duration:500, opacity:0 }}>
        <div class="flex flex-col space-y-1 rounded-lg hover:bg-gray-100 bg-white py-0.5 pl-0.5 border border-gray-200" style="opacity: 1; transform: none;">
            <div class="w-full flex flex-row items-center">
                <img src="{Airtable}" alt="" loading="eager" width="full" height="full" class='object-fit w-[50px] h-[50px] mr-4' style="color:transparent">
                <div>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-900 text-lg font-heading tracking-tight">Airtable</p>
                    </div>
                    <p class="text-gray-500 text-sm tracking-tight mt-1">Flexible Spreadsheet Database</p>
                </div>
            </div>
        </div>
    </a>
    <a href="/" in:fly={{ y:100, duration:500, opacity:0 }}>
        <div class="flex flex-col space-y-1 rounded-lg hover:bg-gray-100 bg-white py-0.5 pl-0.5 border border-gray-200" style="opacity: 1; transform: none;">
            <div class="w-full flex flex-row items-center">
                <img src="{Make}" alt="" loading="eager" width="full" height="full" class='object-fit w-[50px] h-[50px] mr-4' style="color:transparent">
                <div>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-900 text-lg font-heading tracking-tight">Make</p>
                    </div>
                    <p class="text-gray-500 text-sm tracking-tight mt-1">Workflow Automation</p>
                </div>
            </div>
        </div>
    </a>
    <a href="/" in:fly={{ y:100, duration:500, opacity:0 }}>
        <div class="flex flex-col space-y-1 rounded-lg hover:bg-gray-100 bg-white py-0.5 pl-0.5 border border-gray-200" style="opacity: 1; transform: none;">
            <div class="w-full flex flex-row items-center">
                <img src="{Zapier}" alt="" loading="eager" width="full" height="full" class='object-fit w-[50px] h-[50px] mr-4' style="color:transparent">
                <div>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-900 text-lg font-heading tracking-tight">Zapier</p>
                    </div>
                    <p class="text-gray-500 text-sm tracking-tight mt-1">App Integration</p>
                </div>
            </div>
        </div>
    </a>
</div>