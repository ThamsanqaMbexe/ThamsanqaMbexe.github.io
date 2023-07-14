document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.querySelector(".menu");
  
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
  
