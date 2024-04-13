// Smooth scrolling effect to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', highlightNav);

function highlightNav() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      navLinks.forEach(link => {
        link.classList.remove('current');
      });
      navLink.classList.add('current');
    }
  });
}

// Add click event listener to section titles for scrolling back to the header
const sectionTitles = document.querySelectorAll('section h2');
sectionTitles.forEach(title => {
  title.addEventListener('click', scrollToHeader);
});

function scrollToHeader() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Pop up a small box message when the user visits the webpage
window.onload = function() {
  var messageBox = document.createElement('div');
  messageBox.setAttribute('id', 'messageBox');
  messageBox.textContent = 'Cheers ... Welcome to my Personal Webpage. Thank YOU !!';
  messageBox.style.position = 'fixed';
  messageBox.style.top = '50%';
  messageBox.style.left = '50%';
  messageBox.style.transform = 'translate(-50%, -50%)';
  messageBox.style.backgroundColor = 'yellow';
  messageBox.style.padding = '10px';
  messageBox.style.border = '1px solid #ccc';
  messageBox.style.borderRadius = '5px';
  messageBox.style.zIndex = '9999';
  document.body.appendChild(messageBox);

  // Remove the message box after secs
  setTimeout(function() {
      messageBox.parentNode.removeChild(messageBox);
  }, 9000);
};



