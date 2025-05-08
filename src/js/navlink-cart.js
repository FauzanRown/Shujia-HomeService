window.addEventListener('scroll', () => {
    const navtop = document.getElementById('Navtop');
    const containerNav = document.getElementById('containerNav');
    const back = document.getElementById('back');
    const title = document.getElementById('title');

    if (window.scrollY > 0) {
        containerNav.classList.add("bg-white", "shadow-[0px_12px_20px_0px_#0305041C]", "rounded-[22px]", "h-[63px]");
        containerNav.style.height = "63px";
        title.classList.remove('text-white');
        back.classList.add("border", "border-shujia-graylight", "shadow", "ml-3"); 
    } else {
        containerNav.classList.remove("bg-white", "shadow-[0px_12px_20px_0px_#0305041C]", "rounded-[22px]", "h-[63px]");
        containerNav.style.height = "40px";
        title.classList.add('text-white');
        back.classList.remove("border", "border-shujia-graylight", "shadow", "ml-3");  
    }
}); 