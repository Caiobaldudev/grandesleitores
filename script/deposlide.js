export default function initDepoSlide() {
  const slide = document.querySelector('.slide');
  const slides = document.querySelectorAll('.slide li');
  const totalSlides = slides.length;
  let currentSlide = 0;
  let intervalId;

  // próximo slide
  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop infinito
    updateSlidePosition();
  }

  // Função slide anterior
  function goToPreviousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop infinito para trás
    updateSlidePosition();
  }

  // Função atualizar posição slide
  function updateSlidePosition() {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Função iniciar autoplay
  function startAutoplay() {
    intervalId = setInterval(goToNextSlide, 4000);
  }

  // Função parar autoplay
  function stopAutoplay() {
    clearInterval(intervalId);
  }

  const prevButton = document.querySelector('#depoimentos .prev');
  const nextButton = document.querySelector('#depoimentos .next');

  prevButton.addEventListener('click', () => {
    stopAutoplay();
    goToPreviousSlide();
    startAutoplay();
  });

  nextButton.addEventListener('click', () => {
    stopAutoplay();
    goToNextSlide();
    startAutoplay();
  });

  startAutoplay();
}
