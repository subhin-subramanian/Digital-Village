  
  // Navbar

  let menu = document.querySelector('#menu-icon');
  let navbar =  document.querySelector('.navbar');

  menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

// Scroll reveal

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.heading',{delay:200, origin:'top'})
sr.reveal('.about-container',{delay:400,origin:'left'})
