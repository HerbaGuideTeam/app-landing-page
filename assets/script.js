document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Menu toggle functionality
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Scroll to section when nav link is clicked
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Update active class
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            navLinks.classList.remove('open'); // Close the mobile menu after clicking a link
        });
    });

    // Highlight active link on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Consider section active when 50% is visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('nav ul li a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 100; // Adjust this value as needed

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.getElementById('hero-title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        heroTitle.appendChild(span);
    });
});



document.getElementById("downloadButton").addEventListener("click", function() {
    const downloadLink = "assets/download/HerbaGuide.apk";

    // Create a temporary anchor element
    const tempLink = document.createElement("a");
    tempLink.href = downloadLink;
    tempLink.download = "HerbaGuide.apk"; 

    // Append the anchor to the body
    document.body.appendChild(tempLink);

    // Trigger the download by simulating click
    tempLink.click();

    // Remove the temporary anchor
    document.body.removeChild(tempLink);
});



document.addEventListener('DOMContentLoaded', (event) => {
    const teamCards = document.getElementById('teamCards');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');

    arrowLeft.addEventListener('click', () => {
        console.log('Scroll left clicked');
        teamCards.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    arrowRight.addEventListener('click', () => {
        console.log('Scroll right clicked');
        teamCards.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});


// Select all team member images
const teamImages = document.querySelectorAll('.team-card img');

// Add click event listener to each image
teamImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Remove 'active' class from all images
        teamImages.forEach(function(img) {
            img.classList.remove('active');
        });

        // Add 'active' class to the clicked image
        this.classList.add('active');
    });
});

// Select all social media icons
const socialIcons = document.querySelectorAll('.social-links a img');

// Add click event listener to each icon
socialIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Remove 'active' class from all icons
        socialIcons.forEach(function(icon) {
            icon.classList.remove('active');
        });

        // Add 'active' class to the clicked icon
        this.classList.add('active');
    });
});

