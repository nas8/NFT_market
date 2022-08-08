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

eval("const intro = document.querySelector('.intro')\r\nlet isMobile = {\r\n    Android: function () {\r\n        return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n        return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n        return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n        return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n        return (\r\n                isMobile.Android()\r\n                || isMobile.BlackBerry()\r\n                || isMobile.iOS()\r\n                || isMobile.Opera()\r\n                || isMobile.Windows()\r\n                );\r\n    }\r\n};\r\n\r\n\r\n//action when website is opening on mobile devices\r\nif(isMobile.any()) {\r\n    document.body.classList.add('_touch');\r\n    window.addEventListener('resize', () => {\r\n        intro.style.height = `${document.documentElement.clientHeight}px`;\r\n    });\r\n    intro.style.height = `${document.documentElement.clientHeight}px`;\r\n} else {\r\n    document.body.classList.add('_pc');\r\n};\n\n//# sourceURL=webpack://nft_market/./src/assets/js/intro.js?");

/***/ }),

/***/ "./src/assets/js/latest-auct.js":
/*!**************************************!*\
  !*** ./src/assets/js/latest-auct.js ***!
  \**************************************/
/***/ (function() {

eval("const latestAuctItems = document.querySelector('.latest-auct__items')\r\n\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/latest-auct.js?");

/***/ }),

/***/ "./src/assets/js/menu.js":
/*!*******************************!*\
  !*** ./src/assets/js/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const header = document.querySelector('header');\r\nconst burgerMenu = document.querySelector('.burger');\r\nconst navMenu = document.querySelector('.top-bar__nav');\r\n\r\nlet scrollPos;\r\n\r\n\r\n//deactivate viewport size changes when keyboard pop up on mobile devices;\r\nif (\"virtualKeyboard\" in navigator) {\r\n    navigator.virtualKeyboard.overlaysContent = true;\r\n};\r\n\r\n\r\n//show fixed header\r\nwindow.addEventListener('scroll', showFixedNav, false);\r\nwindow.addEventListener('load', showFixedNav, false);\r\n\r\nfunction showFixedNav() {\r\n    scrollPos = window.scrollY;\r\n\r\n    if (scrollPos > 10 ) {\r\n        header.classList.add('header-fixed');\r\n    } else {\r\n        header.classList.remove('header-fixed');\r\n    };\r\n}\r\n\r\n//menu burger appearance\r\nif (burgerMenu) {\r\n    burgerMenu.addEventListener('click', function(e) {\r\n        document.body.classList.toggle('_lock');\r\n        burgerMenu.classList.toggle('_active');\r\n        navMenu.classList.toggle('_active');\r\n    })\r\n};\r\n\r\n/* add fixed height value for activation overflow scrolling,\r\nwhen a mobile device in horizontal pos */\r\nwindow.addEventListener('load', changeHeight, false);\r\nwindow.addEventListener('resize', changeHeight, false);\r\nfunction changeHeight() {\r\n    if (window.outerHeight < 450) {\r\n        navMenu.style.height = `${window.outerHeight}px`;\r\n        navMenu.style.overflow = 'auto';\r\n\r\n    } else {\r\n        navMenu.style.height = 'auto';\r\n        navMenu.style.overflow = 'hidden';\r\n    }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/menu.js?");

/***/ }),

/***/ "./src/assets/js/mode.js":
/*!*******************************!*\
  !*** ./src/assets/js/mode.js ***!
  \*******************************/
/***/ (function() {

eval("const modeBtn = document.querySelector('.btn-mode');\r\nlet currentMode;\r\n\r\nif(localStorage.getItem('mode') === null) {\r\n    localStorage.setItem('mode', 'dark')\r\n}\r\n\r\ncurrentMode = localStorage.getItem('mode');\r\n\r\nfunction setMode(){\r\n    if(currentMode === 'dark') {\r\n        modeBtn.classList.remove('light');\r\n        document.body.classList.remove('light');\r\n    } else {\r\n        modeBtn.classList.add('light');\r\n        document.body.classList.add('light');\r\n    }\r\n}\r\nsetMode();\r\n\r\nmodeBtn.addEventListener('click', () => {\r\n    currentMode = localStorage.getItem('mode');\r\n\r\n    if (currentMode === 'dark') {\r\n        localStorage.setItem('mode', 'light');\r\n        modeBtn.classList.add('light');\r\n        document.body.classList.add('light');\r\n\r\n    } else {\r\n        localStorage.setItem('mode', 'dark');\r\n        modeBtn.classList.remove('light');\r\n        document.body.classList.remove('light');\r\n    };\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://nft_market/./src/assets/js/mode.js?");

/***/ }),

/***/ "./src/assets/js/svg.js":
/*!******************************!*\
  !*** ./src/assets/js/svg.js ***!
  \******************************/
/***/ (function() {

eval("/*\r\n * Replace all SVG images with inline SVG\r\n */\r\ndocument.querySelectorAll('img.svg').forEach(function(img){\r\n    var imgID = img.id;\r\n    var imgClass = img.className;\r\n    var imgURL = img.src;\r\n\r\n    fetch(imgURL).then(function(response) {\r\n        return response.text();\r\n    }).then(function(text){\r\n\r\n        var parser = new DOMParser();\r\n        var xmlDoc = parser.parseFromString(text, \"text/xml\");\r\n\r\n        // Get the SVG tag, ignore the rest\r\n        var svg = xmlDoc.getElementsByTagName('svg')[0];\r\n\r\n        // Add replaced image ID to the new SVG\r\n        if(typeof imgID !== 'undefined') {\r\n            svg.setAttribute('id', imgID);\r\n        }\r\n        // Add replaced image classes to the new SVG\r\n        if(typeof imgClass !== 'undefined') {\r\n            svg.setAttribute('class', imgClass+' replaced-svg');\r\n        }\r\n\r\n        // Remove any invalid XML tags as per http://validator.w3.org\r\n        svg.removeAttribute('xmlns:a');\r\n\r\n        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.\r\n        if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {\r\n            svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))\r\n        }\r\n\r\n        // Replace image with new SVG\r\n        img.parentNode.replaceChild(svg, img);\r\n\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack://nft_market/./src/assets/js/svg.js?");

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
/******/ 	__webpack_modules__["./src/assets/js/menu.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mode.js"]();
/******/ 	__webpack_modules__["./src/assets/js/svg.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/triple.js"]();
/******/ 	
/******/ })()
;