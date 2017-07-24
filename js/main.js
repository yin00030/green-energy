(function () {

    "use strict";

    var masthead = document.querySelector(".mh-image");

    var slides = [
        '<figure>' +
            '<img src="./img/solar.jpg" alt="Solar energy">' +
            '<figcaption>Solar energy</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/Geothermal.jpg" alt="Geothermal energy">' +
            '<figcaption>Geothermal energy</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/Hydroelectric.jpg" alt="Hydroelectric power">' +
            '<figcaption>Hydroelectric power</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/wind.jpg" alt="Wind power">' +
            '<figcaption>Wind power</figcaption>' +
        '</figure>'
    ];







    var i, k;

    function fadeOut() {
        masthead.style.opacity = 0;
    }

    i = 0;

    function runSlides() {
        masthead.style.opacity = 1;

        if (i > 3) {
            i = 0;

        }

        masthead.innerHTML = slides[i];

        i++;

        window.setTimeout(fadeOut, 5000);

    }

    runSlides();

    window.setInterval(runSlides, 6000);


    var buttons = document.querySelectorAll("main span");

    var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/solar-2.jpg" alt="Solar energy">' +
            '<figcaption><span>Solar energy</span> is an important source of renewable energy and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power. </figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/Hydroelectric-2.jpg" alt="Hydroelectric power">' +
            '<figcaption><span>Hydroelectric power</span> cost is relatively low, making it a competitive source of renewable electricity. </figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/wind-2.jpg" alt="Wind power">' +
            '<figcaption><span>Wind power </span>gives variable power which is very consistent from year to year but which has significant variation over shorter time scales.</figcaption>' +
        '</figure>'
    ];

    var container = document.querySelector(".container");
    container.innerHTML = contents[0];




    function handleClick(ev) {
        ev.preventDefault();
        var target = ev.target;

        for (k = 0; k < buttons.length; k++) {
            if (buttons[k].hasAttribute("id")) {
                buttons[k].removeAttribute("id");
            }
        }

        if (ev.target.innerHTML === "S") {
            container.innerHTML = contents[0];
        } else if (ev.target.innerHTML === "H") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }

        ev.target.setAttribute("id", "active");
    }

    for (k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
    }


})();
