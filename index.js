
const alies = document.querySelectorAll(".the-bottom li")

// gsap.fromTo(".the-bottom  li",{
   
//     y:"-100"
// },{
//     y:"0px",
//   opacity:1,
//     stagger:0.05
    
// })
const mobileMenu = document.querySelector(".help")
const mobileMenutwo = document.querySelector(".mobile-menu")
console.log(mobileMenu);
const mobileScreenMenu = document.querySelector(".mobile-screen-menu")
 const spans = document.querySelectorAll(".mobile-screen-menu span")

mobileMenu.onclick = function(){
 mobileScreenMenu.classList.toggle("clicked")
}
mobileMenutwo.onclick = function(){
 mobileScreenMenu.classList.toggle("clicked")
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
  
      if(intersecting){
        gsap.to(".card-1",{
            y:"0",
           opacity:1,
      
        })
        gsap.to(".card-2",{
            y:"0",
           opacity:1,
      delay:0.2
        })
        gsap.to(".card-3",{
            y:"0",
           opacity:1,
           delay:0.5
        })
        gsap.to(".card-4",{
            y:"0",
           opacity:1,
           delay:0.6
        })
      }
      
    })
  },{threshold:0.2})
  observer.observe(document.querySelector(".card-1"))

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let headerTitles = document.querySelectorAll(".section-title h2")

  document.getElementById("languageSelect").addEventListener("change", function() {
    var selectedValue = this.value;
  console.log(selectedValue);
    if (selectedValue !== "") {
      window.location.href = selectedValue;
    }
  });


  var swiper5El = document.querySelector(".mySwiper5");
  Object.assign(swiper5El, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },
  });
  swiper5El.initialize()


  var swiperEl = document.querySelector(".register-slider");

  Object.assign(swiperEl, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  swiperEl.initialize()