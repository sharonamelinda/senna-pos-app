const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('bg-black', 'text-white');
        link.classList.remove('bg-white', 'text-black');
    } else {
        link.classList.add('bg-white', 'text-black');
        link.classList.remove('bg-black', 'text-white');
    }
});