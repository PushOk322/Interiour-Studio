
//********MENU_BURGER**********/
const iconMenu = document.querySelector('.menu-icon');
const textMenu = document.querySelector('.menu-icon__text');
if (iconMenu && textMenu) {
    const menuLinks = document.querySelector('.header__links');
    const menuButtons = document.querySelector('.header__buttons');
    const menuLower = document.querySelector('.header__lower');
    const menuLogo = document.querySelector('.header__logo');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        textMenu.classList.toggle('_active');
        menuLinks.classList.toggle('_active');
        menuButtons.classList.toggle('_active');
        menuLower.classList.toggle('_active');
        menuLogo.classList.toggle('_active');
    });
    textMenu.addEventListener("click", function (e) {
        e.stopPropagation;
        e.preventDefault;
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        textMenu.classList.toggle('_active');
        menuLinks.classList.toggle('_active');
        menuButtons.classList.toggle('_active');
        menuLower.classList.toggle('_active');
        menuLogo.classList.toggle('_active');
    });
}






//*********DROP-DOWN*******/

const dropdownButton = document.querySelectorAll('.select__header');
if (dropdownButton) {
    const arrow = document.querySelectorAll('.select__arrow');
    const panel = document.querySelectorAll('.select__body');
    const container = document.querySelectorAll('.select');
    for (let i = 0; i < dropdownButton.length; i++) {
        dropdownButton[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                container[i].classList.remove('active');
            } else {
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
                container[i].classList.add('active');
            }
        })
        panel[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                container[i].classList.remove('active');
            } else {
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
                container[i].classList.add('active');
            }
        })
    };

    const selectItem = document.querySelectorAll('.select__item');

    if (selectItem) {
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        this.closest('.select__body').classList.remove('active');
        // this.closest('.dropdown-container').classList.remove('active');
        this.closest('.select__arrow').classList.remove('active');
        arrow.forEach(item => {
            item.classList.remove('active');
        })
    }

}



const pageDefiner = document.querySelector(".page-definer");
const headerLinks = document.querySelectorAll(".header__link");
if (pageDefiner.classList.contains("index")) {
    headerLinks[0].classList.toggle("active");
};
if (pageDefiner.classList.contains("projects") || pageDefiner.classList.contains("one-projects")) {
    headerLinks[1].classList.toggle("active");
};
if (pageDefiner.classList.contains("about")) {
    headerLinks[2].classList.toggle("active");
};
if (pageDefiner.classList.contains("blog") || pageDefiner.classList.contains("one-news")) {
    headerLinks[3].classList.toggle("active");
};
if (pageDefiner.classList.contains("contacts")) {
    headerLinks[4].classList.toggle("active");
};
if (pageDefiner.classList.contains("404")) {
    headerLinks[0].classList.toggle("active");
};



//********POPUP*******/
const formButtons = document.querySelectorAll('.popup-button');
const popup = document.querySelector('.popup__outer');
const cross = document.querySelector('.popup__cross');
if (formButtons && popup && cross) {
    for (let i = 0; i < formButtons.length; i++) {
        formButtons[i].addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.toggle("active");
            document.body.classList.add('_lock');
        });
    }
    cross.addEventListener('click', () => {
        popup.classList.toggle("active");
        document.body.classList.remove('_lock');
    });
};

const popupCompleteButton = document.querySelector('.popup-complete-button');
const popupComplete = document.querySelector('.popup-complete__outer');
const crossComplete = document.querySelector('.popup-complete__cross');
if (popupCompleteButton && popupComplete && crossComplete) {
    popupCompleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        popupComplete.classList.toggle("active");
        document.body.classList.add('_lock');
    });
    crossComplete.addEventListener('click', () => {
        popupComplete.classList.toggle("active");
        document.body.classList.remove('_lock');
    });
};

//********POPUP*******END/

//********SWIPER**********/

const swiperMain = new Swiper('.main-slider', {
    slidesPerView: 1.175,
    loop: true,
    navigation: {
        nextEl: ".main-slider-next",
        prevEl: ".main-slider-prev",
    },
    pagination: {
        el: ".main-slider__progressbar",
        type: "progressbar",
    },
    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1.185,
        },
        500: {
            slidesPerView: 1.17,
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 1.185,
        },
        // when window width is >= 640px
        1100: {
            slidesPerView: 1.175,
        }
    },
});


const swiperNews = new Swiper('.news-main__slider', {
    navigation: {
        nextEl: ".news-main-next",
        prevEl: ".news-main-prev",
    },
});

const swiperOneNews = new Swiper('.mini-slider', {
    slidesPerView: 3.5,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1.19,
            spaceBetween: 0,
        },
        500: {
            slidesPerView: 1.7,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 2.7,
        },
        1025: {
            slidesPerView: 3.5,
        },
    },
});

const swiperAbout = new Swiper('.company-philosophy__slider', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".company-philosophy__next",
        prevEl: ".company-philosophy__prev",
    },
    pagination: {
        el: ".company-philosophy__progressbar",
        type: "progressbar",
    },
    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1.2,
            spaceBetween: 12,
        },
        500: {
            slidesPerView: 1.35,
            spaceBetween: 12,
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 1.2,
            spaceBetween: 12,
        },
        1025: {
            slidesPerView: 1.2,
            spaceBetween: 12,
        },
    },
});


