/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import * as $ from \"jquery\";\r\n\r\n// function initListeners() {\r\n// \tconsole.log(\"initListeners\")\r\n// }\r\n\r\n// $(document).ready(function () {\r\n//   initListeners();\r\n// });\r\n\r\n// import * as $ from \"jquery\";\r\n// import { signUserUp, signUserIn } from \"./model\";\r\n\r\n// function initListeners() {\r\n//   $(\"#submit\").on(\"click\", () => {\r\n//     const email = $(\"#email\").val();\r\n\r\n//     // console.log(firstName, lastName, email, password);\r\n//     signUserUp(email);\r\n//   });\r\n\r\n//   $(\"#siSubmit\").on(\"click\", () => {\r\n//     let siEmail = $(\"#siEmail\").val();\r\n//     signUserIn(siEmail);\r\n//   });\r\n// }\r\n\r\n// $(document).ready(function () {\r\n//   initListeners();\r\n// });\r\n\r\n// import * as $ from \"jquery\";\r\n// import { initURLListener } from \"./model\";\r\n\r\n// function initAccountListener() {\r\n//   $(\".account\").on(\"click\", function () {\r\n//     console.log(\"account clicked\");\r\n//   });\r\n// }\r\n// function initCartListener() {\r\n//   $(\".cart\").on(\"click\", function () {\r\n//     console.log(\"cart clicked\");\r\n//   });\r\n// }\r\n\r\n// function initURLListener() {\r\n//   $(window).on(\"hashchange\", changeRoute);\r\n//   changeRoute();\r\n// }\r\n\r\n// $(document).ready(function () {\r\n//   initURLListener();\r\n//   initAccountListener();\r\n//   initCartListener();\r\n// });\r\n\r\nlet cartItemCount = 0;\r\n\r\nfunction addToCart() {\r\n  cartItemCount++;\r\n  updateCartCount();\r\n}\r\n\r\nfunction updateCartCount() {\r\n  const addNumElement = document.querySelector(\".addNum\");\r\n  addNumElement.textContent = cartItemCount;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsWUFBWSx5QkFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWwvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIGluaXRMaXN0ZW5lcnMoKSB7XHJcbi8vIFx0Y29uc29sZS5sb2coXCJpbml0TGlzdGVuZXJzXCIpXHJcbi8vIH1cclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICBpbml0TGlzdGVuZXJzKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbi8vIGltcG9ydCB7IHNpZ25Vc2VyVXAsIHNpZ25Vc2VySW4gfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuLy8gZnVuY3Rpb24gaW5pdExpc3RlbmVycygpIHtcclxuLy8gICAkKFwiI3N1Ym1pdFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuXHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4vLyAgICAgc2lnblVzZXJVcChlbWFpbCk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgICQoXCIjc2lTdWJtaXRcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgICBsZXQgc2lFbWFpbCA9ICQoXCIjc2lFbWFpbFwiKS52YWwoKTtcclxuLy8gICAgIHNpZ25Vc2VySW4oc2lFbWFpbCk7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICBpbml0TGlzdGVuZXJzKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbi8vIGltcG9ydCB7IGluaXRVUkxMaXN0ZW5lciB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBpbml0QWNjb3VudExpc3RlbmVyKCkge1xyXG4vLyAgICQoXCIuYWNjb3VudFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudCBjbGlja2VkXCIpO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGluaXRDYXJ0TGlzdGVuZXIoKSB7XHJcbi8vICAgJChcIi5jYXJ0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJjYXJ0IGNsaWNrZWRcIik7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGluaXRVUkxMaXN0ZW5lcigpIHtcclxuLy8gICAkKHdpbmRvdykub24oXCJoYXNoY2hhbmdlXCIsIGNoYW5nZVJvdXRlKTtcclxuLy8gICBjaGFuZ2VSb3V0ZSgpO1xyXG4vLyB9XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgaW5pdFVSTExpc3RlbmVyKCk7XHJcbi8vICAgaW5pdEFjY291bnRMaXN0ZW5lcigpO1xyXG4vLyAgIGluaXRDYXJ0TGlzdGVuZXIoKTtcclxuLy8gfSk7XHJcblxyXG5sZXQgY2FydEl0ZW1Db3VudCA9IDA7XHJcblxyXG5mdW5jdGlvbiBhZGRUb0NhcnQoKSB7XHJcbiAgY2FydEl0ZW1Db3VudCsrO1xyXG4gIHVwZGF0ZUNhcnRDb3VudCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYXJ0Q291bnQoKSB7XHJcbiAgY29uc3QgYWRkTnVtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTnVtXCIpO1xyXG4gIGFkZE51bUVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXJ0SXRlbUNvdW50O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;