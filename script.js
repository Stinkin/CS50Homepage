// Load the Navbar from file
const nav = document.querySelector(".navbar");
const navReq = new Request("navbar.html");

fetch(navReq)
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

// Load the footer from file
// Same code, diferent parameters. Maybe create a function with parameters ?
const foot = document.querySelector(".footer");
const footReq = new Request("footer.html");

fetch(footReq)
  .then((res) => res.text())
  .then((data) => {
   foot.innerHTML = data;
 });


