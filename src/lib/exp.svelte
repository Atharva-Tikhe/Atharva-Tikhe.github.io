<script lang="ts">
    import Exp from '$lib/sub-exp.svelte';
    import type {Company} from '$lib/types/institutes';

    const companies: Array<Company> =[
  {
    "time": {
      "year": "2025",
      "duration": "Nov 2025 - Present"
    },
    "location": "Newcastle upon Tyne, UK",
    "image": {
      "src": "",
      "width": ""
    },
    "name": "School of Medicine, Newcastle University",
    "position": "Teaching Resource Creator Intern",
    "experience": "Assist in generation of visual assets for CPD courses within the school of medicine; Manage Canvas pages and APIs for the course content.",
    "skills": "Canvas LMS, API Management, Content Creation, Instructional Design, Visual Asset Generation"
  },
  {
    "time": {
      "year": "2024 - 2025",
      "duration": "May 2024 - Aug 2025"
    },
    "location": "Bangalore, IN",
    "image": {
      "src": "",
      "width": ""
    },
    "name": "MedGenome Labs Inc.",
    "position": "Bioinformatics Engineer",
    "experience": "Designed and deployed pipelines using Nextflow with DRAGEN modules reducing alignment job times by 80%; Managed a suite of pipelines on HPC (PBS); Delivered corporate training to interns; Designed phasing, imputation and PRS pipelines; Wrote optimization plugin in Java to cleanup work folders (saved 300GB/sample); Deployed web-app for internal primer design/QC.",
    "skills": "Nextflow, Bioinformatics, NGS, DRAGEN, HPC (PBS), Java, Pipeline Optimization, AWS, Web Development, PRS, Genomic Data Analysis"
  },
  {
    "time": {
      "year": "2024",
      "duration": "Jan 2024 - May 2024"
    },
    "location": "Pune, IN",
    "image": {
      "src": "",
      "width": ""
    },
    "name": "GreenArray Genomic Research & Solutions",
    "position": "Bioinformatics Intern",
    "experience": "Developed Nextflow pipeline for clinical variant calling of WES data; Created a full-stack webapp to process variant calling data for business needs; Performed primer designing and validation for HPV strains.",
    "skills": "Full-stack Web Development, Clinical Variant Calling, WES, Primer Design, HPV Validation, Nextflow"
  },
  {
    "time": {
      "year": "2022",
      "duration": "Jun 2022 - Aug 2022"
    },
    "location": "Mumbai, IN",
    "image": {
      "src": "",
      "width": ""
    },
    "name": "IIT Bombay",
    "position": "Cheminformatics Intern",
    "experience": "In silico analysis of anti-inflammatory effects of phenolics on jaggery; Performed systemic literature review; Designed and executed molecular docking and dynamics simulations.",
    "skills": "Cheminformatics, Molecular Docking, Molecular Dynamics Simulations, In Silico Analysis, Systemic Literature Review"
  },
  {
    "time": {
      "year": "2021",
      "duration": "Jun 2021 - Dec 2021"
    },
    "location": "Pune, IN",
    "image": {
      "src": "",
      "width": ""
    },
    "name": "Evolvus Biotech PVT. LTD.",
    "position": "Chemical/Bio-informatics Intern & Trainee",
    "experience": "Analysed large-scale data for customers; Assisted in crucial customer data pre-processing and data delivery; Performed curation of biological data.",
    "skills": "Biological Data Curation, Data Pre-processing, Large-scale Data Analysis, Chemical Informatics"
  }
]

</script>

<section class="">
    <!-- <div id='container' class= "flex flex-col md:mx-12"> -->

        <Exp {companies} />


    <!-- </div>  -->
</section>