(function () {
    window.addEventListener('load', () => {
        const currentPage = document.location.pathname.split('/').pop();
        const navigationLinks = document.querySelectorAll('.navigation');

        navigationLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            console.log(linkPath, " ", currentPage)
            if (linkPath === currentPage) {
                link.classList.add('current_page');
            } else {
                link.classList.remove('current_page');
            }
        });
    })
})();