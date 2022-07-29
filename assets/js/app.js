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

eval("const maxWindowWidth = 1920;\r\nconst introMainText = document.querySelector('.intro__main-text');\r\nconst introNftItems = document.querySelectorAll('.nft');\r\n\r\n//change scale of intro main text\r\nif (window.innerWidth < 1920) {\r\n    introMainText.style.transform = `scale(${window.outerWidth/maxWindowWidth})`;\r\n\r\n    introNftItems.forEach (item => {\r\n        item.style.transform = `scale(${window.outerWidth/maxWindowWidth})`;\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/intro.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/intro.js"]();
/******/ 	
/******/ })()
;