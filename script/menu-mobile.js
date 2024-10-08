// import outsideClick from ''

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function openMenu(event) {
      menuButton.classList.toggle("animate");
      menuButton.classList.toggle("active");

      if (menuList.classList.contains("active")) {
        menuList.classList.remove("active");
        setTimeout(() => {
          menuList.style.visibility = "hidden";
        }, 400);
      } else {
        menuList.style.visibility = "visible";
        menuList.classList.add("active");
      }
    }
    menuButton.addEventListener("click", openMenu);
  }
}
