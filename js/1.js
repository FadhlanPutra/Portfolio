// carousel
let slideIndex = [1, 1, 1];  // Indeks slide untuk 3 grup slide
let slideId = ["mySlides1", "mySlides2", "mySlides3"];

// Mulai slide show untuk setiap grup
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]); // Ambil elemen slide berdasarkan ID
  if (n > x.length) { slideIndex[no] = 1; } // Jika indeks lebih besar dari jumlah slide, reset ke 1
  if (n < 1) { slideIndex[no] = x.length; } // Jika indeks kurang dari 1, set ke slide terakhir
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  // Sembunyikan semua slide dalam grup
  }
  x[slideIndex[no] - 1].style.display = "block"; // Tampilkan slide yang sesuai

  // Set interval untuk pergerakan otomatis slide
//   setTimeout(function() {
//     showSlides(slideIndex[no] += 1, no); // Panggil showSlides secara otomatis setelah 2 detik
//   }, 10000);
}


// rotator
$(".rotate").textrotator({
    animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

// top button
    // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

var timerHandle = setInterval(function() {
if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
window.scrollBy(0,-50); else clearInterval(timerHandle); },8);

// document.body.scrollTop = 0; // For Safari
// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// typing
const text = "Fadhlan Putra";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150); // Mengatur kecepatan ketik
  } else {
    typingElement.style.borderRight = "none";
  }
}
// Mulai efek ketik saat halaman dimuat
window.onload = type;