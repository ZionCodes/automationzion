<script>
	import '../app.css';
	import Top from '$lib/Top.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Workflow from "$lib/images/workflow.png"
	let { children } = $props();
</script>



<main class='flex items-center justify-between w-full flex-col p-8 min-h-screen'>
	<div class="w-full max-w-3xl">
		<div><Top /></div>
		<div class="border-b w-full my-8"></div>
		<div><Navbar /></div>
		{@render children()}
	</div>
	<div class="text-center flex items-center justify-center flex-col mt-16 text-sm">
		<div>
			<img src={Workflow} alt="Worflow" width="18" height="18">
		</div>
		<div>© 2024 - Zion</div>
	</div>
</main>