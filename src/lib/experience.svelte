<script lang="ts">
    import type { Company } from "$lib/types/institutes";
    import {onMount} from "svelte";
    import {gsap} from 'gsap';

    const {company, extra} = $props<{company: Company, extra: any}>();
    
    onMount(() => {
        const tl = gsap.timeline();

        tl.fromTo("#marker", {top: 300, opacity: 0}, {top: 0, opacity: 1, backgroundColor: "rgba(104, 31, 62, 1)", duration: 1, ease: "power1"}).fromTo("#ruler", {opacity: 0}, {opacity: 1, stagger: 0.5});
        
        gsap.fromTo("#unique", {backgroundColor: "#004430"}, {
            opacity: 1,
            // scale: 1.2,
            backgroundColor: "#009368",
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })

    });



</script>

<div class="flex md:mx-12 {extra}">
    <div class="h-full flex flex-col items-center">
        <div id="{extra != ""? "unique": "marker"}" class="relative top-0 left-0 md:block md:w-5 md:h-5 bg-gray-700 rounded-2xl"></div>
        <div id="ruler" class="relative top-0 left-0 md:block md:h-full md:w-0.5 md:min-h-52 bg-gray-700 align-center"></div>
    </div>
    <div id="year-container" class="flex flex-col border-gray-500 basis-2l mr-3 ml-1">
        <div id="year" class="relative top-0.5 font-semibold text-sm text-gray-400 ">{company.time.year}</div>
    </div>
    <!-- <img src={company.image.src} class="{company.image.width}" alt=""> -->
    <div id="text" class= "flex flex-col gap-2">
        <p class="text-2xl font-semibold">{company.position}, <span class=" font-light  italic">{company.name}</span></p>
        <div class= 'flex flex-row items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p> {company.location} </p>
        </div>
        <div class="mt-3">
            <p><span class="font-light"> "{company.experience}" </span> </p>
            <p class = "text-gray-400"> {company.skills} </p>
        </div>
    </div>
</div>