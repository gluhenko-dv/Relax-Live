/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders */ \"./src/modules/sliders.js\");\n\n\nvar previewPag = function previewPag(slider, index) {\n  var slide = slider.querySelectorAll(\"div\");\n  var previewBlocks = document.querySelectorAll(\".preview-block\");\n  var curr = previewBlocks[index].querySelectorAll(\".preview-block__item>div\");\n\n  var delelteActive = function delelteActive() {\n    curr.forEach(function (elem) {\n      elem.classList.remove(\"preview_active\");\n    });\n  };\n\n  var toggleSlide = function toggleSlide(ind) {\n    slide.forEach(function (elem, i) {\n      elem.classList.add(\"hide\");\n      if (ind === i) elem.classList.remove(\"hide\");\n    });\n  };\n\n  curr.forEach(function (item, i) {\n    item.addEventListener(\"click\", function (e) {\n      var target = e.target;\n      delelteActive();\n      target.classList.add(\"preview_active\");\n      toggleSlide(i);\n    });\n  });\n};\n\nvar tabs = function tabs(section, option) {\n  if (!section) return;\n  var tabsSection = document.querySelector(section);\n  var slides = tabsSection.querySelectorAll(\".\".concat(tabsSection.id, \"-slider>div\"));\n  var btnsWrap = tabsSection.querySelector(\"nav\");\n  var btns = tabsSection.querySelectorAll(\".button_o\");\n  var toggleClass, optionBlock;\n\n  if (option) {\n    optionBlock = tabsSection.querySelectorAll(option);\n    toggleClass = optionBlock[0].classList[1];\n  }\n\n  var toggleSlide = function toggleSlide(indexBtn) {\n    slides.forEach(function (slide, indexSlide) {\n      slide.classList.add(\"hide\");\n\n      if (indexBtn === indexSlide) {\n        slide.classList.remove(\"hide\");\n        previewPag(slide, indexBtn);\n        if (slide.classList[0] === \"scheme-slider__slide\") return;\n        (0,_sliders__WEBPACK_IMPORTED_MODULE_0__.default)(slide.classList[0]);\n      }\n    });\n  };\n\n  btnsWrap.addEventListener(\"click\", function (e) {\n    var target = e.target;\n\n    if (target.closest(\".button_o\")) {\n      btns.forEach(function (btn, indexBtn) {\n        btn.classList.remove(\"active\");\n\n        if (btn === e.target) {\n          toggleSlide(indexBtn);\n          e.target.classList.add(\"active\");\n          if (!optionBlock) return;\n          optionBlock.forEach(function (item, i) {\n            item.classList.remove(toggleClass);\n\n            if (i === indexBtn) {\n              item.classList.add(toggleClass);\n            }\n          });\n        }\n      });\n    }\n  });\n  if (slides[0].classList[0] === \"scheme-slider__slide\") return;\n  (0,_sliders__WEBPACK_IMPORTED_MODULE_0__.default)(slides[0].classList[0]);\n};\n\ntabs(\".designs\", \".preview-block\");\ntabs(\".repair-types\");\ntabs(\".scheme\", \".scheme-description-block\");\ntabs(\".popup-design\", \".popup-design-text\");\nvar firstSlide = document.querySelector(\".designs-slider__style1\");\npreviewPag(firstSlide, 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://relax/./src/modules/tabs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "4dcf0fe585e35adbd1c9"
/******/ 	})();
/******/ 	
/******/ }
);