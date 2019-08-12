const menuTrigger = document.querySelector(".nav-burger-container"),
  burgerLine = document.querySelectorAll(".burger-line"),
  menu = document.querySelector(".menu-container"),
  header = document.querySelector("header");
// navLinks = document.querySelectorAll(".navbar-link"),
// topLogo = document.querySelector(".top-menu-logo"),
// socialMenu = document.querySelector(".header-social-menu"),
// consult = document.querySelector(".consultation"),
// consultTrigger = document.querySelector("#consult-trigger"),
// footer = document.querySelector("footer");

menuTrigger.addEventListener("click", function(e) {
  e.preventDefault();
  menu.classList.toggle("show");
  burgerLine.forEach(line => {
    line.classList.toggle("active");
  });
});

// Page scrolling Event Listener
window.addEventListener("scroll", function() {
  const winScroll = window.pageYOffset;

  if (winScroll > 50) {
    header.classList.add("show");
    // topLogo.classList.add("active");
    // socialMenu.classList.add("active");
    menuTrigger.classList.add("show");
    // burgerLine.forEach(line => {
    //   line.classList.add("show");
    // });
    // navLinks.forEach(link => {
    //   link.classList.add("active");
    // });
  } else if (winScroll < 50) {
    header.classList.remove("show");
    // topLogo.classList.remove("active");
    // socialMenu.classList.remove("active");
    menuTrigger.classList.remove("show");
    // burgerLine.forEach(line => {
    //   line.classList.remove("show");
    // });
    // navLinks.forEach(link => {
    //   link.classList.remove("active");
    // });
  }
  // consult form
  //   const footerTop = footer.getBoundingClientRect().top;
  //   const consultTop = consult.getBoundingClientRect().top;
  //   console.log(footerTop);
  //   console.log(consultTop);

  //   if (winScroll > 50) {
  //     consult.classList.add("visible");
  //   } else if (winScroll < 50) {
  //     consult.classList.remove("visible");
  //   }

  //   if (consultTop > footerTop - 100) {
  //     consult.classList.remove("visible");
  //   }
  // });

  // // Consult Open
  // let counter = 0;
  // consultTrigger.addEventListener("click", function() {
  //   if (counter !== 1) {
  //     consultTrigger.textContent = "X";
  //     consult.classList.toggle("open");
  //     counter = 1;
  //   } else {
  //     consultTrigger.innerHTML = `<img src="img/consult-arrow@2x.png" alt="">`;
  //     consult.classList.toggle("open");
  //     counter = 0;
  //   }
  // });
});
