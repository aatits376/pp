(function () {
    const audio = document.getElementById("audioPlayer");
    const loader = document.getElementById("preloader");
    const emptyArea = document.getElementById("emptyarea");
    const mobileToggleMenu = document.getElementById("mobiletogglemenu");
    const myButton = document.getElementById("backtotopbutton");
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
    const mobileNavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

    function toggleSettings() {
        document.getElementById("setting-container").classList.toggle("settingactivate");
        document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
        document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
    }

    function playPause() {
        const switchForSound = document.getElementById("switchforsound");
        if (!switchForSound.checked) {
            audio.pause();
        } else {
            audio.play();
        }
    }

    function toggleVisualMode() {
        document.body.classList.toggle("light-mode");
        document.querySelectorAll(".needtobeinvert").forEach((element) => {
            element.classList.toggle("invertapplied");
        });
    }

    function toggleHamburgerMenu() {
        document.body.classList.toggle("stopscrolling");
        mobileToggleMenu.classList.toggle("show-toggle-menu");
        document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
        document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
        document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
    }

    function hideMenuByLi() {
        document.body.classList.toggle("stopscrolling");
        mobileToggleMenu.classList.remove("show-toggle-menu");
        document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
        document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
        document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
    }

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function highlightActiveSection() {
        let activeSectionId = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                activeSectionId = section.getAttribute("id");
            }
        });

        mobileNavLi.forEach((li) => {
            li.classList.remove("activeThismobiletab");
            if (li.classList.contains(activeSectionId)) {
                li.classList.add("activeThismobiletab");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("activeThistab");
            if (li.classList.contains(activeSectionId)) {
                li.classList.add("activeThistab");
            }
        });
    }

    window.addEventListener("load", function () {
        loader.style.display = "none";
        document.querySelector(".hey").classList.add("popup");
    });

    window.addEventListener("scroll", () => {
        scrollFunction();
        highlightActiveSection();
    });

    window.addEventListener("resize", () => {
        // Handle resize logic if needed
    });

    document.addEventListener("contextmenu", function (e) {
        if (e.target.nodeName === "IMG") {
            e.preventDefault();
        }
    }, false);

    // Initialize tilt effect on image with class 'tilts'
    const imageElement = document.querySelector('.tilts');
    if (imageElement) {
        imageElement.addEventListener('mousemove', (e) => {
            const rect = imageElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const dx = (x - rect.width / 8) / (rect.width / 8);
            const dy = (y - rect.height / 8) / (rect.height / 8);
            imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
        });

        imageElement.addEventListener('mouseleave', () => {
            imageElement.style.transform = "";
        });
    }

    console.log(
        "%c Designed and Developed by Dharmu Bhusal ",
        "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
    );
})();