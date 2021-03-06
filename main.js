// Variable Declarations
const navGallery = document.querySelector("#nav-gallery");
const navDropDown = document.querySelector(".nav-dropdown");
const navUl = document.querySelector(".nav-ul");
const collapseIcon = document.querySelector(".collapse-icon");
const closeNav = document.querySelector(".close-nav");
const galleryItem = document.querySelectorAll(".gallery-item");
const showAll = document.querySelector("#show-all");
const musicVideos = document.querySelector("#music-videos");
const events = document.querySelector("#events");
const musicVideo = document.querySelectorAll(".music-video");
const someEvent = document.querySelectorAll(".event");
const imageGridItem = document.querySelectorAll(".image-grid-item");
const imagePreview = document.querySelectorAll(".preview");
// ===================================================================

// Animate on Scroll Script
AOS.init({
  disable: () => {
    return window.innerWidth < 768;
  },
  offset: 200,
  duration: 1000,
  once: true
});
// ================================

// Toggle display Nav Gallery Dropdown
navGallery.addEventListener("click", () => {
  navDropDown.classList.toggle("show");
})

// Toggle Navbar
collapseIcon.addEventListener("click", () => {
  navUl.classList.add("flex-show");
  closeNav.classList.add("show");
})

// Close Navbar
closeNav.addEventListener("click", () => {
  navUl.classList.remove("flex-show");
  closeNav.classList.remove("show");
})
// =============================================

// Change Navbar Color on Scroll
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".active-nav a").css("color" , "#6619ab");
      $("span.active-nav").css("color" , "#6619ab");
    }

    else{
      $(".active-nav a").css("color" , "#000");	
      $("span.active-nav").css("color" , "#000");	
    }
  })
})
//======================================================

// Toggle Image Gallery Preview Button
for(let i = 0; i < imageGridItem.length; i++) {
  imageGridItem[i].addEventListener("mouseenter", () => {
    imagePreview[i].classList.add("show");
  })
  imageGridItem[i].addEventListener("mouseleave", () => {
    imagePreview[i].classList.remove("show");
  })
}
// ====================================================

// Owl Carousel Script
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true
  });
});
// ====================================

// Toggle Gallery Selection
const displayAll = () => {
  musicVideo.forEach(video => {
    video.style.display = "block";
  })
  someEvent.forEach(event => {
    event.style.display = "block";
  })
  showAll.classList.add("active");
  musicVideos.classList.remove("active");
  events.classList.remove("active");
}

const displayOnlyMusic = () => {
  musicVideo.forEach(video => {
    video.style.display = "block";
  })
  someEvent.forEach(event => {
    event.style.display = "none";
  })
  showAll.classList.remove("active");
  musicVideos.classList.add("active");
  events.classList.remove("active");
}

const displayOnlyEvent = () => {
  musicVideo.forEach(video => {
    video.style.display = "none";
  })
  someEvent.forEach(event => {
    event.style.display = "block";
  })
  showAll.classList.remove("active");
  musicVideos.classList.remove("active");
  events.classList.add("active");
}

showAll.addEventListener("click", displayAll);
musicVideos.addEventListener("click", displayOnlyMusic);
events.addEventListener("click", displayOnlyEvent);
//======================================================