/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-soft-orange: hsl(35, 77%, 62%);\n  --color-soft-red: hsl(5, 85%, 63%);\n  --color-off-white: hsl(36, 100%, 99%);\n  --color-grayish-blue: hsl(233, 8%, 79%);\n  --color-dark-grayish-blue: hsl(236, 13%, 42%);\n  --color-very-dark-blue: hsl(240, 100%, 5%);\n  --point-5rem: 0.5rem;\n  --one-rem: 1rem;\n  --two-rem: 2rem;\n  --four-rem: 4rem;\n  --onepoint-5rem: 1.5rem;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  font-family: \"Inter\", sans-serif;\n}\n\nhtml, body {\n  height: 100%;\n  font-size: 15px;\n  overflow-x: hidden;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  max-inline-size: 1440px;\n  padding-block-start: 1rem;\n  padding-inline: 10%;\n  margin-inline: auto;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n}\n\na {\n  text-decoration: none;\n  transition: color 250ms ease;\n}\n\nimg, picture {\n  display: block;\n  max-width: 100%;\n}\n\nbody.shade {\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 9;\n}\n\n.top-wrapper {\n  display: flex;\n  justify-content: space-between;\n  padding-block: var(--two-rem);\n}\n\nheader {\n  height: fit-content;\n}\n\n.burger-menu {\n  display: none;\n  cursor: pointer;\n  background-color: inherit;\n  padding-block-start: var(--point-5rem);\n}\n\n.nav-list {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n.nav-list a {\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 1.2rem;\n  color: var(--color-dark-grayish-blue);\n  margin-inline-start: var(--onepoint-5rem);\n}\n.nav-list a:hover {\n  color: var(--color-soft-red);\n}\n\nnav.responsive {\n  transform: translateX(0%);\n  transition: 550ms ease transform;\n}\n\n.news-homepage-section {\n  margin-block-start: var(--one-rem);\n  margin-block-end: var(--four-rem);\n}\n.news-homepage-section h1 {\n  font-weight: 900;\n  line-height: 1;\n  font-size: 3rem;\n  margin-block-end: var(--one-rem);\n}\n.news-homepage-section p {\n  color: var(--color-dark-grayish-blue);\n  margin-block-end: var(--onepoint-5rem);\n}\n.news-homepage-section button {\n  inline-size: 12rem;\n  padding-inline: var(--one-rem);\n  padding-block: var(--one-rem);\n  color: var(--color-off-white);\n  letter-spacing: 0.15rem;\n  font-weight: 500;\n  font-size: 1rem;\n  text-transform: uppercase;\n  background-color: var(--color-soft-red);\n  border: none;\n  cursor: pointer;\n  transition: background-color 250ms ease;\n}\n.news-homepage-section button:hover {\n  background-color: var(--color-very-dark-blue);\n}\n\n.news-aside-right {\n  max-width: 33.33rem;\n  padding-block-start: 1.5rem;\n  padding-inline: 1.5rem;\n  background-color: var(--color-very-dark-blue);\n  block-size: fit-content;\n}\n.news-aside-right .hr {\n  border: none;\n  height: 0.006rem;\n  background-color: var(--color-off-white);\n}\n.news-aside-right h2 {\n  font-size: 2.5rem;\n  color: var(--color-soft-orange);\n}\n\n.aside-details {\n  padding-block: var(--one-rem);\n}\n.aside-details a {\n  color: var(--color-off-white);\n}\n.aside-details a:hover {\n  color: var(--color-soft-orange);\n}\n.aside-details p {\n  color: var(--color-grayish-blue);\n  padding-block-start: var(--point-5rem);\n}\n\n.news-homepage-bottom-section {\n  margin-block: var(--four-rem);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));\n}\n\n.news-homepage-bottom-article {\n  display: flex;\n  gap: 1rem;\n  margin-block-end: 2rem;\n  max-width: 18.75rem;\n  margin-inline-end: var(--point-5rem);\n  align-items: center;\n}\n.news-homepage-bottom-article img {\n  object-fit: cover;\n  height: 100%;\n}\n\n.bottom-article-img {\n  min-width: 6.67rem;\n  height: 80%;\n}\n\n.bottom-article-details {\n  padding-block-start: 0.2rem;\n  padding-block: 1rem;\n}\n.bottom-article-details strong {\n  font-size: var(--two-rem);\n  color: var(--color-grayish-blue);\n}\n.bottom-article-details a {\n  color: var(--color-very-dark-blue);\n  font-weight: 800;\n}\n.bottom-article-details a:hover {\n  color: var(--color-soft-red);\n}\n.bottom-article-details p {\n  margin-block: var(--point-5rem);\n  color: var(--color-dark-grayish-blue);\n}\n\n@keyframes animateNavLinks {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media screen and (max-width: 51.2rem) {\n  body {\n    padding-inline: 1rem;\n    inline-size: 100%;\n  }\n  .top-wrapper {\n    padding-block-start: 0;\n  }\n  .nav {\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100%;\n    background-color: var(--color-off-white);\n    transform: translateX(130%);\n  }\n  .burger-menu {\n    visibility: visible;\n    position: fixed;\n    z-index: 1;\n    right: 0.8rem;\n    top: 1rem;\n    display: block;\n    border: none;\n  }\n  .nav-list {\n    transform: translateY(58%);\n    display: block;\n    margin-inline-start: 1rem;\n    margin-inline-end: 7rem;\n    inline-size: fit-content;\n    height: initial;\n  }\n  .nav-list li {\n    margin-block: 1rem;\n    opacity: 0;\n  }\n}\n@media screen and (min-width: 37.5rem) {\n  .container {\n    display: grid;\n    gap: 1.5rem;\n    grid-template-columns: 2fr 1fr;\n  }\n  .news-homepage-section {\n    display: grid;\n    gap: 1.5rem;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":[" @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');\r\n:root {\r\n  --color-soft-orange: hsl(35, 77%, 62%);\r\n  --color-soft-red: hsl(5, 85%, 63%);\r\n  --color-off-white: hsl(36, 100%, 99%);\r\n  --color-grayish-blue: hsl(233, 8%, 79%);\r\n  --color-dark-grayish-blue: hsl(236, 13%, 42%);\r\n  --color-very-dark-blue: hsl(240, 100%, 5%);\r\n  --point-5rem: 0.5rem;\r\n  --one-rem: 1rem;\r\n  --two-rem: 2rem;\r\n  --four-rem: 4rem;\r\n  --onepoint-5rem: 1.5rem;\r\n}\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  font-size: 15px;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  max-inline-size: 1440px;\r\n  padding-block-start: 1rem;\r\n  padding-inline: 10%;\r\n  margin-inline: auto;\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  position: relative;\r\n}\r\n\r\n// global styles\r\n\r\na {\r\n  text-decoration: none;\r\n  transition: color 250ms ease;\r\n}\r\n\r\n// global styles end\r\n\r\nimg, picture {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\nbody.shade {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  position:absolute;\r\n  z-index: 9;\r\n}\r\n\r\n\r\n.top-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-block: var(--two-rem);\r\n}\r\n\r\nheader {\r\n  height:fit-content;\r\n}\r\n\r\n\r\n.burger-menu {\r\n  display: none;\r\n  cursor: pointer;\r\n  background-color: inherit;\r\n  padding-block-start: var(--point-5rem);\r\n}\r\n\r\n.nav-list {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n  a {\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    font-size: 1.2rem;\r\n    color: var(--color-dark-grayish-blue);\r\n    // transition: color 250ms ease;\r\n    margin-inline-start: var(--onepoint-5rem);\r\n  }\r\n\r\n  a:hover {\r\n    color: var(--color-soft-red);\r\n  }\r\n}\r\n\r\nnav.responsive {\r\n  transform: translateX(0%);\r\n  transition: 550ms ease transform;\r\n}\r\n\r\n.news-homepage-section {\r\n  margin-block-start: var(--one-rem);\r\n  margin-block-end: var(--four-rem);\r\n\r\n  h1 {\r\n    font-weight: 900;\r\n    line-height: 1;\r\n    font-size: 3rem;\r\n    margin-block-end: var(--one-rem);\r\n  }\r\n\r\n  p {\r\n    color: var(--color-dark-grayish-blue);\r\n    margin-block-end: var(--onepoint-5rem);\r\n  }\r\n\r\n  button {\r\n    inline-size: 12rem;\r\n    padding-inline: var(--one-rem);\r\n    padding-block: var(--one-rem);\r\n    color: var(--color-off-white);\r\n    letter-spacing: 0.150rem;\r\n    font-weight: 500;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    background-color: var(--color-soft-red);\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: background-color 250ms ease;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: var(--color-very-dark-blue);\r\n  }\r\n}\r\n\r\n.news-aside-right {\r\n  max-width: 33.33rem;\r\n  padding-block-start: 1.5rem;\r\n  padding-inline: 1.5rem;\r\n  background-color: var(--color-very-dark-blue);\r\n  block-size: fit-content;\r\n  .hr {\r\n    border: none;\r\n    height: 0.006rem;\r\n    background-color: var(--color-off-white);\r\n  }\r\n  h2 {\r\n    font-size: 2.5rem;\r\n    color: var(--color-soft-orange);\r\n  }\r\n}\r\n\r\n.aside-details {\r\n  padding-block: var(--one-rem);\r\n\r\n  a {\r\n    color: var(--color-off-white);\r\n  }\r\n\r\n  a:hover {\r\n    color:var(--color-soft-orange);\r\n  }\r\n\r\n  p {\r\n    color: var(--color-grayish-blue);\r\n    padding-block-start: var(--point-5rem);\r\n  }\r\n}\r\n.news-homepage-bottom-section {\r\n  margin-block: var(--four-rem);\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));\r\n}\r\n\r\n.news-homepage-bottom-article {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-block-end: 2rem;\r\n  max-width: 18.75rem;\r\n  margin-inline-end: var(--point-5rem);\r\n  align-items:center;\r\n  img {\r\n    object-fit: cover;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.bottom-article-img {\r\n  min-width: 6.67rem;\r\n  height: 80%;\r\n}\r\n\r\n.bottom-article-details {\r\n  padding-block-start: 0.2rem;\r\n  padding-block: 1rem;\r\n  strong {\r\n    font-size: var(--two-rem);\r\n    color: var(--color-grayish-blue);\r\n  }\r\n\r\n  a {\r\n    color: var(--color-very-dark-blue);\r\n    font-weight: 800;\r\n  }\r\n\r\n  a:hover {\r\n    color: var(--color-soft-red);\r\n  }\r\n\r\n  p {\r\n    margin-block: var(--point-5rem);\r\n    color: var(--color-dark-grayish-blue);\r\n  }\r\n} \r\n\r\n@keyframes animateNavLinks {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(30px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform:translateX(0px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 51.2rem) {\r\n\r\n  body {\r\n    padding-inline: 1rem;\r\n    inline-size: 100%;\r\n  }\r\n\r\n  .top-wrapper {\r\n    padding-block-start: 0;\r\n  }\r\n\r\n  .nav {\r\n    position: fixed;\r\n    top: 0;right: 0;\r\n    height: 100%;\r\n    background-color: var(--color-off-white);\r\n    transform: translateX(130%);\r\n  }\r\n\r\n  \r\n  .burger-menu {\r\n    visibility: visible;\r\n    position: fixed;\r\n    z-index: 1;\r\n    right: 0.8rem; top: 1rem;\r\n    display: block;\r\n    border: none;\r\n  }\r\n\r\n\r\n  .nav-list {\r\n    transform: translateY(58%);\r\n    display: block;\r\n    margin-inline-start: 1rem; \r\n    margin-inline-end: 7rem; \r\n    inline-size: fit-content;\r\n    height: initial;\r\n    li {\r\n      margin-block: 1rem;\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 37.5rem) {\r\n  .container {\r\n    display:grid;\r\n    gap: 1.5rem;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n\r\n  .news-homepage-section {\r\n    display:grid;\r\n    gap: 1.5rem;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/logo.svg */ "./src/assets/images/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-menu.svg */ "./src/assets/images/icon-menu.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/image-web-3-desktop-800x329.jpg */ "./src/assets/images/image-web-3-desktop-800x329.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/image-web-3-mobile-400x350.jpg */ "./src/assets/images/image-web-3-mobile-400x350.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/image-retro-pcs.jpg */ "./src/assets/images/image-retro-pcs.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/image-top-laptops.jpg */ "./src/assets/images/image-top-laptops.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/image-gaming-growth.jpg */ "./src/assets/images/image-gaming-growth.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Frontend Mentor | News homepage</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"top-wrapper\">\r\n      <header>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" />\r\n      </header>\r\n\r\n      <button class=\"burger-menu\">\r\n        <img\r\n          src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n          alt=\"navbar button close/burger\"\r\n          id=\"close\"\r\n        />\r\n      </button>\r\n\r\n      <nav class=\"nav\">\r\n        <ul class=\"nav-list\">\r\n          <li><a href=\"#\">Home</a></li>\r\n          <li><a href=\"#\">New</a></li>\r\n          <li><a href=\"#\">Popular</a></li>\r\n          <li><a href=\"#\">Trending</a></li>\r\n          <li><a href=\"#\">Categories</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <main class=\"news-homepage-main\">\r\n        <picture>\r\n          <source\r\n            media=\"(min-width: 25rem)\"\r\n            srcset=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n          />\r\n          <img\r\n            class=\"web-3-img\"\r\n            src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n            alt=\"wooden geometry color puzzle shapes\"\r\n          />\r\n        </picture>\r\n  \r\n        <section class=\"news-homepage-section\">\r\n          <h1>The Bright Future of Web 3.0?</h1>\r\n          <div>\r\n            <p>\r\n              We dive into the next evolution of the web that claims to put the\r\n              power of the platforms back into the hands of the people. But is it\r\n              really fulfilling its promise?\r\n            </p>\r\n            <button>read more</button>\r\n          </div>\r\n        </section>\r\n      </main>\r\n  \r\n      <aside class=\"news-aside-right\">\r\n        <h2>New</h2>\r\n  \r\n        <div class=\"aside-details\">\r\n          <h3><a href=\"#\">Hydrogen VS Electric Cars</a></h3>\r\n          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>\r\n        </div>\r\n        <hr class=\"hr\" />\r\n        <div class=\"aside-details\">\r\n          <h3><a href=\"#\">The Downsides o4A1 Artistry</a></h3>\r\n          <p>\r\n            What are the possible adverse effects of on-demand Al image\r\n            generation?\r\n          </p>\r\n        </div>\r\n        <hr class=\"hr\" />\r\n        <div class=\"aside-details\">\r\n          <h3><a href=\"#\">Is VC Funding Drying Up?</a></h3>\r\n          <p>\r\n            Private funding by VC firms is down 50% YOY. We take a look at what\r\n            that means.\r\n          </p>\r\n        </div>\r\n      </aside>\r\n    </div>\r\n\r\n    <section class=\"news-homepage-bottom-section\">\r\n      <article class=\"news-homepage-bottom-article\">\r\n        <div class=\"bottom-article-img\">\r\n          <img\r\n            src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n            alt=\"Retro Computers\"\r\n          />\r\n        </div>      \r\n\r\n        <div class=\"bottom-article-details\">\r\n          <strong> 01</strong>\r\n          <h4><a href=\"#\">Reviving Retro PCs</a></h4>\r\n          <p>What happens when old PCs are given modern upgrades?</p>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"news-homepage-bottom-article\">\r\n        <div class=\"bottom-article-img\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"keyboard\" />\r\n        </div>\r\n\r\n        <div class=\"bottom-article-details\">\r\n          <strong> 02</strong>\r\n          <h4><a href=\"#\">Top 10 Laptops of 2022 </a></h4>\r\n          <p>Our best picks for various needs and budgets.</p>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"news-homepage-bottom-article\">\r\n        <div class=\"bottom-article-img\">\r\n          <img\r\n            src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n            alt=\"computer gaming joystick\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"bottom-article-details\">\r\n          <strong> 03</strong>\r\n          <h4><a href=\"#\">The Growth of Gaming</a></h4>\r\n          <p>How the pandemic has sparked fresh opportunities.</p>\r\n        </div>\r\n      </article>\r\n    </section>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_icon_menu_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/icon-menu-close.svg */ "./src/assets/images/icon-menu-close.svg");
/* harmony import */ var _assets_images_icon_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/icon-menu.svg */ "./src/assets/images/icon-menu.svg");


