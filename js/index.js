const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Abrir menú");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    let slider = document.querySelector('.slider');
    let currentIndex = 0;
    let totalItems = document.querySelectorAll('.slider-item').length;

    function updateSlider() {
        let percentage = -currentIndex * (100 / totalItems);
        slider.style.transform = 'translateX(' + percentage + '%)';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
    }

    setInterval(nextSlide, 6000); // Cambia el slide cada 5 segundos (ajusta según tus necesidades)
});
