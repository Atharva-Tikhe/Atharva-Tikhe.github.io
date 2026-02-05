<script lang="ts">
    import type { Institute } from "$lib/types/institutes";
    const {institute} = $props<{institute: Institute}>();

</script>

<div id="institute" class=' flex flex-col md:flex-row max-sm-justify-center items-center text-white gap-4 border-b-2 border-gray-500'>
    <div id="year-container" class="flex flex-col border-gray-500">
        <div id="year" class="font-semibold text-gray-400 ">{institute.year}</div>
    </div>
    <img src={institute.image.src} class="{institute.image.width} pl-1 border-l border-gray-500" alt="">
    <div id="text" class= "flex flex-col gap-2">
        <p class="text-2xl font-semibold">{institute.degree}</p>
        <div class= 'flex flex-row items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p> {institute.location} </p>
        </div>
        <div class="mt-3">
            <p> <span class="font-semibold">Thesis - </span> <span class="font-light italic"> "{institute.thesis}" </span> </p>
            <p> <span class="font-semibold">PI - </span> <span class="font-light italic"> {institute.pi} </span> </p>
            <p class = "text-gray-400"> {institute.keywords} </p>
        </div>

    </div>
</div>
