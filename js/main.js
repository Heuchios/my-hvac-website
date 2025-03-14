// Scroll Reveal using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});
revealElements.forEach(el => revealObserver.observe(el));

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;
document.getElementById('next').addEventListener('click', () => {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
});
document.getElementById('prev').addEventListener('click', () => {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
});

// Modal Popup for Special Offer
const modal = document.getElementById('promo-modal');
const closeButton = document.querySelector('.close-button');
window.addEventListener('load', () => {
  setTimeout(() => {
    modal.style.display = 'block';
  }, 1000);
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Interactive Service Details Toggle
const learnMoreButtons = document.querySelectorAll('.learn-more');
learnMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const detail = button.nextElementSibling;
    if (detail.style.display === 'block') {
      detail.style.display = 'none';
      button.textContent = 'Learn More';
    } else {
      detail.style.display = 'block';
      button.textContent = 'Show Less';
    }
  });
});

// Back-to-Top Button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Mobile Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.main-nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Animated Counters for Achievements Section
const counters = document.querySelectorAll('.counter');
const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const achievementsSection = document.querySelector('.achievements');
const achievementsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      achievementsObserver.unobserve(achievementsSection);
    }
  });
});
if (achievementsSection) {
  achievementsObserver.observe(achievementsSection);
}

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    question.classList.toggle('active');
  });
});

// Gallery Modal for Project Gallery
const galleryItems = document.querySelectorAll('.gallery-item img');
const galleryModal = document.getElementById('gallery-modal');
const galleryModalImage = document.getElementById('gallery-modal-image');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const largeSrc = item.getAttribute('data-large');
    galleryModalImage.src = largeSrc;
    galleryModal.style.display = 'block';
  });
});
galleryModal.addEventListener('click', (e) => {
  if (e.target === galleryModal || e.target.classList.contains('close-button')) {
    galleryModal.style.display = 'none';
  }
});








