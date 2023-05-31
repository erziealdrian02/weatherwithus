import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.svg";
import "regenerator-runtime";
import "../css/responsive.css";
import "../css/style-copy.css";
import "../css/style.css";
import "./components/componen-html";
import App from "./views/app";

const app = new App({
  content: document.querySelector("main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
/**
 * FILE DIBAWAH BELOM DIRAPIHIN MASIH KALO DIBUKA KOMENTARNYA MASIH ADA YANG BELUM BERFUNGSI
 */

// const currentDate = new Date();

// // Hari
// const dayContainer = document.getElementById("dayContainer");
// const day = currentDate.toLocaleString("en-US", { weekday: "long" });
// dayContainer.textContent = day;

// // Tanggal
// const dateContainer = document.getElementById("dateContainer");
// const date = currentDate.getDate();
// const month = currentDate.toLocaleString("en-US", { month: "long" });
// const year = currentDate.getFullYear();
// const formattedDate = `${date} ${month} ${year}`;
// const secondFormattedDate = `${date} ${month}`;
// const hour = currentDate.getHours();
// let timeOfDay;
// if (hour >= 0 && hour < 12) {
//   timeOfDay = "Pagi";
// } else if (hour >= 12 && hour < 18) {
//   timeOfDay = "Siang";
// } else {
//   timeOfDay = "Malam";
// }
// dateContainer.textContent = `${formattedDate}, ${timeOfDay}`;

// function updateClock() {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   // Tambahkan angka 0 di depan angka jika hanya satu digit
//   hours = hours.toString().padStart(2, "0");
//   minutes = minutes.toString().padStart(2, "0");
//   seconds = seconds.toString().padStart(2, "0");

//   // Update elemen HTML dengan nilai jam, menit, dan detik yang terbaru
//   document.getElementById("hours").textContent = hours;
//   document.getElementById("minutes").textContent = minutes;
//   document.getElementById("seconds").textContent = seconds;
// }

// // Panggil fungsi updateClock setiap detik
// setInterval(updateClock, 1000);

// feather.replace();

// // Ambil semua elemen <li> di dalam week-container_box
// const weekItems = document.querySelectorAll(".week-container_box .week-list li");

// // Tambahkan penangan acara klik pada setiap elemen <li>
// weekItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // Hapus kelas aktif dari semua elemen <li>
//     weekItems.forEach((item) => {
//       item.classList.remove("active");
//     });

//     // Tambahkan kelas aktif pada elemen <li> yang ditekan
//     item.classList.add("active");
//   });
// });

// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector(".navbar");
//   navbar.classList.toggle("scrolled", window.scrollY > 0);
// });
