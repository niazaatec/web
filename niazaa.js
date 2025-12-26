/* ================= MOBILE MENU TOGGLE ================= */
function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}


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



const modal = document.getElementById("serviceModal");
const modalBody = document.getElementById("modal-body");

// Service details
const servicesDetails = {
    pos: {
        title: "POS & RMS Solutions",
        img: "images/pos.png",
        description: "Complete Point of Sale and Restaurant Management Systems including billing, inventory, sales reports, and staff management."
    },
    web: {
        title: "Web Development",
        img: "images/web.png",
        description: "Professional, responsive, and SEO-friendly websites for businesses, shops, and restaurants."
    },
    smd: {
        title: "Smart Media Displays",
        img: "images/display.png",
        description: "Digital menu boards and smart advertising displays for restaurants and retail stores."
    },
    hardware: {
        title: "Free Hardware Package",
        img: "images/hardware.png",
        description: "Tablet, keyboard, mouse, and accessories provided free with our POS plans."
    },
    training: {
        title: "Free Training & Support",
        img: "images/training.png",
        description: "On-site and online training with 24/7 support to ensure smooth operations."
    },
    business: {
        title: "Business Automation",
        img: "images/business.png",
        description: "Automate sales, inventory, reporting, and customer management for smarter business decisions."
    }
};

// Open modal
function openModal(service) {
    const data = servicesDetails[service];
    modalBody.innerHTML = `
        <img src="${data.img}" alt="${data.title}">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
    `;
    modal.style.display = "flex";
}

// Close modal
function closeModal() {
    modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};
