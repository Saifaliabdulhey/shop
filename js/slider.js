const slider1 = document.getElementById("glide1");
const slider2 = document.getElementById("glide2");
const glide3 = document.getElementById("glide3");

if (slider1) 
    new Glide(slider1,{
        type:"carousel",
        startAt:0,
        autoplay:2000,
        hoverpause:true,
        perView:1,
        animationDuration:800,
        animationTimingFunc:"linear",
    }).mount();


if(slider2)
new Glide(slider2,{
    type:"carousel",
    startAt:0,
    autoplay: true,
    hoverpause:false,
    perView:5,
    animationDuration:800,
    animationTimingFunc:"linear",
    breakpoints:{
        1200:{
            perView:3,
        },
        768:{
            perView:2,
        }
    },
}).mount();

if (glide3) {
    new Glide(glide3, {
      type: "carousel",
      startAt: 0,
      perView: 3,
      rewin: false,
      autoplay: 3000,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        998: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }