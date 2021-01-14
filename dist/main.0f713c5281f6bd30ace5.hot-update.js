/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/modules/transparency.js":
/*!*************************************!*\
  !*** ./src/modules/transparency.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _togglePopups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./togglePopups */ \"./src/modules/togglePopups.js\");\n\n\nvar transparency = function transparency() {\n  var popupTransparency = document.querySelector(\".popup-transparency\"),\n      popupTransparencyOpen = document.querySelectorAll(\".transparency-item__img\");\n  popupTransparencyOpen.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      (0,_togglePopups__WEBPACK_IMPORTED_MODULE_0__.default)(popupTransparency);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transparency);\n\n//# sourceURL=webpack://relax/./src/modules/transparency.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "078255cc115288292a5b"
/******/ 	})();
/******/ 	
/******/ }
);