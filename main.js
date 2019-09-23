// slider


// trzy rodzaje zdjęc i tekstów
const slideList = [{
        img: "img/img1.jpg",
        txt1: "Ciesz się nurkowaniem z nami",
        txt2: "Oferujemy szeroki wybór wypraw nurkowych i miejsc do nurkowania"
    },
    {
        img: "img/img2.jpg",
        txt1: "Najlepszy sprzęt i instruktorzy",
        txt2: "Nasz zespół i najwyższej klasy sprzęt gwarantują niezapomniane nurkowanie."
    },
    {
        img: "img/img3.jpg",
        txt1: "Najlepsze miejsca do nurkowania",
        txt2: "Najlepsze wycieczki nurkowe w piękne miejsca za małe pieniądze"
    }
];
// pobranie wszystkich elementów
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const h2 = document.querySelector('h2.slider');
const next = document.querySelector(".next");
const back = document.querySelector(".back");

const dots = [...document.querySelectorAll(".dots span")];

// interfejs
const time = 2500;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex((e) => e.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt1;
    h2.textContent = slideList[active].txt2;
    changeDot();

}


let timer = setInterval(changeSlide, time);

const changePage = () => {
    clearInterval(timer);
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt1;
    h2.textContent = slideList[active].txt2;
    changeDot();
    timer = setInterval(changeSlide, time);

}
const changePageBack = () => {
    clearInterval(timer);
    active--;
    if (active < 0) {
        active = slideList.length - 1;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt1;
    h2.textContent = slideList[active].txt2;
    changeDot();
    timer = setInterval(changeSlide, time);



}


next.addEventListener("click", changePage);
back.addEventListener("click", changePageBack);


// zmiana slajdu po kliknięciu w kropkę..
dots.forEach((dot, i) => dot.addEventListener("click", function () {
    clearInterval(timer);
    dots.forEach((e) => e.classList.remove("active"));
    dot.classList.add("active");
    image.src = slideList[i].img;
    h1.textContent = slideList[i].txt1;
    h2.textContent = slideList[i].txt2;
    timer = setInterval(changeSlide, time);
}))


// stats counter  ??????


let counterDone = false;

$(document).on("scroll", function () {
    const scrollValue = $(this).scrollTop();
    const parallax = $(".parallax");
    const parallaxfromTop = parallax.offset().top;
    const parallaxHeight = parallax.outerHeight();






    if (scrollValue > parallaxfromTop - parallaxHeight && counterDone === false) {



        const h1 = [...document.querySelectorAll(".counter h1")];

        let counter = 0;

        const grow = () => {

            counter++;
            h1.forEach((index) => {

                index.textContent = counter;

                if (counter === 120) {
                    h1[0] = 10;
                } else if (counter === 192) {
                    h1[1] = 20;
                } else if (counter === 420) {
                    h1[2] = 100;
                } else if (counter === 320) {
                    h1[3] = 320;
                }






            })



        };

        const timer = setInterval(grow, 0.1);
        counterDone = true;




    }



});


// accordian

const accordions = document.getElementsByClassName("question");

for (let i = 0; i < accordions.length; i++) {

    accordions[i].addEventListener("click", function () {
        this.classList.toggle("open");
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}