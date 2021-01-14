/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//плавный скрол\nvar smoothScroll = function smoothScroll(target) {\n  var blockId = target.getAttribute(\"href\");\n  document.querySelector(\"\" + blockId).scrollIntoView({\n    behavior: \"smooth\",\n    block: \"start\"\n  });\n};\n\nvar upBtn = document.querySelector(\".button-footer>a\");\nupBtn.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  console.log(upBtn);\n  smoothScroll(upBtn);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://relax/./src/modules/smoothScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "30ac9d02f71206ce6501"
/******/ 	})();
/******/ 	
/******/ }
);