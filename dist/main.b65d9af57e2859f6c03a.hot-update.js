/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterelax"]("main",{

/***/ "./src/modules/popupRepairTypes.js":
/*!*****************************************!*\
  !*** ./src/modules/popupRepairTypes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar popupRepairTypes = function popupRepairTypes() {\n  var navListPopupRepair = document.querySelector(\".nav-list-popup-repair\");\n  var tableData;\n  var table = document.querySelector(\".popup-repair-types-content-table>table\");\n  table.textContent = \"\";\n\n  var renderTable = function renderTable(id) {\n    table.textContent = \"\";\n    tableData.forEach(function (item, i) {\n      if (i !== id) return;\n      document.getElementById(\"switch-inner\").textContent = item.title;\n      item.priceList.forEach(function (str) {\n        table.innerHTML += \"\\n      <tbody>\\n        <tr class=\\\"mobile-row showHide\\\">\\n          <td class=\\\"repair-types-name\\\">\".concat(str.typeService, \"</td>\\n          <td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0415\\u0434.\\u0438\\u0437\\u043C\\u0435\\u0440\\u0435\\u043D\\u0438\\u044F</td>\\n          <td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0426\\u0435\\u043D\\u0430 \\u0437\\u0430 \\u0435\\u0434.</td>\\n          <td class=\\\"repair-types-value\\\">\\n            \").concat(str.units, \"</sup>\\n          </td>\\n          <td class=\\\"repair-types-value\\\">\").concat(str.cost, \" \\u0440\\u0443\\u0431.</td>\\n        </tr>\\n      </tbody>\");\n      });\n    });\n  };\n\n  var btnListener = function btnListener() {\n    var btns = document.querySelectorAll(\".popup-repair-types-nav__item\");\n    btns[0].style.border = \"3px solid #F48922\";\n    ;\n\n    var btnDeleteStyle = function btnDeleteStyle() {\n      btns.forEach(function (btn) {\n        btn.style.border = \"3px solid #EEEBE5\";\n      });\n    };\n\n    btns.forEach(function (btn, indexBtn) {\n      btn.addEventListener(\"click\", function () {\n        renderTable(indexBtn);\n        btnDeleteStyle();\n        btn.style.border = \"3px solid #F48922\";\n      });\n    });\n  };\n\n  var renderNavBtn = function renderNavBtn(data) {\n    navListPopupRepair.textContent = \"\";\n    data.forEach(function (item) {\n      if (!item) return;\n      navListPopupRepair.innerHTML += \"<button class=\\\"button_o popup-repair-types-nav__item\\\">\".concat(item, \"</button>\");\n    });\n    btnListener();\n  };\n\n  var dataBase = function dataBase() {\n    return fetch(\"./db/db.json\");\n  };\n\n  dataBase().then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var dataTitle = data.map(function (item) {\n      return item.title;\n    });\n    tableData = data.filter(function (item) {\n      return item.title;\n    });\n    renderNavBtn(dataTitle);\n    renderTable(0);\n  })[\"catch\"](function (error) {\n    return console.error(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupRepairTypes);\n\n//# sourceURL=webpack://relax/./src/modules/popupRepairTypes.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "fbfcb63db4122d9e36b6"
/******/ 	})();
/******/ 	
/******/ }
);