// Get references to elements
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
var emptyArea = document.getElementById("emptyarea");
var mobileToggleMenu = document.getElementById("mobiletogglemenu");
var myButton = document.getElementById("backtotopbutton");

// Function to toggle settings
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Function to play or pause audio
function playpause() {
    var switchForSound = document.getElementById("switchforsound");
    if (!switchForSound.checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

// Function to toggle visual mode
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (element) {
        element.classList.toggle("invertapplied");
    });
}

// Event listener to hide preloader on load
window.addEventListener("load", function () {
    loader.style.display = "none"; // Hide preloader
    document.querySelector(".hey").classList.add("popup"); // Show popup
});

// Function to toggle hamburger menu
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    mobileToggleMenu.classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Function to hide menu by list item click
function hidemenubyli() {
    document.body.classList.remove("stopscrolling");
    mobileToggleMenu.classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Throttle function to limit function calls
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Highlight active section based on scroll
function highlightActiveSection() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
    const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach((li) => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(currentSection)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(currentSection)) {
            li.classList.add("activeThistab");
        }
    });
}

// Scroll function to show/hide back to top button
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// Scroll to top function
function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Add throttled scroll event listener
window.addEventListener("scroll", throttle(function() {
    scrollFunction();
    highlightActiveSection();
}, 100)); // Adjust throttle timing as needed

// Prevent right-click on images
document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

// Mouse move and resize listeners for tilt effect
window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Tilt effect on images with class 'tilts'
window.onload = function () {
    const imageElement = document.querySelector('.tilts');
    if (imageElement) {
        const handleMouseMove = (e) => {
            let rect = imageElement.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            let dx = (x - rect.width / 8) / (rect.width / 8);
            let dy = (y - rect.height / 8) / (rect.height / 8);

            imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
        };

        const handleMouseLeave = () => {
            imageElement.style.transform = "";
        };

        imageElement.addEventListener('mousemove', handleMouseMove);
        imageElement.addEventListener('mouseleave', handleMouseLeave);
    }
}

// Console log to indicate design credits
console.log(
    "%c Designed and Developed by Dharmu Bhusal ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);