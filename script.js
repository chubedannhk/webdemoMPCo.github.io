// alert('nguyenhoankjgia')
// function slider show
let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) {
     slideIndex = index;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// hiệu ứng scoll chuôttj
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "white";
    navbar.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "linear-gradient(rgba(206, 206, 206, 0.83), transparent)";
    navbar.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
  }
});



// Lấy phần tử .item_nav_farther
const itemNavFarther = document.querySelector('.item_nav_farther');
// Lấy thẻ hình ảnh
var logoImage = document.querySelector(".item_logo_menu_navbar img");
// Thêm sự kiện cho sự cuộn của cửa sổ
window.addEventListener('scroll', function () {
  // Lấy vị trí cuộn hiện tại
  const scrollPosition = window.scrollY;

  // Thêm hoặc xóa class "scroll" tùy theo vị trí cuộn
  if (scrollPosition > 0) {
    itemNavFarther.classList.add('scroll');
    logoImage.style.width = "70px";
    logoImage.style.height = "70px";
  } else {
    itemNavFarther.classList.remove('scroll');
    logoImage.style.width = "90px";
    logoImage.style.height = "90px";
  }
});



