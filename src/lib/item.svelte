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

        tl.to(".section", {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".section", 
            start: "-200px center",
            end: "bottom center",
            scrub: true,
        }
        }).to(".line", {
        height: "100%",
        // ease: "none",
        // duration: 3,
        opacity: 1,
        scrollTrigger : {
            trigger: ".marker",
            start: "-150px center",
            end: "bottom center",
            scrub: true
        }
        }).to(".marker", {
            left : "-90px",
            scrollTrigger: {
                trigger: ".marker", 
                scrub: true
            }
        })
        .to(".year", {
        left: "-50px",
        // duration: 3,
        scrollTrigger : {
            trigger: "#post-container", 
            start: "-150px center",
            end: "bottom center",
            scrub: 1,
            // markers: true 
        }
        }).to(".box", {
        left: "44px",
        opacity: 1,
        scrollTrigger: {
            trigger: "#post-container",
            start: "-150px center",
            end: "bottom center",
            scrub: 2
        }
        })

    })
</script>

<div>
    {#if header}
        <h3 class="section-header text-(--text) text-4xl font-bold my-5 mx-1 pl-12 pt-4">{item.sectionHeader}</h3>
    {/if}
    <section class="text-(--text) section relative w-full left-[10%] opacity-0 my-auto mx-[5%]">    
                

        <div class="edu-block mt-0.5" id="post-container">
            <div class="line rounded-bl-md w-1 h-0 absolute left-[-5%] bg-red-400 opacity-0 "></div>
            
            <!-- <div class="marker w-4 h-4 bg-[#4a5568] rounded-[50%] absolute -left[100%] top-0"></div> -->
            
            <div class="year absolute -left-full font-bold">{item.year}</div>

            <div class="box absolute -left-11 opacity-0">
                <img class="w-[10%] h-[25%]" id="logo" src="/{item.imgSrc}" alt="Title" />
                <h4 class="mt-3 text-2xl">{item.post}</h4>
                <p class="text-xl">{item.location}</p>
            </div>
        </div>
    </section>
</div>