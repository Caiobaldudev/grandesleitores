import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function openMenu(event) {
      if (menuList.classList.contains("active")) {
        menuButton.classList.remove("animate");
        menuButton.classList.remove("active");

        menuList.classList.remove("active");
        setTimeout(() => {
          menuList.style.visibility = "hidden";
        }, 400); 
      } else {
        menuButton.classList.add("animate");
        menuButton.classList.add("active");
        menuList.style.visibility = "visible";
        menuList.classList.add("active");

        outsideClick(menuList, ["click", "touchstart"], () => {
          menuButton.classList.remove("animate");
          menuButton.classList.remove("active");

          menuList.classList.remove("active");
          setTimeout(() => {
            menuList.style.visibility = "hidden";
          }, 400);
        });
      }
    }
    
    menuButton.addEventListener("click", openMenu);
  }
}
