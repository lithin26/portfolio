// document.querySelectorAll('a[href^="#"]').forEach
// (anchor =>{
//     anchor.addEventListener('click',function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute
//             ('href')).scrollIntoView({
//                 behavior:'smooth'
//             });
//     });
// });

// window.addEventListener('scroll',()=>{
//     const navbar=document.querySelector('.navbar');
//     window.scrollY > 50 ?
//         navbar.style.backgroundColor='rgba(10,10,10,0.98)':
//           navbar.style.backgroundColor='rgba(10,10,10,0.95)';
        
// });

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.backgroundColor =
    window.scrollY > 50 ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.95)';
});

// Toggle nav on mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
