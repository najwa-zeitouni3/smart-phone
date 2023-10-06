let subDropDownList = document.querySelector(".sub-dropdown-list");
let btn = document.querySelector(".sub-dropdown-btn");


const toggle = () => subDropDownList.classList.toggle("active");
window.addEventListener('click' , function(e){
if(!btn.cdntains(e.target))subDropDownList.classList.remove("active");
});

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .slide-button");

    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");

    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown" ,(e) => {
       const startX = e.clientX;
       const thumbPosition = scrollbarThumb.offsetLeft;
       const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetwidth;
        const boundedPosition = Math.max(0, Math.min( maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        scrollbarThumb.style.left = `${newThumbPosition}px`;
        imageList.scrollLeft = scrollPosition;
       }

       const handleMouseUp = () => {
        document.removeEventListener("mousemove" , handleMouseMove);
        document.removeEventListener("mouseup" , handleMouseUp);
       }
       document.addEventListener("mousemove" , handleMouseMove);
       document.addEventListener("mouseup" , handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click" , () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy ({ left: scrollAmount , behavior: "smooth"})
        });
    });
    const  handleSlidebuttons = () => {
        slideButtons[0].computedStyleMap.display = imageList.scrollLeft <= 0 ? "none" : "black";
        slideButtons[1].computedStyleMap.display = imageList.scrollright >= maxScrollLeft ? "none" : "black";
    }
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetwidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    imageList.addEventListener("scroll" , () => {
        handleSlidebuttons();
    })
}
window.addEventListener("load" , initSlider);

var circle = document.querySelector('.circle');
var circle = document.querySelector('.circle-1');

var circle = document.querySelector('.circle-2');
var circle = document.querySelector('.circle-3');

function toggleLight() {
  if (circle.style.backgroundColor === 'red') {
    circle.style.backgroundColor = 'black';
  } else {
    circle.style.backgroundColor = 'red';
  }
  
}
setInterval(toggleLight, 1000);


let swiperCards = new Swiper('.card-content', {
    
    loop: true,
    spaceBetween:32,
    grabCursor: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:{
        600:{
            slidePerView: 2,
        },
        968:{
            slidePerView: 3,
        },
    },
   
  });
  



