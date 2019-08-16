const treatmentMenuLink = document.querySelectorAll('.info-link'),
  treatmentMenu = document.querySelectorAll('.treatment-menu'),
  menuClose = document.querySelectorAll('.menu-close'),
  mainMenu = document.querySelector('.main-menu'),
  mainMenuClose = document.querySelector('.main-menu-close'),
  menuInfo = document.querySelector('.menu-info'),
  subMenu = document.querySelector('.submenu'),
  menuColRight = mainMenu.querySelector('.col-right'),
  menuColLeft = mainMenu.querySelector('.col-left'),
  submenuClose = document.querySelector('.submenu-close'),
  menuToggle = document.querySelector('.menu-toggle');


/* Treatment Menus */
treatmentMenuLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (link === treatmentMenuLink[0]) {
      // console.log('this is number 1');
      treatmentMenu[0].classList.add('show-menu');
    } else if (link === treatmentMenuLink[1]) {
      // console.log('this is number 2');
      treatmentMenu[1].classList.add('show-menu');
    } else {
      // console.log('all are closed');
      treatmentMenu[0].classList.remove('show-menu');
      treatmentMenu[1].classList.remove('show-menu');
    }
  })
});

/* Close Treatment Menus */
menuClose.forEach((menu) => {
  menu.addEventListener('click', () => {
    if (menu === menuClose[0]) {
      treatmentMenu[0].classList.remove('show-menu');
    } else if (menu === menuClose[1]) {
      treatmentMenu[1].classList.remove('show-menu');
    }
  })
});

/* Main Menu Activate */
menuToggle.addEventListener('click', () => {
  mainMenu.classList.remove('main-menu-return');
  mainMenu.classList.add('main-menu-down');
});

/* Main Menu Return */
mainMenuClose.addEventListener('click', () => {
  mainMenu.classList.remove('main-menu-down');
  mainMenu.classList.add('main-menu-return');
  subMenu.classList.remove('menu-drop');
  subMenu.classList.add('menu-up');
});

/* Main menu */
window.addEventListener('DOMContentLoaded', () => {
  windowPane();
});
window.addEventListener('resize', () => {
  windowPane();
});

const windowPane = () => {
  if (window.innerWidth >= 768) {
    menuColLeft.appendChild(subMenu);
  } else if (window.innerWidth <= 768) {
    menuColRight.appendChild(subMenu);
  }
}

menuInfo.addEventListener('click', (e) => {
  const eTarget = e.target;
  const targetId = eTarget.id;
  const submenuContainer = document.querySelectorAll('.submenu-container');

  console.log(eTarget);
  console.log(targetId);

  if (eTarget.dataset.nav["sub"]) {
    subMenu.classList.remove('menu-up');
    subMenu.classList.add('menu-drop');

    /* submenus */
    if (targetId === 'face') {
      submenuContainer.forEach((menu) => {
        menu.classList.remove('show-menu');
      })
      document.querySelector('.face-menu-container').classList.add('show-menu');
    } else if (targetId === 'body') {
      submenuContainer.forEach((menu) => {
        menu.classList.remove('show-menu');
      })
      document.querySelector('.body-menu-container').classList.add('show-menu');
    } else if (targetId === 'modalities') {
      submenuContainer.forEach((menu) => {
        menu.classList.remove('show-menu');
      })
      document.querySelector('.modalities-menu-container').classList.add('show-menu');
    }
  }
});
submenuClose.addEventListener('click', () => {
  subMenu.classList.remove('menu-drop');
  subMenu.classList.add('menu-up');
});