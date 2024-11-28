<script>
	import Blog from "$lib/Blog.svelte";
	import Newsletter from "$lib/Newsletter.svelte";

    export let data;

</script>

<div class="opacity: 1; transform: none;">
    <div>
        <Blog data={data.records} />
    </div>
    <Newsletter />
</div>