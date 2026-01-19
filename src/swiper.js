
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    });
    
    
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
    });


    let menuNext = document.querySelector('#menuNext');
    let menuPrev = document.querySelector('#menuPrev');
    var swiper = new Swiper(".menuSwiper", {
        breakpoints: {
            0: {
                slidesPerView: 2.3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3.3,
                spaceBetween: 24,
            },

            1024: { 
                slidesPerView: 4.5,
                spaceBetween: 32,
            },
            1350: {
                slidesPerView: 5.5,
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: menuNext,
            prevEl: menuPrev,
        },
    });

    const bestSellingNext = document.querySelector('#bestSellingNext');
    const bestSellingPrev = document.querySelector('#bestSellingPrev');

    const bestSellingSwiper = new Swiper('.lolSwiper', {
    slidesPerView: 1.2, // mobile default
    spaceBetween: 16,
    grid: {
        rows: 2,
        fill: 'row', // fills row first
    },
    breakpoints: {
        640: {
        slidesPerView: 2.2,
        spaceBetween: 16,
        },
        768: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 4.2,
        spaceBetween: 24,
        },
    },
    navigation: {
        nextEl: bestSellingNext,
        prevEl: bestSellingPrev,
    },
    });

    
    var swiper = new Swiper(".customerSwiper", {
        slidesPerView: 1,
        autoHeight: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const featuredProductNext = document.querySelector('#featuredProductNext');
    const featuredProductPrev = document.querySelector('#featuredProductPrev');

    const featuredProductSwiper = new Swiper('.featuredProductSwiper', {
    slidesPerView: 1.2, // mobile default
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: featuredProductNext,
        prevEl: featuredProductPrev,
    },
    breakpoints: {
        640: {
        slidesPerView: 2.2,
        spaceBetween: 16,
        },
        768: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 4.2,
        spaceBetween: 24,
        },
        1280: {
        slidesPerView: 5.2,
        spaceBetween: 30,
        },
    },
    });


    const blogNewsNext = document.querySelector('#blogNewsNext');
    const blogNewsPrev = document.querySelector('#blogNewsPrev');

    const blogNewsSwiper = new Swiper('.blogNewsSwiper', {
    spaceBetween: 16,
    navigation: {
        nextEl: blogNewsNext,
        prevEl: blogNewsPrev,
    },
    breakpoints: {
        0: {
        slidesPerView: 1.1,
        },
        640: {
        slidesPerView: 2.2,
        },
        768: {
        slidesPerView: 3.3,
        },
        1024: {
        slidesPerView: 4.4,
        },
    },
    });
