var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "65% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "130%",
    rotate: "-360",
    left: "5%",
  },
  "orange"
);

tl.to(
  "#orange-slice",
  {
    top: "165%",
    rotate: "-360",
    left: "23%",
  },
  "orange"
);

tl.to(
  "#orange",
  {
    width: "15%",
    top: "165%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf1",
  {
    top: "110%",
    rotate: "-120",
    left: "80%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "200",
    left: "2%",
  },
  "orange"
);

// seconf time line
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 70%",
    scrub: true,
    // markers: true,
  },
});

tl2.from(
  ".lemon",
  {
    rotate: "-90deg",
    left: "-40%",
    top: "-30%",
  },
  "ca"
);
tl2.from(
  "#sprite",
  {
    // rotate: "-20deg",
    left: "-50%",
    top: "-10%",
  },
  "ca"
);

tl2.from(
  ".apple",
  {
    top: "-42%",
    left: "50%",
  },
  "ca"
);
tl2.from(
  "#cocacola",
  {
    top: "-10%",
    left: "50%",
  },
  "ca"
);

tl2.to(
  "#orange-slice",
  {
    width: "15%",
    left: "43%",
    top: "205%",
  },
  "ca"
);
tl2.to(
  "#fanta",
  {
    width: "22%",
    top: "218%",
    left: "39%",
  },
  "ca"
);

// tl2.to(
//   "#orange-slice",
//   {
//     top: "210%",
//     left: "50%",
//   },
//   "ca"
// );
// tl2.to(
//   "#fanta",
//   {
//     top: "210%",
//     left: "50%",
//   },
//   "ca"
// );
