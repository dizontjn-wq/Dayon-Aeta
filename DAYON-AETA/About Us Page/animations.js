// Feedback carousel auto-scroll animation
const feedbackContainer = document.querySelector('.feedback');
if (feedbackContainer) {
  // Clone feedback items for seamless loop
  const feedbackItems = feedbackContainer.innerHTML;
  feedbackContainer.innerHTML += feedbackItems;

  let isPaused = false;

  // Pause on hover
  feedbackContainer.addEventListener('mouseenter', () => {
    isPaused = true;
    feedbackContainer.style.animationPlayState = 'paused';
  });

  feedbackContainer.addEventListener('mouseleave', () => {
    isPaused = false;
    feedbackContainer.style.animationPlayState = 'running';
  });
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll animations
const animatedElements = document.querySelectorAll('.the-dayon-aeta-team, .maraming-pagsubok, .text-wrapper-22');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

// Video play button interaction
const videoOverlay = document.querySelector('.image-4');

if (playButton && videoOverlay) {
  playButton.addEventListener('click', () => {
    console.log('Play video');
    // Add your video play logic here
  });
}

// Smooth scroll for navigation links with click animation
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Add active class for click animation
    link.style.transform = 'scale(0.95)';

    // Reset after animation
    setTimeout(() => {
      link.style.transform = 'scale(1)';
    }, 100);

    // Add smooth scroll logic based on navigation item
    const linkText = link.textContent.trim();

  });

  // Add ripple effect on click
  link.addEventListener('mousedown', (e) => {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(96, 59, 9, 0.3)';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = e.offsetX + 'px';
    ripple.style.top = e.offsetY + 'px';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';

    link.style.position = 'relative';
    link.style.overflow = 'hidden';
    link.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
  if (window.innerWidth <= 768) {
    // Mobile menu logic can be added here
  }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Example JS to fade out current page before navigating
function fadeAndNavigate(url) {
  const overlay = document.querySelector('.page-overlay');
  overlay.classList.add('active'); // dim the page
  setTimeout(() => {
    window.location.href = url; // then go to next page
  }, 500); // match the CSS transition duration
}    
function myFunction() {
    var nav = document.querySelector('.navbar');
    if (!nav) return;
    nav.classList.toggle('show');
}
