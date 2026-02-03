// === DNA Helix & Hero Animations ===

gsap.registerPlugin(ScrollTrigger);
// Fade in helix
gsap.fromTo("#helix", { opacity: 0 }, { opacity: 0.5 ,duration: 1 });

// Continuous helix rotations
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

// Extra subtle 3D spin on helix3 for depth
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
gsap.from(".hero-content > *", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 1.5,
  ease: "power2.out",
  delay: 1.0
});

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


gsap.fromTo('.navbar-nav > *', {
  y : -100,
  opacity: 0,
}, {y: 0, opacity: 1, stagger: 0.1} )

// gsap.fromTo(".navbar", {
//   y: -100,
//   opacity: 0
// }, { y : 0, opacity: 1, stagger: 1, duration: 2})




let tl = gsap.timeline();

tl.to(".education-section", {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".education-section", 
    start: "-200px center",
    end: "bottom center",
    scrub: true,
  }
}).to(".line", {
  height: "100%",
  // ease: "none",
  // duration: 3,
  // opacity: 1,
  scrollTrigger : {
    trigger: ".marker2026",
    start: "-150px center",
    end: "bottom center",
    scrub: true
  }
}).to([".year2026", '.year2024'], {
  left: "-50px",
  // duration: 3,
  scrollTrigger : {
    trigger: "#edu2026", 
    start: "-150px center",
    end: "bottom center",
    scrub: 1,
    // markers: true 
  }
}).to([".box2026", ".box2024"], {
  left: "45px",
  opacity: 1,
  scrollTrigger: {
    trigger: "#edu2026",
    start: "-150px center",
    end: "bottom center",
    scrub: 2
  }
})
