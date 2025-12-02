function viewPDF(fileUrl) {
  window.open(fileUrl, '_blank');
}

function downloadPDF(fileUrl) {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function showInfo(icon, sender, number, date, recipient) {
  const box = icon.parentElement.querySelector('.info-box');
  box.innerHTML = `
    <strong>Kimdan:</strong> ${sender}<br>
    <strong>Raqam:</strong> ${number}<br>
    <strong>Sana:</strong> ${date}<br>
    <strong>Kimga:</strong> ${recipient}
  `;
  box.style.display = 'block';
}

function hideInfo(icon) {
  const box = icon.parentElement.querySelector('.info-box');
  box.style.display = 'none';
}

// Slider harakatini boshqarish
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Auto-slide
setInterval(nextSlide, 5000);

// Boshlanishda holatni o‘rnatish
updateSlider();
