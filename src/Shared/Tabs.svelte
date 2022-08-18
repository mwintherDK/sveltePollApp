<script>
    export let items;
    export let activeItem;
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();


</script>

<div class="tabs">
    <ul>
        {#each items as item}
        <li on:click={() => dispatch("clickTab", item)}>
            <div class:active={item == activeItem}>{item}</div>
        </li>
        {/each}
    </ul>

</div>

<style>
    .active{
        color: rgb(233, 114, 114);
        border-bottom: 2px solid rgb(233, 114, 114);
        padding-bottom: 8px;;
    }

    .tabs{
        margin-bottom: 40px;
    }

    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        padding: 1rem;
        font-size: 18px;
        color: rgba(136, 136, 136, 0.867);
        cursor: pointer;
    }
</style>