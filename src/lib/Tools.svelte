<script>
    import { fly } from 'svelte/transition';
    let { data } = $props();
    console.log(data)
</script>

<div class="grid grid-cols-2 gap-4 w-full">
    {#each data as tools}
    <a href="/" in:fly={{ y:100, duration:500, opacity:0 }} class="hover:scale-105">
        <div class="flex flex-col space-y-1 rounded-lg hover:bg-gray-100 bg-white py-0.5 pl-0.5 border border-gray-200" style="opacity: 1; transform: none;" in:fly={{ y:100, duration:500, opacity:0 }}>
            <div class="w-full flex flex-row items-center">
                <img src={`https://call-until.pockethost.io/api/files/tools/${tools.id}/${tools.image}`} alt="" loading="eager" width="full" height="full" class='object-fit w-[50px] h-[50px] mr-4 rounded-lg' style="color:transparent">
                <div>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-900 text-lg font-heading tracking-tight">{tools.name}</p>
                    </div>
                    <p class="text-gray-500 text-sm tracking-tight mt-1">{tools.description}</p>
                </div>
            </div>
        </div>
    </a>
    {/each}
    
</div>