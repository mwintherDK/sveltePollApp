<script>
	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import Tabs from "./Shared/Tabs.svelte"
	import CreatePoll from "./components/CreatePoll.svelte";
	import PollList from "./components/PollList.svelte";


	//Tabs
	let items = ["Current polls", "Add new poll"]
	let activeItem = "Current polls";
	function handleTabClick(e){		
		activeItem = e.detail;
	}


	
	// New poll
	function handleCreateNewForm(){
		activeItem = "Current polls";
	}

</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:clickTab={handleTabClick} />
	{#if activeItem === items[0]}
	<PollList />
	{:else if activeItem === items[1]}
	<CreatePoll on:formSubmitted={handleCreateNewForm} />
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>