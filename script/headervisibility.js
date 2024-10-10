export default function initHeaderVisibility() {
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // esconde o header
      header.style.transform = "translateY(-100%)";
    } else {
      // mostra o header
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });
}
