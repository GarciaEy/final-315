// import * as $ from "jquery";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   getAuth,
// } from "firebase/auth";
// import { signinApp } from "./firebaseConfig";

// const auth = getAuth(app);

// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     console.log("user is signed in");
// //     $("#yourReciple").css("display", "block");
// //   } else {
// //     console.log("user is signed out for real");
// //     $("#yourReciple").css("display", "none");
// //   }
// // });

// export function signUserUp(email) {
//   createUserWithEmailAndPassword(auth, email)
//     .then(() => {
//       console.log("User Created");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export function signUserIn(email) {
//   signInWithEmailAndPassword(auth, email)
//     .then(() => {
//       console.log("User signed In");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
import * as $ from "jquery";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/pageID/pageID.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  } else {
    // 	$.get(`pages/home.html`, function (data) {
    //     console.log("data " + data);
    //     $("#app").html(data);
    //   });
    if (products.length <= 0) {
      loadProducts();
    }
  }
}

function loadProducts() {
  $.getJSON("data/data.json", (data) => {
    procucts = data.PRODUCTS;
    console.log(products);
  });
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initCartListener();
});
