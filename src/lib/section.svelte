<script lang="ts">
    import type {myObject} from "$lib/types";
	import Item from "./item.svelte";

    let {objs} : {objs : myObject[]} = $props();


</script>

<div class="section-container h-dvh bg-(--bg)">
    {#each objs as obj, index}
        {#if index == 0}
            <Item item = {obj} header = {true}/>    
        {:else}
            <Item item = {obj} header = {false}/>    
        {/if}
    {/each}
</div>
