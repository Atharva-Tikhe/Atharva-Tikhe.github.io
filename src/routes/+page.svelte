<script lang="ts">
    
    import type {myObject} from "$lib/types";


    let myobjs: myObject[] = [{
        sectionHeader:"Education",
        year: "2026",
        post: "Msc. Bioinformatics",
        location: "Newcastle University, UK",
        imgSrc: {src: "ncl-log.svg", width: "10%", height: "20%"}
    },
    {
        sectionHeader:"Education",
        year: "2024",
        post: "MTech. Bioengineering",
        location: "MIT ADT University, IN",
        imgSrc: {src: "mitu.png", width: "10%", height: "20%"}
    },
    ];

        let myexp: myObject[] = [{
        sectionHeader:"Experience",
        year: "2025",
        post: "WebDev Volunteer",
        location: "RFC UK, Newcastle upon Tyne, UK",
        imgSrc: {src: "mg-logo.webp", width: "25%", height: "17%"}
    },
    {
        sectionHeader:"Experience",
        year: "2024-2025",
        post: "Bioinformatics Engineer",
        location: "MedGenome Labs, IN",
        imgSrc: {src: "mg-logo.webp", width: "20%", height: "40%"}
    },
    ];
    
    let myproj: myObject[] = [{
        sectionHeader:"Projects",
        year: "2025",
        post: "Website",
        location: "",
        imgSrc: {src: "mg-logo.webp", width: "25%", height: "17%"}
    },
    {
        sectionHeader:"Projects",
        year: "2021",
        post: "qPCR Animation Video",
        location: "MIT ADT University, IN",
        imgSrc: {src: "mg-logo.webp", width: "20%", height: "40%"}
    },
    ];

    // myobjs.push(o1);
    //<Section  sectionHeader="Education" year="2026" post="Msc. Bioinformatics" location="Newcastle University" imgSrc ="/static/lol" />


    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
	import Section from "$lib/section.svelte";

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrambleTextPlugin);

    onMount(() => {
    gsap.fromTo("#helix", { opacity: 0 }, { opacity: 0.5 ,duration: 1 });
    const helixRotations = [
        { target: "#helix", rotation: 180 },
        { target: "#helix2", rotation: -180 },
        { target: "#helix3", rotation: 270 },
    ];

    helixRotations.forEach(({ target, rotation }) => {
        gsap.to(target, {
            rotation,
            transformOrigin: "center center",
            duration: 40,
            repeat: -1,
            ease: "none",
        });
    });
        
    gsap.to("#helix3", {
        rotationY: 360,
        transformOrigin: "center center",
        duration: 4,
        repeat: -1,
        ease: "none",
        delay: 1.5,
    });

    // Gentle floating motion for the whole DNA SVG
    gsap.to("#dna-bg", {
    y: 70,
    duration: 4,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    });

    // Hero text fade-in with stagger


    // Dynamic gradient shimmer
    gsap.to("#strandGradient stop:first-child", {
    attr: { offset: "0.5", "stop-color": "#118589" },
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    });

    gsap.to("#strandGradient stop:last-child", {
    attr: { offset: "0.5", "stop-color": "#8435bd" },
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    });

    let tl = gsap.timeline();

    tl.from(
        ".hero-content > *", {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out"
        });

    tl.to("#slogan", {
        // delay: 0.5,
        duration: 1,
        opacity: 1,
        ease: "power2.out",
        scrambleText: {
            text: 'Turning biological data into meaningful insights',
            chars: "ATGC",
            revealDelay: 0.5,
            speed: 0.3,
            

        }
    });


    })
</script>


<section id="hero" class="items-center h-dvh text-center grid  grid-rows-[100px_minmax(auto,500px)]">
    <div id="slogan-container" class="row-1 text-xl text-[--font]">
        <p id="slogan"></p>
    </div>
        <div class="hero-content row-2 align-top text-[--font]">
            <!-- <p id="slogan" class="mb-2 text-xl">Turning biological data into meaningful insights</p> -->
            <h1 class=" font-bold text-5xl text-[--font]">Hi, I'm <span class="highlight">Atharva</span></h1>
            <h3 class="m-4 text-xl">Bioinformatics Engineer & Researcher</h3>
            <!-- <a href="#projects" class="btn btn-outline-primary px-4 py-2">Explore My Work</a> -->
        </div>
        <svg id="dna-bg" viewBox="0 0 800 600"  aria-hidden="true" preserveAspectRatio = "xMidYMid slice">
            <defs>
                <linearGradient id="strandGradient" x1="0" x2="1">
                    <stop offset="0" stop-color="#00A5CF" stop-opacity="0.5" />
                    <stop offset="1" stop-color="#004E64" stop-opacity="0.5" />
                </linearGradient>
            </defs>
            
            <g id="helix" transform="translate(0,0)">
            
                <path id="strand1" d="M300 0 C240 80 360 160 300 240 C240 320 360 400 300 480 C240 560 360 640 300 720" 
                    stroke="url(#strandGradient)" stroke-width="2.5" fill="none" stroke-linecap="round" />
                <path id="strand2" d="M300 0 C360 80 240 160 300 240 C360 320 240 400 300 480 C360 560 240 640 300 720"
                    stroke="rgba(0,165,207,0.2)" stroke-width="2.5" fill="none" stroke-linecap="round" />

                <g id="rungs" stroke="rgba(0,165,207,0.12)" stroke-width="1.6" stroke-linecap="round"></g>
            </g>
            

            <g id="helix2" transform="translate(0,0)">
            
                <path id="strand1" d="M400 0 C340 180 460 260 400 340 C340 420 460 500 400 580 C340 660 460 740 400 820" 
                    stroke="url(#strandGradient)" stroke-width="2.5" fill="none" stroke-linecap="round" />
                <path id="strand2" d="M400 0 C460 180 340 260 400 340 C460 420 340 500 400 580 C460 660 340 740 400 820"
                    stroke="rgba(0,165,207,0.2)" stroke-width="2.5" fill="none" stroke-linecap="round" />

                <g id="rungs" stroke="rgba(0,165,207,0.12)" stroke-width="1.6" stroke-linecap="round"></g>
            </g>

            <g id="helix3" transform="translate(0,0)">
            
                <path id="strand1" d="M600 0 C540 380 660 460 600 540 C540 620 660 700 600 780 C540 860 660 940 600 1020" 
                    stroke="url(#strandGradient)" stroke-width="2.5" fill="none" stroke-linecap="round" />
                <path id="strand2" d="M600 0 C660 380 540 460 600 540 C660 620 540 700 600 780 C660 860 540 940 600 1020"
                    stroke="rgba(0,165,207,0.2)" stroke-width="2.5" fill="none" stroke-linecap="round" />

                <g id="rungs" stroke="rgba(0,165,207,0.12)" stroke-width="1.6" stroke-linecap="round"></g>
            </g>
        </svg>
        
</section>

<div class="grid grid-cols-2 h-dvh">
    <div class=" col-1">
        <Section objs = {myobjs} />
    </div>
    <div class=" col-2">
        <Section objs = {myexp} />
    </div>
</div>


<div class="grid grid-cols-2 h-dvh">
    <div class=" col-1">
        <Section objs = {myproj} />
    </div>
</div>