const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger-menu");
const close =document.querySelector("#close");
const navLinks = document.querySelectorAll(".nav-list > li");
const main = document.querySelector("main");



burger.addEventListener("click", function () {
    nav.classList.toggle("responsive");
    if (nav.className.includes("responsive")) {
        close.src=_assets_images_icon_menu_close_svg__WEBPACK_IMPORTED_MODULE_0__;
        document.body.classList.add("shade");
    } else {
        close.src= _assets_images_icon_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
        document.body.classList.remove("shade");
    }
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation="";
        } else {
            link.style.animation =`animateNavLinks 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })
});

// burger.addEventListener("click", function () {
//     nav.classList.toggle("responsive");
//     if (nav.className.includes("responsive")) {
//         navLinks.forEach((li, index) => {
//             console.log("hello");
//             li.style.animation =`animateNavLinks 0.5s ease forwards ${index/5+0.3}s`;
//         });
//         close.src=closeImage;
//     } else {
//         close.src= openImage;
//         li.style.animation="";
//     }
// });


/***/ }),

/***/ "./src/assets/images/icon-menu-close.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icon-menu-close.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ca20d86e8364ad748c94.svg";

/***/ }),

/***/ "./src/assets/images/icon-menu.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-menu.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f967d833be0e64002eea.svg";

/***/ }),

/***/ "./src/assets/images/image-gaming-growth.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/image-gaming-growth.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a3c918e98b9e1f6fe1a1.jpg";

/***/ }),

/***/ "./src/assets/images/image-retro-pcs.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/image-retro-pcs.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4ecb8a36b05f012297a6.jpg";

/***/ }),

/***/ "./src/assets/images/image-top-laptops.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/image-top-laptops.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6c916187a42a1fa3819f.jpg";

/***/ }),

/***/ "./src/assets/images/image-web-3-desktop-800x329.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/image-web-3-desktop-800x329.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2bb899c414830b831cce.jpg";

/***/ }),

/***/ "./src/assets/images/image-web-3-mobile-400x350.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/image-web-3-mobile-400x350.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b52cac61597915fa4b80.jpg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c6b5661f5975f9f1c10d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation.js */ "./src/components/navigation.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1B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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDQztBQUNhO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLXNvZnQtb3JhbmdlOiBoc2woMzUsIDc3JSwgNjIlKTtcXG4gIC0tY29sb3Itc29mdC1yZWQ6IGhzbCg1LCA4NSUsIDYzJSk7XFxuICAtLWNvbG9yLW9mZi13aGl0ZTogaHNsKDM2LCAxMDAlLCA5OSUpO1xcbiAgLS1jb2xvci1ncmF5aXNoLWJsdWU6IGhzbCgyMzMsIDglLCA3OSUpO1xcbiAgLS1jb2xvci1kYXJrLWdyYXlpc2gtYmx1ZTogaHNsKDIzNiwgMTMlLCA0MiUpO1xcbiAgLS1jb2xvci12ZXJ5LWRhcmstYmx1ZTogaHNsKDI0MCwgMTAwJSwgNSUpO1xcbiAgLS1wb2ludC01cmVtOiAwLjVyZW07XFxuICAtLW9uZS1yZW06IDFyZW07XFxuICAtLXR3by1yZW06IDJyZW07XFxuICAtLWZvdXItcmVtOiA0cmVtO1xcbiAgLS1vbmVwb2ludC01cmVtOiAxLjVyZW07XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgbWF4LWlubGluZS1zaXplOiAxNDQwcHg7XFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxcmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDEwJTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZTtcXG59XFxuXFxuaW1nLCBwaWN0dXJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5LnNoYWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi50b3Atd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tdHdvLXJlbSk7XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYnVyZ2VyLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiB2YXIoLS1wb2ludC01cmVtKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmF2LWxpc3QgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWUpO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tb25lcG9pbnQtNXJlbSk7XFxufVxcbi5uYXYtbGlzdCBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LXJlZCk7XFxufVxcblxcbm5hdi5yZXNwb25zaXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB0cmFuc2l0aW9uOiA1NTBtcyBlYXNlIHRyYW5zZm9ybTtcXG59XFxuXFxuLm5ld3MtaG9tZXBhZ2Utc2VjdGlvbiB7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLW9uZS1yZW0pO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tZm91ci1yZW0pO1xcbn1cXG4ubmV3cy1ob21lcGFnZS1zZWN0aW9uIGgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLW9uZS1yZW0pO1xcbn1cXG4ubmV3cy1ob21lcGFnZS1zZWN0aW9uIHAge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheWlzaC1ibHVlKTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLW9uZXBvaW50LTVyZW0pO1xcbn1cXG4ubmV3cy1ob21lcGFnZS1zZWN0aW9uIGJ1dHRvbiB7XFxuICBpbmxpbmUtc2l6ZTogMTJyZW07XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tb25lLXJlbSk7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1vbmUtcmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtcmVkKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZTtcXG59XFxuLm5ld3MtaG9tZXBhZ2Utc2VjdGlvbiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdmVyeS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4ubmV3cy1hc2lkZS1yaWdodCB7XFxuICBtYXgtd2lkdGg6IDMzLjMzcmVtO1xcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMS41cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXZlcnktZGFyay1ibHVlKTtcXG4gIGJsb2NrLXNpemU6IGZpdC1jb250ZW50O1xcbn1cXG4ubmV3cy1hc2lkZS1yaWdodCAuaHIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAwLjAwNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxufVxcbi5uZXdzLWFzaWRlLXJpZ2h0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtb3JhbmdlKTtcXG59XFxuXFxuLmFzaWRlLWRldGFpbHMge1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxufVxcbi5hc2lkZS1kZXRhaWxzIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxufVxcbi5hc2lkZS1kZXRhaWxzIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtb3JhbmdlKTtcXG59XFxuLmFzaWRlLWRldGFpbHMgcCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheWlzaC1ibHVlKTtcXG4gIHBhZGRpbmctYmxvY2stc3RhcnQ6IHZhcigtLXBvaW50LTVyZW0pO1xcbn1cXG5cXG4ubmV3cy1ob21lcGFnZS1ib3R0b20tc2VjdGlvbiB7XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLWZvdXItcmVtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1LjYyNXJlbSwgMWZyKSk7XFxufVxcblxcbi5uZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wb2ludC01cmVtKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlIGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvdHRvbS1hcnRpY2xlLWltZyB7XFxuICBtaW4td2lkdGg6IDYuNjdyZW07XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmJvdHRvbS1hcnRpY2xlLWRldGFpbHMge1xcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMC4ycmVtO1xcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcXG59XFxuLmJvdHRvbS1hcnRpY2xlLWRldGFpbHMgc3Ryb25nIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHdvLXJlbSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheWlzaC1ibHVlKTtcXG59XFxuLmJvdHRvbS1hcnRpY2xlLWRldGFpbHMgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdmVyeS1kYXJrLWJsdWUpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmJvdHRvbS1hcnRpY2xlLWRldGFpbHMgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcbn1cXG4uYm90dG9tLWFydGljbGUtZGV0YWlscyBwIHtcXG4gIG1hcmdpbi1ibG9jazogdmFyKC0tcG9pbnQtNXJlbSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVOYXZMaW5rcyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MS4ycmVtKSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgIGlubGluZS1zaXplOiAxMDAlO1xcbiAgfVxcbiAgLnRvcC13cmFwcGVyIHtcXG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMDtcXG4gIH1cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb2ZmLXdoaXRlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMCUpO1xcbiAgfVxcbiAgLmJ1cmdlci1tZW51IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMC44cmVtO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICAubmF2LWxpc3Qge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTglKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA3cmVtO1xcbiAgICBpbmxpbmUtc2l6ZTogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogaW5pdGlhbDtcXG4gIH1cXG4gIC5uYXYtbGlzdCBsaSB7XFxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcuNXJlbSkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICB9XFxuICAubmV3cy1ob21lcGFnZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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QUNBLE1BQUE7SUFBTyxRQUFBO0lBQ1AsWUFBQTtJQUNBLHdDQUFBO0lBQ0EsMkJBQUE7RUFyQkY7RUF5QkE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUFlLFNBQUE7SUFDZixjQUFBO0lBQ0EsWUFBQTtFQXRCRjtFQTBCQTtJQUNFLDBCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0EsdUJBQUE7SUFDQSx3QkFBQTtJQUNBLGVBQUE7RUF4QkY7RUF5QkU7SUFDRSxrQkFBQTtJQUNBLFVBQUE7RUF2Qko7QUFDRjtBQTJCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtFQXpCRjtFQTRCQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EscUNBQUE7RUExQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG46cm9vdCB7XFxyXFxuICAtLWNvbG9yLXNvZnQtb3JhbmdlOiBoc2woMzUsIDc3JSwgNjIlKTtcXHJcXG4gIC0tY29sb3Itc29mdC1yZWQ6IGhzbCg1LCA4NSUsIDYzJSk7XFxyXFxuICAtLWNvbG9yLW9mZi13aGl0ZTogaHNsKDM2LCAxMDAlLCA5OSUpO1xcclxcbiAgLS1jb2xvci1ncmF5aXNoLWJsdWU6IGhzbCgyMzMsIDglLCA3OSUpO1xcclxcbiAgLS1jb2xvci1kYXJrLWdyYXlpc2gtYmx1ZTogaHNsKDIzNiwgMTMlLCA0MiUpO1xcclxcbiAgLS1jb2xvci12ZXJ5LWRhcmstYmx1ZTogaHNsKDI0MCwgMTAwJSwgNSUpO1xcclxcbiAgLS1wb2ludC01cmVtOiAwLjVyZW07XFxyXFxuICAtLW9uZS1yZW06IDFyZW07XFxyXFxuICAtLXR3by1yZW06IDJyZW07XFxyXFxuICAtLWZvdXItcmVtOiA0cmVtO1xcclxcbiAgLS1vbmVwb2ludC01cmVtOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgbWF4LWlubGluZS1zaXplOiAxNDQwcHg7XFxyXFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxcmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDEwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8vIGdsb2JhbCBzdHlsZXNcXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi8vIGdsb2JhbCBzdHlsZXMgZW5kXFxyXFxuXFxyXFxuaW1nLCBwaWN0dXJlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnNoYWRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvcC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS10d28tcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDpmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1cmdlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZy1ibG9jay1zdGFydDogdmFyKC0tcG9pbnQtNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWUpO1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlO1xcclxcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1vbmVwb2ludC01cmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5uYXYucmVzcG9uc2l2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogNTUwbXMgZWFzZSB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWhvbWVwYWdlLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vbmUtcmVtKTtcXHJcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLWZvdXItcmVtKTtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb25lLXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheWlzaC1ibHVlKTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb25lcG9pbnQtNXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBpbmxpbmUtc2l6ZTogMTJyZW07XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiB2YXIoLS1vbmUtcmVtKTtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNTByZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdmVyeS1kYXJrLWJsdWUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1hc2lkZS1yaWdodCB7XFxyXFxuICBtYXgtd2lkdGg6IDMzLjMzcmVtO1xcclxcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMS41cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXZlcnktZGFyay1ibHVlKTtcXHJcXG4gIGJsb2NrLXNpemU6IGZpdC1jb250ZW50O1xcclxcbiAgLmhyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDAuMDA2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xcclxcbiAgfVxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtb3JhbmdlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWRldGFpbHMge1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29sb3Itc29mdC1vcmFuZ2UpO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5aXNoLWJsdWUpO1xcclxcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiB2YXIoLS1wb2ludC01cmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5ld3MtaG9tZXBhZ2UtYm90dG9tLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1mb3VyLXJlbSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNS42MjVyZW0sIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1ob21lcGFnZS1ib3R0b20tYXJ0aWNsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJsb2NrLWVuZDogMnJlbTtcXHJcXG4gIG1heC13aWR0aDogMTguNzVyZW07XFxyXFxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcG9pbnQtNXJlbSk7XFxyXFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWFydGljbGUtaW1nIHtcXHJcXG4gIG1pbi13aWR0aDogNi42N3JlbTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWFydGljbGUtZGV0YWlscyB7XFxyXFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwLjJyZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcclxcbiAgc3Ryb25nIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS10d28tcmVtKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXlpc2gtYmx1ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXZlcnktZGFyay1ibHVlKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogdmFyKC0tcG9pbnQtNXJlbSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxyXFxuICB9XFxyXFxufSBcXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGVOYXZMaW5rcyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxLjJyZW0pIHtcXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gICAgaW5saW5lLXNpemU6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wLXdyYXBwZXIge1xcclxcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO3JpZ2h0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAgLmJ1cmdlci1tZW51IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICByaWdodDogMC44cmVtOyB0b3A6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTglKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07IFxcclxcbiAgICBtYXJnaW4taW5saW5lLWVuZDogN3JlbTsgXFxyXFxuICAgIGlubGluZS1zaXplOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xcclxcbiAgICBsaSB7XFxyXFxuICAgICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcuNXJlbSkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdzLWhvbWVwYWdlLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pY29uLW1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLXdlYi0zLWRlc2t0b3AtODAweDMyOS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW1hZ2Utd2ViLTMtbW9iaWxlLTQwMHgzNTAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLXJldHJvLXBjcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtdG9wLWxhcHRvcHMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWdhbWluZy1ncm93dGguanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcclxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPkZyb250ZW5kIE1lbnRvciB8IE5ld3MgaG9tZXBhZ2U8L3RpdGxlPlxcclxcbiAgPC9oZWFkPlxcclxcbiAgPGJvZHk+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcC13cmFwcGVyXFxcIj5cXHJcXG4gICAgICA8aGVhZGVyPlxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcImxvZ29cXFwiIC8+XFxyXFxuICAgICAgPC9oZWFkZXI+XFxyXFxuXFxyXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnVyZ2VyLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPGltZ1xcclxcbiAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIlxcclxcbiAgICAgICAgICBhbHQ9XFxcIm5hdmJhciBidXR0b24gY2xvc2UvYnVyZ2VyXFxcIlxcclxcbiAgICAgICAgICBpZD1cXFwiY2xvc2VcXFwiXFxyXFxuICAgICAgICAvPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgIDxuYXYgY2xhc3M9XFxcIm5hdlxcXCI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdi1saXN0XFxcIj5cXHJcXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkhvbWU8L2E+PC9saT5cXHJcXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk5ldzwvYT48L2xpPlxcclxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+UG9wdWxhcjwvYT48L2xpPlxcclxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+VHJlbmRpbmc8L2E+PC9saT5cXHJcXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkNhdGVnb3JpZXM8L2E+PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgPC9uYXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxtYWluIGNsYXNzPVxcXCJuZXdzLWhvbWVwYWdlLW1haW5cXFwiPlxcclxcbiAgICAgICAgPHBpY3R1cmU+XFxyXFxuICAgICAgICAgIDxzb3VyY2VcXHJcXG4gICAgICAgICAgICBtZWRpYT1cXFwiKG1pbi13aWR0aDogMjVyZW0pXFxcIlxcclxcbiAgICAgICAgICAgIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiXFxyXFxuICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgIDxpbWdcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwid2ViLTMtaW1nXFxcIlxcclxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgYWx0PVxcXCJ3b29kZW4gZ2VvbWV0cnkgY29sb3IgcHV6emxlIHNoYXBlc1xcXCJcXHJcXG4gICAgICAgICAgLz5cXHJcXG4gICAgICAgIDwvcGljdHVyZT5cXHJcXG4gIFxcclxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcIm5ld3MtaG9tZXBhZ2Utc2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgIDxoMT5UaGUgQnJpZ2h0IEZ1dHVyZSBvZiBXZWIgMy4wPzwvaDE+XFxyXFxuICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICBXZSBkaXZlIGludG8gdGhlIG5leHQgZXZvbHV0aW9uIG9mIHRoZSB3ZWIgdGhhdCBjbGFpbXMgdG8gcHV0IHRoZVxcclxcbiAgICAgICAgICAgICAgcG93ZXIgb2YgdGhlIHBsYXRmb3JtcyBiYWNrIGludG8gdGhlIGhhbmRzIG9mIHRoZSBwZW9wbGUuIEJ1dCBpcyBpdFxcclxcbiAgICAgICAgICAgICAgcmVhbGx5IGZ1bGZpbGxpbmcgaXRzIHByb21pc2U/XFxyXFxuICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgIDxidXR0b24+cmVhZCBtb3JlPC9idXR0b24+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgIDwvbWFpbj5cXHJcXG4gIFxcclxcbiAgICAgIDxhc2lkZSBjbGFzcz1cXFwibmV3cy1hc2lkZS1yaWdodFxcXCI+XFxyXFxuICAgICAgICA8aDI+TmV3PC9oMj5cXHJcXG4gIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXNpZGUtZGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICAgIDxoMz48YSBocmVmPVxcXCIjXFxcIj5IeWRyb2dlbiBWUyBFbGVjdHJpYyBDYXJzPC9hPjwvaDM+XFxyXFxuICAgICAgICAgIDxwPldpbGwgaHlkcm9nZW4tZnVlbGVkIGNhcnMgZXZlciBjYXRjaCB1cCB0byBFVnM/PC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8aHIgY2xhc3M9XFxcImhyXFxcIiAvPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXNpZGUtZGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICAgIDxoMz48YSBocmVmPVxcXCIjXFxcIj5UaGUgRG93bnNpZGVzIG80QTEgQXJ0aXN0cnk8L2E+PC9oMz5cXHJcXG4gICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgV2hhdCBhcmUgdGhlIHBvc3NpYmxlIGFkdmVyc2UgZWZmZWN0cyBvZiBvbi1kZW1hbmQgQWwgaW1hZ2VcXHJcXG4gICAgICAgICAgICBnZW5lcmF0aW9uP1xcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxociBjbGFzcz1cXFwiaHJcXFwiIC8+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhc2lkZS1kZXRhaWxzXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxhIGhyZWY9XFxcIiNcXFwiPklzIFZDIEZ1bmRpbmcgRHJ5aW5nIFVwPzwvYT48L2gzPlxcclxcbiAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICBQcml2YXRlIGZ1bmRpbmcgYnkgVkMgZmlybXMgaXMgZG93biA1MCUgWU9ZLiBXZSB0YWtlIGEgbG9vayBhdCB3aGF0XFxyXFxuICAgICAgICAgICAgdGhhdCBtZWFucy5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9hc2lkZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJuZXdzLWhvbWVwYWdlLWJvdHRvbS1zZWN0aW9uXFxcIj5cXHJcXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwibmV3cy1ob21lcGFnZS1ib3R0b20tYXJ0aWNsZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3R0b20tYXJ0aWNsZS1pbWdcXFwiPlxcclxcbiAgICAgICAgICA8aW1nXFxyXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBhbHQ9XFxcIlJldHJvIENvbXB1dGVyc1xcXCJcXHJcXG4gICAgICAgICAgLz5cXHJcXG4gICAgICAgIDwvZGl2PiAgICAgIFxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm90dG9tLWFydGljbGUtZGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICAgIDxzdHJvbmc+IDAxPC9zdHJvbmc+XFxyXFxuICAgICAgICAgIDxoND48YSBocmVmPVxcXCIjXFxcIj5SZXZpdmluZyBSZXRybyBQQ3M8L2E+PC9oND5cXHJcXG4gICAgICAgICAgPHA+V2hhdCBoYXBwZW5zIHdoZW4gb2xkIFBDcyBhcmUgZ2l2ZW4gbW9kZXJuIHVwZ3JhZGVzPzwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvYXJ0aWNsZT5cXHJcXG5cXHJcXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwibmV3cy1ob21lcGFnZS1ib3R0b20tYXJ0aWNsZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3R0b20tYXJ0aWNsZS1pbWdcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwia2V5Ym9hcmRcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1hcnRpY2xlLWRldGFpbHNcXFwiPlxcclxcbiAgICAgICAgICA8c3Ryb25nPiAwMjwvc3Ryb25nPlxcclxcbiAgICAgICAgICA8aDQ+PGEgaHJlZj1cXFwiI1xcXCI+VG9wIDEwIExhcHRvcHMgb2YgMjAyMiA8L2E+PC9oND5cXHJcXG4gICAgICAgICAgPHA+T3VyIGJlc3QgcGlja3MgZm9yIHZhcmlvdXMgbmVlZHMgYW5kIGJ1ZGdldHMuPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9hcnRpY2xlPlxcclxcblxcclxcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJuZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1hcnRpY2xlLWltZ1xcXCI+XFxyXFxuICAgICAgICAgIDxpbWdcXHJcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGFsdD1cXFwiY29tcHV0ZXIgZ2FtaW5nIGpveXN0aWNrXFxcIlxcclxcbiAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3R0b20tYXJ0aWNsZS1kZXRhaWxzXFxcIj5cXHJcXG4gICAgICAgICAgPHN0cm9uZz4gMDM8L3N0cm9uZz5cXHJcXG4gICAgICAgICAgPGg0PjxhIGhyZWY9XFxcIiNcXFwiPlRoZSBHcm93dGggb2YgR2FtaW5nPC9hPjwvaDQ+XFxyXFxuICAgICAgICAgIDxwPkhvdyB0aGUgcGFuZGVtaWMgaGFzIHNwYXJrZWQgZnJlc2ggb3Bwb3J0dW5pdGllcy48L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2FydGljbGU+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG4gIDwvYm9keT5cXHJcXG48L2h0bWw+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNsb3NlSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1tZW51LWNsb3NlLnN2Z1wiO1xyXG5pbXBvcnQgb3BlbkltYWdlIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWVudS5zdmdcIjtcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLW1lbnVcIik7XHJcbmNvbnN0IGNsb3NlID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlXCIpO1xyXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpc3QgPiBsaVwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG5cclxuXHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwicmVzcG9uc2l2ZVwiKTtcclxuICAgIGlmIChuYXYuY2xhc3NOYW1lLmluY2x1ZGVzKFwicmVzcG9uc2l2ZVwiKSkge1xyXG4gICAgICAgIGNsb3NlLnNyYz1jbG9zZUltYWdlO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInNoYWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZS5zcmM9IG9wZW5JbWFnZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFkZVwiKTtcclxuICAgIH1cclxuICAgIG5hdkxpbmtzLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmsuc3R5bGUuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUuYW5pbWF0aW9uPVwiXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5zdHlsZS5hbmltYXRpb24gPWBhbmltYXRlTmF2TGlua3MgMC41cyBlYXNlIGZvcndhcmRzICR7aW5kZXggLyA3ICsgMC4zfXNgO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pO1xyXG5cclxuLy8gYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInJlc3BvbnNpdmVcIik7XHJcbi8vICAgICBpZiAobmF2LmNsYXNzTmFtZS5pbmNsdWRlcyhcInJlc3BvbnNpdmVcIikpIHtcclxuLy8gICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKChsaSwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuLy8gICAgICAgICAgICAgbGkuc3R5bGUuYW5pbWF0aW9uID1gYW5pbWF0ZU5hdkxpbmtzIDAuNXMgZWFzZSBmb3J3YXJkcyAke2luZGV4LzUrMC4zfXNgO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIGNsb3NlLnNyYz1jbG9zZUltYWdlO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBjbG9zZS5zcmM9IG9wZW5JbWFnZTtcclxuLy8gICAgICAgICBsaS5zdHlsZS5hbmltYXRpb249XCJcIjtcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguaHRtbFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzXCI7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=