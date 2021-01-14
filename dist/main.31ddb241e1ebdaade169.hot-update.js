/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_headerContactsOpen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/headerContactsOpen */ \"./src/modules/headerContactsOpen.js\");\n/* harmony import */ var _modules_formulaHover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formulaHover */ \"./src/modules/formulaHover.js\");\n/* harmony import */ var _modules_transparency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/transparency */ \"./src/modules/transparency.js\");\n/* harmony import */ var _modules_linkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/linkList */ \"./src/modules/linkList.js\");\n/* harmony import */ var _modules_popupDesign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupDesign */ \"./src/modules/popupDesign.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliders */ \"./src/modules/sliders.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_buttonWide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/buttonWide */ \"./src/modules/buttonWide.js\");\n/* harmony import */ var _modules_privacy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/privacy */ \"./src/modules/privacy.js\");\n/* harmony import */ var _modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sliderPortfolio */ \"./src/modules/sliderPortfolio.js\");\n/* harmony import */ var _modules_popupRepairTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/popupRepairTypes */ \"./src/modules/popupRepairTypes.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/phoneMask */ \"./src/modules/phoneMask.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n\"strict\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n //открытие/закрытие меню\n//togglePopups();\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)(); //открытие header контактов\n\n(0,_modules_headerContactsOpen__WEBPACK_IMPORTED_MODULE_1__.default)(); //formula hover effects\n\n(0,_modules_formulaHover__WEBPACK_IMPORTED_MODULE_2__.default)(); //transparency\n\n(0,_modules_transparency__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_linkList__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_popupDesign__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_buttonWide__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_privacy__WEBPACK_IMPORTED_MODULE_9__.default)(); // portfolio\n\n(0,_modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_10__.default)(); /////// подгрузка таблиц\n\n(0,_modules_popupRepairTypes__WEBPACK_IMPORTED_MODULE_11__.default)();\n(0,_modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_13__.default)();\n(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_12__.default)();\n\n//# sourceURL=webpack://relax/./src/index.js?");

/***/ }),

/***/ "./src/modules/popupRepairTypes.js":
/*!*****************************************!*\
  !*** ./src/modules/popupRepairTypes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar popupRepairTypes = function popupRepairTypes() {\n  var navListPopupRepair = document.querySelector(\".nav-list-popup-repair\");\n  var table = document.querySelector(\".popup-repair-types-content-table>table\"); //table.textContent = \"\";\n\n  var renderTable = function renderTable(data) {\n    data.forEach(function (item) {\n      table.innerHTML += \"\\n      <tbody>\\n        <tr class=\\\"mobile-row showHide\\\">\\n          <td class=\\\"repair-types-name\\\">\".concat(data.typeService, \"</td>\\n          <td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0415\\u0434.\\u0438\\u0437\\u043C\\u0435\\u0440\\u0435\\u043D\\u0438\\u044F</td>\\n          <td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0426\\u0435\\u043D\\u0430 \\u0437\\u0430 \\u0435\\u0434.</td>\\n          <td class=\\\"repair-types-value\\\">\\n            \").concat(data.units, \"</sup>\\n          </td>\\n          <td class=\\\"repair-types-value\\\">\").concat(data.cost, \" \\u0440\\u0443\\u0431.</td>\\n        </tr>\\n      </tbody>\");\n    });\n  };\n\n  var btnListener = function btnListener() {\n    var btns = document.querySelectorAll(\".popup-repair-types-nav__item\");\n    btns.forEach(function (btn) {\n      btn.addEventListener(\"click\", function () {//renderTable(btn.textContent);\n      });\n    });\n  };\n\n  var renderNavBtn = function renderNavBtn(data) {\n    navListPopupRepair.textContent = \"\";\n    data.forEach(function (item) {\n      if (!item) return;\n      navListPopupRepair.innerHTML += \"<button class=\\\"button_o popup-repair-types-nav__item\\\">\".concat(item, \"</button>\");\n    });\n    btnListener();\n  };\n\n  var dataBase = function dataBase() {\n    return fetch(\"./db/db.json\");\n  };\n\n  dataBase().then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var dataTitle = data.map(function (item) {\n      return item.title;\n    });\n    renderNavBtn(dataTitle);\n  })[\"catch\"](function (error) {\n    return console.error(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupRepairTypes);\n\n//# sourceURL=webpack://relax/./src/modules/popupRepairTypes.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "e0321ec4703a18640076"
/******/ 	})();
/******/ 	
/******/ }
);