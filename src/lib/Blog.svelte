<script>
    import { fly, scale } from "svelte/transition";
    let { data } = $props(); // Correctly extract data from props
</script>




    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-x-10 gap-y-5" in:fly={{ y:100, duration:500, opacity:0 }}>
        {#each data as post}
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:scale-105">
            <a href="/blog/{post.slug}">
                <img src={`https://call-until.pockethost.io/api/files/posts/${post.id}/${post.thumbnail}`} alt="" class="max-h-36 w-full rounded-lg mb-3" style="color: transparent;">
                <div class="text-sm mb-1 font-medium text-gray-900">{post.title}</div>
                <div class="max-w-xs text-sm font-normal text-gray-500">{post.introduction}</div>
            </a>
        </div>
        {/each}
    </div>
    
  