//alert('welcome my portfolio')
//running text
var tayped = new Typed(".text", {
  strings:["Web Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

//background music
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const icon = document.getElementById('icon');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});

//animation
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    aboutSection.parentNode.classList.add('animate');
  }
});

//animation scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.style.top = '-100px';
  } else {
    // Scroll ke atas
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

//navbar missing
const form = document.querySelector('.messageForm');

form.addEventListener('focusin', () => {
  navbar.style.display = 'none';
});

form.addEventListener('focusout', (e) => {
  if (!form.contains(e.relatedTarget)) {
    navbar.style.display = 'flex';
  }
});

//form email
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelectorAll('input[type="text"]')[0].value;
  const email = form.querySelector('input[type="email"]').value;
  const subject = form.querySelectorAll('input[type="text"]')[1].value;
  const message = form.querySelector('textarea').value;

  const mailtoLink = `mailto:sateia776@gmail.com?subject=${subject}&body=Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;

  window.location.href = mailtoLink;
});

// box modal
const imgContainers = document.querySelectorAll('.img-container');

imgContainers.forEach((container) => {
  container.addEventListener('click', () => {
    const img = container.querySelector('img');
    const overlay = container.querySelector('.overlay');
    const text = overlay.querySelector('.text').textContent;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <img src="${img.src}" alt="${img.alt}">
        <p>${text}</p>
        <button class="close-modal">Tutup</button>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      modal.remove();
    });
  });
});