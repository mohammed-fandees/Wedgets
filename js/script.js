class Navbar {
    constructor(notficationMenu, appsMenu, userMenu) {
        this.notficationMenu = notficationMenu;
        this.appsMenu = appsMenu;
        this.userMenu = userMenu;
    }

    notifcationEvent() {
        this.notficationMenu.classList.toggle('menu-visible');
        this.userMenu.classList.remove('menu-visible');
        this.appsMenu.classList.remove('menu-visible');
    }

    appsEvent() {
        this.appsMenu.classList.toggle('menu-visible');
        this.userMenu.classList.remove('menu-visible');
        this.notficationMenu.classList.remove('menu-visible');
    }

    userEvent() {
        this.userMenu.classList.toggle('menu-visible');
        this.notficationMenu.classList.remove('menu-visible');
        this.appsMenu.classList.remove('menu-visible');
    }
}

let navbar = new Navbar(
    document.querySelector('#notfications-menu'),
    document.querySelector('#apps-menu'),
    document.querySelector('#user-menu')
);

document.querySelector('#notfications').addEventListener('click', _ => navbar.notifcationEvent());
document.querySelector('#apps-icon').addEventListener('click', _ => navbar.appsEvent());

document.querySelector('#userPhoto').addEventListener('click', function() {
    this.classList.toggle('click-photo');
    navbar.userEvent();
});

class Aside {
    constructor(aside) {
        this.aside = aside;
    }

    minAside() {
        this.aside.classList.toggle('min');
    }

}
document.querySelector('#asideMenu').addEventListener('click', _ => new Aside(document.querySelector('aside')).minAside());