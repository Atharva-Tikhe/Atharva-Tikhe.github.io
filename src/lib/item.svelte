<script lang="ts">
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
    import type {myObject} from "$lib/types";
    gsap.registerPlugin(ScrollTrigger);


    // type myObject = {
    //     sectionHeader: string,
    //     year: string,
    //     post: string,
    //     location: string,
    //     imgSrc: string
    // }


    let {item, header} : {item : myObject, header: boolean} = $props();

    onMount(() => {
        let tl = gsap.timeline();

        tl.to(".section-header", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".section-header", 
                scrub: 1
            }
        })
        .to(".section", {opacity: 1})
        .fromTo(["#post-container > *"],{x: -100, opacity: 0}, {
            x: 0,
            duration: 1,
            opacity: 1,
            stagger: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#post-container",
                start: "-250px center",
                scrub: 1
            }
        })
        
    });
</script>

<div>
    {#if header}
        <h3 class="section-header opacity-0 text-(--text) text-4xl font-bold my-5 mx-1 pl-12 pt-4">{item.sectionHeader}</h3>
    {/if}
    <section class="text-(--text) section w-full left-[10%] mx-[5%] my-5">    
    
        <div id="post-container" class="flex">
            <div class="line"></div>
            <div class="year font-bold">{item.year}</div>
            <div class="box mx-7">
                <img class="w-[{item.imgSrc.width}] h-[{item.imgSrc.height}]" src="/{item.imgSrc.src}" alt="" id="logo">
                <p class=" mx-2 text-2xl">{item.post}</p>
                <p class="mx-2 text-xl">{item.location}</p>
            </div>

        </div>

        <!-- <div class="edu-block mt-0.5" id="post-container">
            <div class="line rounded-bl-md w-1 h-0 absolute left-[-5%] bg-red-400 opacity-0 "></div>
            
            <div class="year absolute -left-full font-bold">{item.year}</div>

            <div class="box absolute -left-11 opacity-0">
                <img class="w-[10%] h-[25%]" id="logo" src="/{item.imgSrc}" alt="Title" />
                <h4 class="mt-3 text-2xl">{item.post}</h4>
                <p class="text-xl">{item.location}</p>
            </div>
        </div> -->
    </section>
</div>