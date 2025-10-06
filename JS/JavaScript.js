const swiper = new Swiper('.swiper-city', {

    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        320: {

            spaceBetween: 5
        },

        768: {

            spaceBetween: 6
        },

        1024: {

            spaceBetween: 7
        },

        1280: {

            spaceBetween: 8
        }
    }
});

////////////////////////////////////////////////////////////

new Swiper('.swiper-card', {

    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        320: {

            spaceBetween: 5
        },

        768: {

            spaceBetween: 6
        },

        1024: {

            spaceBetween: 7
        },

        1280: {

            spaceBetween: 8
        }
    }
});

// ////////////////////////////////////////

new Swiper('.swiper-magzine', {

    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        320: {

            spaceBetween: 5
        },

        768: {

            spaceBetween: 6
        },

        1024: {

            spaceBetween: 7
        },

        1280: {

            spaceBetween: 8
        }
    }
});

// ///////////////////////////////////////////////////////////////////////////

let topNav = document.getElementById("top-nav");
let topSearch = document.getElementById("search");
let searchBottom = document.getElementById("search-bottom");
let hr = document.getElementById("hr");
let navigation = document.getElementById("navigation");

if(window.screenY > 100){

    topNav.style.backgroundColor = "white";
}

window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    if (scroll > 100) {
        topNav.style.backgroundColor = "white";
        topSearch.classList.remove("d-none");
        topSearch.classList.add("d-flex");
        topNav.style.boxShadow = "0 0 5px gray";
        searchBottom.classList.remove("d-none");
        searchBottom.classList.add("d-flex");
        hr.classList.remove("d-none");

    } else {

        topNav.style.backgroundColor = "transparent";
        topSearch.classList.remove("d-flex");
        topSearch.classList.add("d-none");
        topNav.style.boxShadow = "none";
        searchBottom.classList.remove("d-flex");
        searchBottom.classList.add("d-none");
        hr.classList.add("d-none");
    }
});


let lastScroll = window.scrollY;
window.addEventListener("scroll" , function(){
    if(window.scrollY - lastScroll > 5 && window.scrollY>100){
        topNav.classList.add("transfer-top");
        lastScroll = window.scrollY;
        navigation.classList.add("transfer-bottom"); 
    }
})

window.addEventListener("scroll" , function(){
    if(lastScroll -  window.scrollY > 5 && window.scrollY>100){
        topNav.classList.remove("transfer-top");
        lastScroll = window.scrollY; 
        navigation.classList.remove("transfer-bottom"); 

    }
})

