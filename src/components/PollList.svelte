<script>
    import PollDetails from "./PollDetails.svelte";
    import PollStore from "../stores/PollStore";
    import {fade, slide, scale} from "svelte/transition";

</script>
<div class="poll-list">
{#each $PollStore as poll}
<div transition:fade>

    <PollDetails {poll} />
</div>
{/each}
</div>
<style>
    .poll-list {
        display: flex;
        flex-wrap: wrap;
    }

    .poll-list div{
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,.2);
        width: 48%;
        margin: 1%;
        padding: 20px;
        box-sizing: border-box;      
    }
</style>