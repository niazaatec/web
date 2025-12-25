/* ================= MOBILE MENU TOGGLE ================= */
document.addEventListener("DOMContentLoaded", function() {
    // Select hamburger icon and nav menu
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    // Toggle 'active' class on click
    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});


/* ===== WELCOME MESSAGE ===== */
function welcome() {
    alert("Welcome to Niazaa Technology!");
}

/* ===== FORM VALIDATION ===== */
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
/* ===== RESPONSIVE MENU TOGGLE ===== */
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// Toggle mobile menu
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

// Welcome button
function welcome() {
    alert("Welcome to Niazaa Technology!");
}

// Contact form validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Thank you! Your message will be sent via email.");
    return true;
}





// Optional: reset animation on window resize
window.addEventListener('resize', () => {
    const slider = document.querySelector('.client-slider');
    slider.style.animation = 'none';
    void slider.offsetWidth; // trigger reflow
    slider.style.animation = 'slideLeft 20s linear infinite';
});
