import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const body = document.body; 

  if (menuButton) {
    function openMenu(event) {
      if (menuList.classList.contains("active")) {
        menuButton.classList.remove("animate");
        menuButton.classList.remove("active");
        menuList.classList.remove("active");

        body.classList.remove("no-scroll"); // Permite scroll

        setTimeout(() => {
          menuList.style.visibility = "hidden";
        }, 400); 
      } else {
        menuButton.classList.add("animate");
        menuButton.classList.add("active");
        menuList.style.visibility = "visible";
        menuList.classList.add("active");

        body.classList.add("no-scroll"); // Impede o scroll

        outsideClick(menuList, ["click", "touchstart"], () => {
          menuButton.classList.remove("animate");
          menuButton.classList.remove("active");
          menuList.classList.remove("active");

          body.classList.remove("no-scroll"); // Permite scroll

          setTimeout(() => {
            menuList.style.visibility = "hidden";
          }, 400);
        });
      }
    }

    menuButton.addEventListener("click", openMenu);
  }
}
