/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/modules/sliderTabs.js":
/*!***********************************!*\
  !*** ./src/modules/sliderTabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar tabsSlider = function tabsSlider(wrap, prev, next) {\n  var slidesWrap = document.querySelector(wrap);\n  var prevBtn = document.getElementById(prev);\n  var nextBtn = document.getElementById(next);\n  var maxWidth = 0;\n  var maxItem = 0;\n  if (!slidesWrap) return;\n  var slides = slidesWrap.querySelectorAll(\"button\");\n  slides.forEach(function (item) {\n    maxItem = item.offsetWidth > maxItem ? item.offsetWidth : maxItem;\n    maxWidth = +item.offsetWidth;\n  });\n  maxWidth -= 60;\n  if (wrap === \"#scheme-list\") maxWidth += 100;\n  var transformWidth = 0;\n  prevBtn.addEventListener(\"click\", function (e) {\n    transformWidth -= maxItem;\n    if (transformWidth < 0) transformWidth = 0;\n    slidesWrap.style.transform = \"translate(-\".concat(transformWidth, \"px, 0px)\");\n  });\n  nextBtn.addEventListener(\"click\", function (e) {\n    transformWidth += maxItem;\n    if (transformWidth > maxWidth + maxItem) transformWidth = maxWidth + maxItem;\n    slidesWrap.style.transform = \"translate(-\".concat(transformWidth, \"px, 0px)\");\n  });\n};\n\ntabsSlider(\".nav-list-repair\", \"nav-arrow-repair-left_base\", \"nav-arrow-repair-right_base\");\ntabsSlider(\".nav-list-designs\", \"nav-arrow-designs_left\", \"nav-arrow-designs_right\");\ntabsSlider(\"#scheme-list\", \"nav-arrow-scheme_left\", \"nav-arrow-scheme_right\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsSlider);\n\n//# sourceURL=webpack://relax/./src/modules/sliderTabs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "46394804b729e0047dd6"
/******/ 	})();
/******/ 	
/******/ }
);