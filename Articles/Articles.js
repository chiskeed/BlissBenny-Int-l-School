const myLink = document.querySelectorAll(".back-arrow");
const favicon = document.querySelector('.favicon');
const banner = document.querySelector('.banner');
const heroHead = document.querySelector(".hero-head");
const heroText = document.querySelector('.hero-text');
const footerImg = document.querySelector('.img-logo2');
const footerText = document.querySelector('.footer-link');




for (link of myLink){
link.href = "https://chiskeed.github.io/BlissBenny-Int-l-School/";
}
favicon.href = "https://ideogram.ai/assets/image/balanced/response/syKMUZTESuSAU2tIyRDDYg";
banner.textContent = "BlissBenny INT'L SCHOOL";
banner.style.backgroundColor = '#436609';
banner.style.color = '#ADF235';
heroHead.textContent = "Welcome to BlissBenny Int'l School";
heroText.textContent = 'Dedicated to Excellence';
footerImg.src = 'https://ideogram.ai/assets/image/balanced/response/syKMUZTESuSAU2tIyRDDYg';
//footerText.textContent = 'BlissBenny INT'L SCHOOL';
