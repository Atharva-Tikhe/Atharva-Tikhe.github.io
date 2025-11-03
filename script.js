// Animate helix rotation + subtle vertical drift
gsap.to("#helix", {
  // rotation: 360,
  rotation:180,
  transformOrigin: "center center",
  duration: 40,
  repeat: -1,
  ease: "none"
});

gsap.to("#helix2", {
  rotation: -270,
  transformOrigin: "center center",
  duration: 40,
  repeat: -1,
  ease: "none"
});

gsap.to("#helix3", {
  // rotation: 360,
  rotationY: 360,
  transformOrigin: "center center",
  duration: 4,
  repeat: -1,
  ease: "none"
});

gsap.to("#dna-bg", {
  y: 70,
  duration: 4,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// Hero text fade-in
gsap.from(".hero-content > *", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 1.5,
  // ease: "power2.out",
  ease: "power2.out",
  delay: 1.0
});

gsap.to("#strandGradient stop:first-child", {
  attr: { offset: "0.5" },
  attr: {"stop-color": "#118589ff"},
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to("#strandGradient stop:last-child", {
  attr: { offset: "0.5" },
  attr: {"stop-color": "#118589ff"},
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});



// stroke="rgba(0,165,207,0.64)" 