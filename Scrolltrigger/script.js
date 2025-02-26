gsap.to("#page2 h1", {
  transform: "translateX(-140%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 5,
    markers: false,
    start: "top 0",
    end: "top -100%",
    pin: true,
  },
});
