const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav-bar')

menuBtn.addEventListener('click', () => {
  let navOpen = navBar.classList.contains('active')
  if (!navOpen) {
    navBar.classList.add('active')
    menuBtn.classList.add('active')
  } 
  else {
    menuBtn.classList.remove('active')
    navBar.classList.remove('active')
  }
})