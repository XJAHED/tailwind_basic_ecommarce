const rightBtn = document.getElementById("rightbtn");
const leftBtn = document.getElementById("leftbtn");
const carouselh1 = document.querySelector("#carousel h1");
const carouselp = document.querySelector("#carousel p");

rightBtn.addEventListener("click", function () {
  carouselh1.innerText = "Products  page two";
  carouselp.innerText = "Discover our new collection";
});

leftBtn.addEventListener("click", function () {
  carouselh1.innerText = "Products ";
  carouselp.innerText = "Discover our new collection";
});
