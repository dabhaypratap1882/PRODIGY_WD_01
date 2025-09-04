// Navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('nav#navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight current nav item as you scroll
function activateNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav#navbar a");
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    let offset = 200; // Adjust as needed

    sections.forEach((section) => {
        let top = section.offsetTop - offset;
        let bottom = top + section.offsetHeight;
        let id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}
window.addEventListener("scroll", activateNavLink);

// Prevent empty submission in the contact form (optional)
document.querySelector("form.contact-form").addEventListener("submit", function(e){
    alert("Thank you! We'll get in touch with you soon.");
    e.preventDefault(); // Just for demo
});
