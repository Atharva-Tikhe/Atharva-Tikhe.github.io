<script lang="ts">
    import Institutes from '$lib/sub-edu.svelte';
    import type {Institute} from '$lib/types/institutes';

    const inst1: Institute = {
        degree: "Msc Bioinformatics",
        name: "Newcastle University",
        image: "icons/newcastle-short.png",
        pi: "Prof Anthony Moorman",
        thesis: "Development of a semi-automated pipeline for processing and analysing of SNP array files",
        location: "Newcastle, UK",
        keywords: "Genomics • Cancer • Copy Number Alterations"
    }

    const inst2: Institute = {
        degree: "MTech. Bioengineering",
        name: "MIT-ADT University | School of Bioinengineering Sciences & Research",
        image: "icons/mit-short.png",
        pi: "Dr. Shama Mujawar, Dr. Preeti Arora",
        thesis: "Nextflow pipeline for benchmarking alignments for WES",
        location: "Pune, IN",
        keywords: "Genomics • WES • Preeclampsia • Nextflow"
    }
</script>

<section class=" bg-gray-800">
 <div class= "flex flex-col md:mx-12 md:my-10 m-16 gap-8">

    <Institutes institute={inst1} />

    <Institutes institute={inst2} />

 </div> 
</section>