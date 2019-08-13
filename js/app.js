const treatmentMenuLink = document.querySelector('.info-link'),
  treatmentMenu = document.querySelector('.treatment-menu'),
  menuClose = document.querySelector('.menu-close');

treatmentMenuLink.addEventListener('click', () => {
  treatmentMenu.classList.add('show-menu');
  treatmentMenuLink.preventDefault();
});
menuClose.addEventListener('click', () => {
  treatmentMenu.classList.remove('show-menu');
})