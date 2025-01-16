// document.addEventListener("DOMContentLoaded", () => {
//     const slides = document.querySelectorAll(".slideshow .slide");
//     let currentIndex = 0;

//     const changeSlide = () => {
//       slides[currentIndex].classList.remove("active");
//       currentIndex = (currentIndex + 1) % slides.length;
//       slides[currentIndex].classList.add("active");
//     };

//     slides[currentIndex].classList.add("active");
//     setInterval(changeSlide, 5000); // Ganti slide setiap 5 detik
//   });

document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Fungsi untuk mengupdate slider
  const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Fungsi untuk tombol Next
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  };

  // Fungsi untuk tombol Previous
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  };

  // Event Listener untuk navigasi
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Slider otomatis
  setInterval(nextSlide, 5000); // Setiap 5 detik pindah slide
});
