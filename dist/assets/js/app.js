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

eval("const h1 = document.querySelectorAll('h1');\r\nconst maxWidth = 1920;\r\nconst intro = document.querySelector('.intro');\r\nconst introInner = document.querySelector('.intro__inner');\r\nconst introSearch = document.querySelector('.intro__search');\r\n\r\n\r\nif (window.innerWidth >= 1920) {\r\n    h1.forEach( elem => {\r\n        elem.style.fontSize = \"120px\";\r\n    });\r\n} else {\r\n    h1.forEach( elem => {\r\n        elem.style.fontSize = `${window.innerWidth*120/maxWidth}px`\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/intro.js?");

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