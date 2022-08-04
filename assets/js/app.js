/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/intro.js":
/*!********************************!*\
  !*** ./src/assets/js/intro.js ***!
  \********************************/
/***/ (function() {

eval("const maxWindowWidth = 1920;\r\nconst intro = document.querySelector('.intro')\r\nconst introMainText = document.querySelector('.intro__main-text');\r\nconst introNftItems = document.querySelectorAll('.nft');\r\nconst introInner = document.querySelector('.intro__inner');\r\n\r\n//change scale of intro main text\r\n\r\n// window.addEventListener('resize', resizeIntro);\r\n// window.addEventListener('load', resizeIntro);\r\n\r\n// function resizeIntro() {\r\n//     if (window.innerWidth < maxWindowWidth) {\r\n//         introMainText.style.transform = `scale(${window.innerWidth/maxWindowWidth})`;\r\n\r\n//         introNftItems.forEach (item => {\r\n//             item.style.transform = `scale(${window.innerWidth/maxWindowWidth})`;\r\n//         })\r\n//     }\r\n// }\r\n\r\n\r\n// else {\r\n//     introMainText.style.transform = 'scale(1)';\r\n\r\n//     introNftItems.forEach (item => {\r\n//         item.style.transform = 'scale(1)';\r\n//     })\r\n// }\n\n//# sourceURL=webpack://nft_market/./src/assets/js/intro.js?");

/***/ }),

/***/ "./src/assets/js/latest-auct.js":
/*!**************************************!*\
  !*** ./src/assets/js/latest-auct.js ***!
  \**************************************/
/***/ (function() {

eval("const latestAuctItems = document.querySelector('.latest-auct__items')\r\n\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/latest-auct.js?");

/***/ }),

/***/ "./src/assets/js/mode.js":
/*!*******************************!*\
  !*** ./src/assets/js/mode.js ***!
  \*******************************/
/***/ (function() {

eval("const modeBtn = document.querySelector('.mode');\r\n\r\nmodeBtn.addEventListener('click', () => {\r\n    modeBtn.classList.toggle('light');\r\n    document.body.classList.toggle('light');\r\n})\n\n//# sourceURL=webpack://nft_market/./src/assets/js/mode.js?");

/***/ }),

/***/ "./src/assets/js/triple.js":
/*!*********************************!*\
  !*** ./src/assets/js/triple.js ***!
  \*********************************/
/***/ (function() {

eval("const tripleItem = document.querySelector('.triple__item');\r\nconst tripleItemCenter = document.querySelector('.triple__item_backg_grad');\r\n\r\ntripleItemCenter.style.height = `${tripleItem.clientHeight + 21}px`;\r\n\r\nwindow.addEventListener('resize', () => {\r\n    tripleItemCenter.style.height = `${tripleItem.clientHeight + 21}px`;\r\n})\r\n\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/triple.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/intro.js"]();
/******/ 	__webpack_modules__["./src/assets/js/latest-auct.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mode.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/triple.js"]();
/******/ 	
/******/ })()
;