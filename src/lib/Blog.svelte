<script>
    import { fly } from "svelte/transition";
    let { data } = $props();
    console.log(data) // Correctly extract data from props
</script>
  
  <!-- <div class="flex flex-col gap-3 w-full" in:fly={{ y:100, duration:500, opacity:0 }}>
    {#each data as post}
    <a href="/blog/{post.slug}">
      <div class="flex flex-col space-y-1 rounded-lg hover:bg-gray-100 bg-white py-0.5 pl-0.5 border border-gray-200" style="opacity: 1; transform: none;">
          <div class="w-full flex flex-row items-center">
              <img src={`http://127.0.0.1:8090/api/files/posts/${post.id}/${post.thumbnail}`} alt="" loading="eager" width="full" height="full" class='object-fit w-[50px] h-[50px] mr-4 rounded-lg' style="color:transparent">
              <div>
                  <div class="flex items-center gap-2">
                      <p class="text-md font-medium text-gray-900">{post.title}</p>
                  </div>
                  <p class="text-gray-500 text-sm tracking-tight mt-1">{post.introduction}</p>
              </div>
          </div>
      </div>
  </a>
    {/each}
    </div> -->




    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-x-10 gap-y-5" in:fly={{ y:100, duration:500, opacity:0 }}>
        {#each data as post}
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-100">
            <a href="/blog/{post.slug}">
                <img src={`http://127.0.0.1:8090/api/files/posts/${post.id}/${post.thumbnail}`} alt="" class="max-h-48 w-full rounded-lg mb-3" style="color: transparent;">
                <div class="text-sm mb-1 font-medium text-gray-900">{post.title}</div>
                <div class="max-w-xs text-sm font-normal text-gray-500">{post.introduction}</div>
            </a>
        </div>
        {/each}
    </div>
    
  