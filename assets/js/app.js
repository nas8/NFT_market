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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/intro.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/latest-auct.js"]();
/******/ 	
/******/ })()
;