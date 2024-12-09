document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".clients-slider ul li");
    const indicators = document.querySelectorAll(".clients-slider ol li");
    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
      const ul = document.querySelector(".clients-slider ul");
      ul.style.top = `-${index * 100}%`;
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add("clients-active");
        } else {
          indicator.classList.remove("clients-active");
        }
      });
      currentIndex = index;
    }

    function nextSlide() {
      const nextIndex = (currentIndex + 1) % totalSlides;
      goToSlide(nextIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        goToSlide(index);
      });
    });

    goToSlide(0);
  });