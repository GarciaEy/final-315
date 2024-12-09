// import * as $ from "jquery";

// function initListeners() {
// 	console.log("initListeners")
// }

// $(document).ready(function () {
//   initListeners();
// });

// import * as $ from "jquery";
// import { signUserUp, signUserIn } from "./model";

// function initListeners() {
//   $("#submit").on("click", () => {
//     const email = $("#email").val();

//     // console.log(firstName, lastName, email, password);
//     signUserUp(email);
//   });

//   $("#siSubmit").on("click", () => {
//     let siEmail = $("#siEmail").val();
//     signUserIn(siEmail);
//   });
// }

// $(document).ready(function () {
//   initListeners();
// });

// import * as $ from "jquery";
// import { initURLListener } from "./model";

// function initAccountListener() {
//   $(".account").on("click", function () {
//     console.log("account clicked");
//   });
// }
// function initCartListener() {
//   $(".cart").on("click", function () {
//     console.log("cart clicked");
//   });
// }

// function initURLListener() {
//   $(window).on("hashchange", changeRoute);
//   changeRoute();
// }

// $(document).ready(function () {
//   initURLListener();
//   initAccountListener();
//   initCartListener();
// });

let cartItemCount = 0;

function addToCart() {
  cartItemCount++;
  updateCartCount();
}

function updateCartCount() {
  const addNumElement = document.querySelector(".addNum");
  addNumElement.textContent = cartItemCount;
}
