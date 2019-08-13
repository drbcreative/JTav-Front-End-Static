const treatmentMenuLink = document.querySelector('.info-link'),
  treatmentMenu = document.querySelector('.treatment-menu'),
  menuClose = document.querySelector('.menu-close');

treatmentMenuLink.addEventListener('click', (e) => {
  treatmentMenu.classList.add('show-menu');
  // target.preventDefault();
});
menuClose.addEventListener('click', () => {
  treatmentMenu.classList.remove('show-menu');
});