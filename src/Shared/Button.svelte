<script>
    export let flat = false;
    export let type = "primary";
</script>

<button class={type} class:flat={flat} on:click>
    <slot></slot>
</button>

<style>
    button{
        padding: 1rem 2rem;
        border-radius: 5px;
        text-align: center;   
        box-shadow: 0 2px 4px rgba(0,0,0, 0.2);     
        font-weight: bold;
        color:white;
        cursor:pointer;
    }
    .primary{
        background: rgb(253, 108, 108);
    }
    .secondary{
        background: hsl(169, 39%, 40%);        
    }
    .flat{
        box-shadow: none;
    }
</style>