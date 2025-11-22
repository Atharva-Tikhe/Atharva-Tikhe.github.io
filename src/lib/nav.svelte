<script lang="ts">
    // import '../app.css';
    import {gsap} from 'gsap';
    import { onMount } from 'svelte';
    onMount(() => {
        gsap.fromTo(['#nav-menu > a', '#logo' ], {y: -100, opacity: 0}, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            
        })
            
        const toggle : HTMLElement | null = document.querySelector("#nav-toggle");
        const menu : HTMLElement | null = document.querySelector("#nav-mobile");

        if (toggle != null && menu != null) {
            toggle.addEventListener("click", () => {
                menu.classList.toggle("hidden");
                console.log('removed hidden');
                });
        }    
  
    })

    

</script>

<style>
 :root {--primary: #004e64;
  --accent: #00a5cf;
  --text: #bec4cd;
  --bg-gradient: radial-gradient(ellipse at center, #003564 0%, #000 80%);
  --font: 'Inter', sans-serif;
 }
</style>

<nav class="w-full sticky">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" id="logo" class="text-xl font-semibold  decoration-0 text-white">AT</a>

        <button id="nav-toggle" aria-label="toggle"
        class="md:hidden inline-flex items-center justify-center p-2 bg-white rounded hover:bg-gray-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        </button>
    
        <div id="nav-menu" class="hidden md:flex space-x-6">
            <a href="#" class="text-(--text) hover:text-(--accent)">Home</a>
            <a href="#" class="text-(--text) hover:text-(--accent)">Project</a>
            <a href="#" class="text-(--text) hover:text-(--accent)">Contact</a>

        </div>
    </div>
   <div id="nav-mobile" class="md:hidden hidden px-4 pb-4 space-y-2 flex flex-col">
    <a href="#" class="text-(--text) hover:text-(--accent)">Home</a>
    <a href="#" class="text-(--text) hover:text-(--accent)">Projects</a>
    <a href="#" class="text-(--text) hover:text-(--accent)">Contact</a>
  </div>
</nav>