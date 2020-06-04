var main = {
    init: function() {

        var navbarToggle = document.querySelector('.navbar-header button');
        var navBar       = document.getElementById('main-navbar');

        var navBarCollapsed = true;
        navbarToggle.addEventListener('click', function() {

            if (navBarCollapsed) {
                navBar      .setAttribute('aria-expanded', 'true');
                navbarToggle.setAttribute('aria-expanded', 'true');

                navBar.classList.add('in');

            } else {
                navBar.classList.remove('in');

                navBar      .setAttribute('aria-expanded', 'false');
                navbarToggle.setAttribute('aria-expanded', 'false');

            } navBarCollapsed = !navBarCollapsed;
        });
    }

}; document.addEventListener('DOMContentLoaded', main.init);
