const burgerMenu = document.querySelector(".bar");
const links = document.querySelector(".nav-links");

console.log(links);

function toggle() {
  console.log("first");
  links.classList.toggle("hide");
}

burgerMenu.addEventListener("click", toggle);
