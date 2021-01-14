/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ \"./src/modules/smoothScroll.js\");\n\n\nvar toggleMenu = function toggleMenu() {\n  var menuBtn = document.querySelector(\".menu\"),\n      popupMenu = document.querySelector(\".popup-menu\"),\n      popupDialogMenu = document.querySelector(\".popup-dialog-menu\"),\n      closeMenuBtn = document.querySelector(\".close-menu\"),\n      popupMenuNav = document.querySelector(\".popup-menu-nav\");\n\n  var openMenu = function openMenu() {\n    popupMenu.style.visibility = \"visible\";\n    popupDialogMenu.style.transform = \"translate3d(0,0,0)\";\n  };\n\n  var closeMenu = function closeMenu() {\n    popupMenu.style.visibility = \"\";\n    popupDialogMenu.style.transform = \"\";\n  };\n\n  menuBtn.addEventListener(\"click\", openMenu);\n  closeMenuBtn.addEventListener(\"click\", closeMenu);\n  popupMenuNav.addEventListener(\"click\", function (event) {\n    var target = event.target;\n\n    if (target.closest(\".menu-link\")) {\n      event.preventDefault();\n      closeMenu();\n      if (target.matches(\".no-overflow\")) return;\n      (0,_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.default)(target);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://relax/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "0f713c5281f6bd30ace5"
/******/ 	})();
/******/ 	
/******/ }
);