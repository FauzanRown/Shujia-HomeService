
// scroll event listener
window.addEventListener("scroll", function () {
    const navTop = document.getElementById("NavTop");
    const containerNav = document.getElementById("ContainerNav");
    const back = document.getElementById("Back");
    const cart = document.getElementById("Cart");
    const title = document.getElementById("Title");

    if (window.scrollY > 0) {
        containerNav.classList.add("bg-white", "rounded-[22px]", "px-[16px]", "shadow-[0px_12px_20px_0px_#0305041C]");
        navTop.classList.remove("top-[16px]");
        navTop.classList.add("top-[30px]");
        back.classList.add("border", "border-shujia-graylight");
        cart.classList.add("border", "border-shujia-graylight");
        title.classList.remove("text-white");
    } else {
        containerNav.classList.remove("bg-white", "rounded-[22px]", "px-[16px]", "shadow-[0px_12px_20px_0px_#0305041C]");
        navTop.classList.add("top-[16px]");
        navTop.classList.remove("top-[30px]");
        back.classList.remove("border", "border-shujia-graylight");
        title.classList.add("text-white");
    }
});


var categoriesSwiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 20,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
});
