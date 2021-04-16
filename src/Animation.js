export let pageAnimation = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: "0.75",
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export let titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export let fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export let photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
export let LineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
export let slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};
export let slidercontainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

export let scrollReveal = {
  hidden: {
    opacity: 1,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export let movieSlider = {
  hidden: {
    width: "0%",
    transition: { duration: 0.5 },
  },
  show: {
    width: "100%",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};
