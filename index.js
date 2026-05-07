
// const counters = document.querySelectorAll(".counter");

// counters.forEach(counter => {
//   const updateCount = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;
//     const increment = target / 100;

//     if (count < target) {
//       counter.innerText = Math.ceil(count + increment);
//       setTimeout(updateCount, 20);
//     } else {
//       counter.innerText = target + "+";
//     }
//   };
//   updateCount();
// });
// document.addEventListener("DOMContentLoaded", function() {

//   const menuToggle = document.getElementById("menu-toggle");
//   const navLinks = document. querySelector("nav-links");

//     if(menuToggle && navLinks){
//       menuToggle.addEventListener("click", function(){

//         alert("Hamburger clicked")
//         navLinks.classList.toggle("active");
//       });
//     }

//   const form = document.getElementById("partner-form");

//   if (!form) {
//     console.log("Form not found ❌");
//     return;
//   }

//   console.log("Form found ✅");

//   form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     const name = document.querySelector('input[name="name"]').value;
//     const email = document.querySelector('input[name="email"]').value;
//     const organization = document.querySelector('input[name="organization"]').value;
//     const phone = document.querySelector('input[name="phone"]').value;
//     const partnership = document.querySelector('select[name="partnership"]').value;
//     const message = document.querySelector('textarea[name="message"]').value;

//     const text = `Hello, I want to partner with you.

// Name: ${name}
// Email: ${email}
// Organization: ${organization}
// Phone: ${phone}
// Partnership Type: ${partnership}
// Message: ${message}`;

//     const url = `https://wa.me/254710116293?text=${encodeURIComponent(text)}`;

//     window.open(url, "_blank");
//   });

// });


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");

  // FIXED HERE 👇
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

      console.log("Hamburger clicked ✅");

      navLinks.classList.toggle("active");
    });
  }

  const form = document.getElementById("partner-form");

  if (!form) {
    console.log("Form not found ❌");
    return;
  }

  console.log("Form found ✅");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const organization = document.querySelector('input[name="organization"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const partnership = document.querySelector('select[name="partnership"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const text = `Hello, I want to partner with you.

Name: ${name}
Email: ${email}
Organization: ${organization}
Phone: ${phone}
Partnership Type: ${partnership}
Message: ${message}`;

    const url = `https://wa.me/254710116293?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });

});