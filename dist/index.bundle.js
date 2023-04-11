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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-soft-orange: hsl(35, 77%, 62%);\n  --color-soft-red: hsl(5, 85%, 63%);\n  --color-off-white: hsl(36, 100%, 99%);\n  --color-grayish-blue: hsl(233, 8%, 79%);\n  --color-dark-grayish-blue: hsl(236, 13%, 42%);\n  --color-very-dark-blue: hsl(240, 100%, 5%);\n  --point-5rem: 0.5rem;\n  --one-rem: 1rem;\n  --two-rem: 2rem;\n  --four-rem: 4rem;\n  --onepoint-5rem: 1.5rem;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  font-family: \"Inter\", sans-serif;\n}\n\nhtml, body {\n  height: 100%;\n  font-size: 15px;\n  overflow-x: hidden;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  max-inline-size: 1440px;\n  padding-block-start: 1rem;\n  padding-inline: 10%;\n  margin-inline: auto;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n}\n\na {\n  text-decoration: none;\n}\n\nimg, picture {\n  display: block;\n  max-width: 100%;\n}\n\nbody.shade {\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 9;\n}\n\n.top-wrapper {\n  display: flex;\n  justify-content: space-between;\n  padding-block: var(--two-rem);\n}\n\nheader {\n  height: fit-content;\n}\n\n.burger-menu {\n  display: none;\n  cursor: pointer;\n  background-color: inherit;\n  padding-block-start: var(--point-5rem);\n}\n\n.nav-list {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n.nav-list a {\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 1.2rem;\n  color: var(--color-dark-grayish-blue);\n  transition: color 250ms ease;\n  margin-inline-start: var(--onepoint-5rem);\n}\n.nav-list a:hover {\n  color: var(--color-soft-red);\n}\n\nnav.responsive {\n  transform: translateX(0%);\n  transition: 550ms ease transform;\n}\n\n.news-homepage-section {\n  margin-block-start: var(--one-rem);\n  margin-block-end: var(--four-rem);\n}\n.news-homepage-section h1 {\n  font-weight: 900;\n  line-height: 1;\n  font-size: 3rem;\n  margin-block-end: var(--one-rem);\n}\n.news-homepage-section p {\n  color: var(--color-dark-grayish-blue);\n  margin-block-end: var(--onepoint-5rem);\n}\n.news-homepage-section button {\n  inline-size: 12rem;\n  padding-inline: var(--one-rem);\n  padding-block: var(--one-rem);\n  color: var(--color-off-white);\n  letter-spacing: 0.15rem;\n  font-weight: 500;\n  font-size: 1rem;\n  text-transform: uppercase;\n  background-color: var(--color-soft-red);\n  border: none;\n}\n\n.news-aside-right {\n  max-width: 33.33rem;\n  padding-block-start: 1.5rem;\n  padding-inline: 1.5rem;\n  background-color: var(--color-very-dark-blue);\n  block-size: fit-content;\n}\n.news-aside-right .hr {\n  border: none;\n  height: 1px;\n  background-color: var(--color-off-white);\n}\n.news-aside-right h2 {\n  font-size: 2.5rem;\n  color: var(--color-soft-orange);\n}\n\n.aside-details {\n  padding-block: var(--one-rem);\n}\n.aside-details a {\n  color: var(--color-off-white);\n}\n.aside-details p {\n  color: var(--color-grayish-blue);\n  padding-block-start: var(--point-5rem);\n}\n\n.news-homepage-bottom-section {\n  margin-block: var(--four-rem);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n\n.news-homepage-bottom-article {\n  display: flex;\n  gap: 1rem;\n  margin-block-end: 2rem;\n  align-items: center;\n}\n.news-homepage-bottom-article img {\n  object-fit: cover;\n  height: 100%;\n}\n\n.bottom-article-img {\n  min-width: 6.67rem;\n  height: 80%;\n}\n\n.bottom-article-details {\n  padding-block-start: 0.2rem;\n}\n.bottom-article-details strong {\n  font-size: var(--two-rem);\n  color: var(--color-grayish-blue);\n}\n.bottom-article-details a {\n  color: var(--color-very-dark-blue);\n  font-weight: 800;\n}\n.bottom-article-details p {\n  margin-block: var(--point-5rem);\n  color: var(--color-dark-grayish-blue);\n}\n\n@keyframes animateNavLinks {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media screen and (max-width: 51.2rem) {\n  body {\n    padding-inline: 1rem;\n    inline-size: 100%;\n  }\n  .top-wrapper {\n    padding-block-start: 0;\n  }\n  .nav {\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100%;\n    background-color: var(--color-off-white);\n    transform: translateX(130%);\n  }\n  .burger-menu {\n    visibility: visible;\n    position: absolute;\n    z-index: 1;\n    right: 0.8rem;\n    top: 1rem;\n    display: block;\n    border: none;\n  }\n  .nav-list {\n    transform: translateY(58%);\n    display: block;\n    margin-inline-start: 1rem;\n    margin-inline-end: 7rem;\n    inline-size: fit-content;\n    height: initial;\n  }\n  .nav-list li {\n    margin-block: 1rem;\n    opacity: 0;\n  }\n}\n@media screen and (min-width: 600px) {\n  .container {\n    display: grid;\n    gap: 1.5rem;\n    grid-template-columns: 2fr 1fr;\n  }\n  .news-homepage-section {\n    display: grid;\n    gap: 1.5rem;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .news-homepage-bottom-article {\n    display: flex;\n    gap: 1rem;\n  }\n  .news-homepage-bottom-article img {\n    object-fit: cover;\n    height: 100%;\n  }\n}\n@media screen and (max-width: 545px) {\n  .news-homepage-bottom-article {\n    border: 1px solid currentColor;\n    max-width: 300px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AACA;EACE,sCAAA;EACA,kCAAA;EACA,qCAAA;EACA,uCAAA;EACA,6CAAA;EACA,0CAAA;EACA,oBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,SAAA;EACA,gCAAA;AACF;;AAGA;EACE,YAAA;EACA,eAAA;EACA,kBAAA;AAAF;;AAGA;EACE,gBAAA;EACA,mCAAA;EACA,uBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mCAAA;EACA,kBAAA;AAAF;;AAKA;EACE,qBAAA;AAFF;;AAOA;EACE,cAAA;EACA,eAAA;AAJF;;AAOA;EACE,oCAAA;EACA,kBAAA;EACA,UAAA;AAJF;;AAQA;EACE,aAAA;EACA,8BAAA;EACA,6BAAA;AALF;;AAQA;EACE,mBAAA;AALF;;AASA;EACE,aAAA;EACA,eAAA;EACA,yBAAA;EACA,sCAAA;AANF;;AASA;EACE,qBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;AANF;AAQE;EACE,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qCAAA;EACA,4BAAA;EACA,yCAAA;AANJ;AASE;EACE,4BAAA;AAPJ;;AAWA;EACE,yBAAA;EACA,gCAAA;AARF;;AAWA;EACE,kCAAA;EACA,iCAAA;AARF;AAUE;EACE,gBAAA;EACA,cAAA;EACA,eAAA;EACA,gCAAA;AARJ;AAWE;EACE,qCAAA;EACA,sCAAA;AATJ;AAYE;EACE,kBAAA;EACA,8BAAA;EACA,6BAAA;EACA,6BAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,uCAAA;EACA,YAAA;AAVJ;;AAcA;EACE,mBAAA;EACA,2BAAA;EACA,sBAAA;EACA,6CAAA;EACA,uBAAA;AAXF;AAYE;EACE,YAAA;EACA,WAAA;EACA,wCAAA;AAVJ;AAYE;EACE,iBAAA;EACA,+BAAA;AAVJ;;AAcA;EACE,6BAAA;AAXF;AAaE;EACE,6BAAA;AAXJ;AAcE;EACE,gCAAA;EACA,sCAAA;AAZJ;;AAeA;EACE,6BAAA;EACA,aAAA;EACA,2DAAA;AAZF;;AAeA;EACE,aAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;AAZF;AAaE;EACE,iBAAA;EACA,YAAA;AAXJ;;AAeA;EACE,kBAAA;EACA,WAAA;AAZF;;AAeA;EACE,2BAAA;AAZF;AAaE;EACE,yBAAA;EACA,gCAAA;AAXJ;AAcE;EACE,kCAAA;EACA,gBAAA;AAZJ;AAeE;EACE,+BAAA;EACA,qCAAA;AAbJ;;AAiBA;EACE;IACE,UAAA;IACA,2BAAA;EAdF;EAgBA;IACE,UAAA;IACA,0BAAA;EAdF;AACF;AAiBA;EAEE;IACE,oBAAA;IACA,iBAAA;EAhBF;EAmBA;IACE,sBAAA;EAjBF;EAoBA;IACE,eAAA;IACA,MAAA;IAAO,QAAA;IACP,YAAA;IACA,wCAAA;IACA,2BAAA;EAjBF;EAqBA;IACE,mBAAA;IACA,kBAAA;IACA,UAAA;IACA,aAAA;IAAe,SAAA;IACf,cAAA;IACA,YAAA;EAlBF;EAsBA;IACE,0BAAA;IACA,cAAA;IACA,yBAAA;IACA,uBAAA;IACA,wBAAA;IACA,eAAA;EApBF;EAqBE;IACE,kBAAA;IACA,UAAA;EAnBJ;AACF;AAuBA;EACE;IACE,aAAA;IACA,WAAA;IACA,8BAAA;EArBF;EAwBA;IACE,aAAA;IACA,WAAA;IACA,qCAAA;EAtBF;EAwBA;IACE,aAAA;IACA,SAAA;EAtBF;EAwBE;IACE,iBAAA;IACA,YAAA;EAtBJ;AACF;AA2BA;EACE;IACE,8BAAA;IACA,gBAAA;EAzBF;AACF","sourcesContent":[" @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');\r\n:root {\r\n  --color-soft-orange: hsl(35, 77%, 62%);\r\n  --color-soft-red: hsl(5, 85%, 63%);\r\n  --color-off-white: hsl(36, 100%, 99%);\r\n  --color-grayish-blue: hsl(233, 8%, 79%);\r\n  --color-dark-grayish-blue: hsl(236, 13%, 42%);\r\n  --color-very-dark-blue: hsl(240, 100%, 5%);\r\n  --point-5rem: 0.5rem;\r\n  --one-rem: 1rem;\r\n  --two-rem: 2rem;\r\n  --four-rem: 4rem;\r\n  --onepoint-5rem: 1.5rem;\r\n}\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  font-size: 15px;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  max-inline-size: 1440px;\r\n  padding-block-start: 1rem;\r\n  padding-inline: 10%;\r\n  margin-inline: auto;\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  position: relative;\r\n}\r\n\r\n// global styles\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n// global styles end\r\n\r\nimg, picture {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\nbody.shade {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  position:absolute;\r\n  z-index: 9;\r\n}\r\n\r\n\r\n.top-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-block: var(--two-rem);\r\n}\r\n\r\nheader {\r\n  height:fit-content;\r\n}\r\n\r\n\r\n.burger-menu {\r\n  display: none;\r\n  cursor: pointer;\r\n  background-color: inherit;\r\n  padding-block-start: var(--point-5rem);\r\n}\r\n\r\n.nav-list {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n  a {\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    font-size: 1.2rem;\r\n    color: var(--color-dark-grayish-blue);\r\n    transition: color 250ms ease;\r\n    margin-inline-start: var(--onepoint-5rem);\r\n  }\r\n\r\n  a:hover {\r\n    color: var(--color-soft-red);\r\n  }\r\n}\r\n\r\nnav.responsive {\r\n  transform: translateX(0%);\r\n  transition: 550ms ease transform;\r\n}\r\n\r\n.news-homepage-section {\r\n  margin-block-start: var(--one-rem);\r\n  margin-block-end: var(--four-rem);\r\n\r\n  h1 {\r\n    font-weight: 900;\r\n    line-height: 1;\r\n    font-size: 3rem;\r\n    margin-block-end: var(--one-rem);\r\n  }\r\n\r\n  p {\r\n    color: var(--color-dark-grayish-blue);\r\n    margin-block-end: var(--onepoint-5rem);\r\n  }\r\n\r\n  button {\r\n    inline-size: 12rem;\r\n    padding-inline: var(--one-rem);\r\n    padding-block: var(--one-rem);\r\n    color: var(--color-off-white);\r\n    letter-spacing: 0.150rem;\r\n    font-weight: 500;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    background-color: var(--color-soft-red);\r\n    border: none;\r\n  }\r\n}\r\n\r\n.news-aside-right {\r\n  max-width: 33.33rem;\r\n  padding-block-start: 1.5rem;\r\n  padding-inline: 1.5rem;\r\n  background-color: var(--color-very-dark-blue);\r\n  block-size: fit-content;\r\n  .hr {\r\n    border: none;\r\n    height: 1px;\r\n    background-color: var(--color-off-white);\r\n  }\r\n  h2 {\r\n    font-size: 2.5rem;\r\n    color: var(--color-soft-orange);\r\n  }\r\n}\r\n\r\n.aside-details {\r\n  padding-block: var(--one-rem);\r\n\r\n  a {\r\n    color: var(--color-off-white);\r\n  }\r\n\r\n  p {\r\n    color: var(--color-grayish-blue);\r\n    padding-block-start: var(--point-5rem);\r\n  }\r\n}\r\n.news-homepage-bottom-section {\r\n  margin-block: var(--four-rem);\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n}\r\n\r\n.news-homepage-bottom-article {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-block-end: 2rem;\r\n  align-items:center;\r\n  img {\r\n    object-fit: cover;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.bottom-article-img {\r\n  min-width: 6.67rem;\r\n  height: 80%;\r\n}\r\n\r\n.bottom-article-details {\r\n  padding-block-start: 0.2rem;\r\n  strong {\r\n    font-size: var(--two-rem);\r\n    color: var(--color-grayish-blue);\r\n  }\r\n\r\n  a {\r\n    color: var(--color-very-dark-blue);\r\n    font-weight: 800;\r\n  }\r\n\r\n  p {\r\n    margin-block: var(--point-5rem);\r\n    color: var(--color-dark-grayish-blue);\r\n  }\r\n} \r\n\r\n@keyframes animateNavLinks {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(30px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform:translateX(0px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 51.2rem) {\r\n\r\n  body {\r\n    padding-inline: 1rem;\r\n    inline-size: 100%;\r\n  }\r\n\r\n  .top-wrapper {\r\n    padding-block-start: 0;\r\n  }\r\n\r\n  .nav {\r\n    position: fixed;\r\n    top: 0;right: 0;\r\n    height: 100%;\r\n    background-color: var(--color-off-white);\r\n    transform: translateX(130%);\r\n  }\r\n\r\n  \r\n  .burger-menu {\r\n    visibility: visible;\r\n    position: absolute;\r\n    z-index: 1;\r\n    right: 0.8rem; top: 1rem;\r\n    display: block;\r\n    border: none;\r\n  }\r\n\r\n\r\n  .nav-list {\r\n    transform: translateY(58%);\r\n    display: block;\r\n    margin-inline-start: 1rem; \r\n    margin-inline-end: 7rem; \r\n    inline-size: fit-content;\r\n    height: initial;\r\n    li {\r\n      margin-block: 1rem;\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .container {\r\n    display:grid;\r\n    gap: 1.5rem;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n\r\n  .news-homepage-section {\r\n    display:grid;\r\n    gap: 1.5rem;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .news-homepage-bottom-article {\r\n    display: flex;\r\n    gap: 1rem;\r\n\r\n    img {\r\n      object-fit: cover;\r\n      height: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 545px) {\r\n  .news-homepage-bottom-article {\r\n    border: 1px solid currentColor;\r\n    max-width: 300px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Frontend Mentor | News homepage</title>\n  </head>\n  <body>\n    <div class=\"top-wrapper\">\n      <header>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" />\n      </header>\n\n      <button class=\"burger-menu\">\n        <img\n          src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n          alt=\"navbar button close/burger\"\n          id=\"close\"\n        />\n      </button>\n\n      <nav class=\"nav\">\n        <ul class=\"nav-list\">\n          <li><a href=\"#\">Home</a></li>\n          <li><a href=\"#\">New</a></li>\n          <li><a href=\"#\">Popular</a></li>\n          <li><a href=\"#\">Trending</a></li>\n          <li><a href=\"#\">Categories</a></li>\n        </ul>\n      </nav>\n    </div>\n\n    <div class=\"container\">\n      <main class=\"news-homepage-main\">\n        <picture>\n          <source\n            media=\"(min-width: 25rem)\"\n            srcset=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n          />\n          <img\n            class=\"web-3-img\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n            alt=\"wooden geometry color puzzle shapes\"\n          />\n        </picture>\n  \n        <section class=\"news-homepage-section\">\n          <h1>The Bright Future of Web 3.0?</h1>\n          <div>\n            <p>\n              We dive into the next evolution of the web that claims to put the\n              power of the platforms back into the hands of the people. But is it\n              really fulfilling its promise?\n            </p>\n            <button>read more</button>\n          </div>\n        </section>\n      </main>\n  \n      <aside class=\"news-aside-right\">\n        <h2>New</h2>\n  \n        <div class=\"aside-details\">\n          <h3><a href=\"#\">Hydrogen VS Electric Cars</a></h3>\n          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>\n        </div>\n        <hr class=\"hr\" />\n        <div class=\"aside-details\">\n          <h3><a href=\"#\">The Downsides o4A1 Artistry</a></h3>\n          <p>\n            What are the possible adverse effects of on-demand Al image\n            generation?\n          </p>\n        </div>\n        <hr class=\"hr\" />\n        <div class=\"aside-details\">\n          <h3><a href=\"#\">Is VC Funding Drying Up?</a></h3>\n          <p>\n            Private funding by VC firms is down 50% YOY. We take a look at what\n            that means.\n          </p>\n        </div>\n      </aside>\n    </div>\n\n    <section class=\"news-homepage-bottom-section\">\n      <article class=\"news-homepage-bottom-article\">\n        <div class=\"bottom-article-img\">\n          <img\n            src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n            alt=\"Retro Computers\"\n          />\n        </div>\n\n        <div class=\"bottom-article-details\">\n          <strong> 01</strong>\n          <h4><a href=\"#\">Reviving Retro PCs</a></h4>\n          <p>What happens when old PCs are given modern upgrades?</p>\n        </div>\n      </article>\n\n      <article class=\"news-homepage-bottom-article\">\n        <div class=\"bottom-article-img\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"keyboard\" />\n        </div>\n\n        <div class=\"bottom-article-details\">\n          <strong> 02</strong>\n          <h4><a href=\"#\">Top 10 Laptops of 2022 </a></h4>\n          <p>Our best picks for various needs and budgets.</p>\n        </div>\n      </article>\n\n      <article class=\"news-homepage-bottom-article\">\n        <div class=\"bottom-article-img\">\n          <img\n            src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n            alt=\"computer gaming joystick\"\n          />\n        </div>\n\n        <div class=\"bottom-article-details\">\n          <strong> 03</strong>\n          <h4><a href=\"#\">The Growth of Gaming</a></h4>\n          <p>How the pandemic has sparked fresh opportunities.</p>\n        </div>\n      </article>\n    </section>\n  </body>\n</html>\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFV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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ0M7QUFDYTtBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLW1haW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UtbWFpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1zb2Z0LW9yYW5nZTogaHNsKDM1LCA3NyUsIDYyJSk7XFxuICAtLWNvbG9yLXNvZnQtcmVkOiBoc2woNSwgODUlLCA2MyUpO1xcbiAgLS1jb2xvci1vZmYtd2hpdGU6IGhzbCgzNiwgMTAwJSwgOTklKTtcXG4gIC0tY29sb3ItZ3JheWlzaC1ibHVlOiBoc2woMjMzLCA4JSwgNzklKTtcXG4gIC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWU6IGhzbCgyMzYsIDEzJSwgNDIlKTtcXG4gIC0tY29sb3ItdmVyeS1kYXJrLWJsdWU6IGhzbCgyNDAsIDEwMCUsIDUlKTtcXG4gIC0tcG9pbnQtNXJlbTogMC41cmVtO1xcbiAgLS1vbmUtcmVtOiAxcmVtO1xcbiAgLS10d28tcmVtOiAycmVtO1xcbiAgLS1mb3VyLXJlbTogNHJlbTtcXG4gIC0tb25lcG9pbnQtNXJlbTogMS41cmVtO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIG1heC1pbmxpbmUtc2l6ZTogMTQ0MHB4O1xcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiAxMCU7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaW1nLCBwaWN0dXJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5LnNoYWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi50b3Atd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tdHdvLXJlbSk7XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYnVyZ2VyLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiB2YXIoLS1wb2ludC01cmVtKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmF2LWxpc3QgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZTtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLW9uZXBvaW50LTVyZW0pO1xcbn1cXG4ubmF2LWxpc3QgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcbn1cXG5cXG5uYXYucmVzcG9uc2l2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgdHJhbnNpdGlvbjogNTUwbXMgZWFzZSB0cmFuc2Zvcm07XFxufVxcblxcbi5uZXdzLWhvbWVwYWdlLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vbmUtcmVtKTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLWZvdXItcmVtKTtcXG59XFxuLm5ld3MtaG9tZXBhZ2Utc2VjdGlvbiBoMSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1vbmUtcmVtKTtcXG59XFxuLm5ld3MtaG9tZXBhZ2Utc2VjdGlvbiBwIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1vbmVwb2ludC01cmVtKTtcXG59XFxuLm5ld3MtaG9tZXBhZ2Utc2VjdGlvbiBidXR0b24ge1xcbiAgaW5saW5lLXNpemU6IDEycmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLW9uZS1yZW0pO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb2ZmLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zb2Z0LXJlZCk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uZXdzLWFzaWRlLXJpZ2h0IHtcXG4gIG1heC13aWR0aDogMzMuMzNyZW07XFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxLjVyZW07XFxuICBwYWRkaW5nLWlubGluZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdmVyeS1kYXJrLWJsdWUpO1xcbiAgYmxvY2stc2l6ZTogZml0LWNvbnRlbnQ7XFxufVxcbi5uZXdzLWFzaWRlLXJpZ2h0IC5ociB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxufVxcbi5uZXdzLWFzaWRlLXJpZ2h0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtb3JhbmdlKTtcXG59XFxuXFxuLmFzaWRlLWRldGFpbHMge1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxufVxcbi5hc2lkZS1kZXRhaWxzIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxufVxcbi5hc2lkZS1kZXRhaWxzIHAge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXlpc2gtYmx1ZSk7XFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiB2YXIoLS1wb2ludC01cmVtKTtcXG59XFxuXFxuLm5ld3MtaG9tZXBhZ2UtYm90dG9tLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1mb3VyLXJlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxufVxcblxcbi5uZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5ld3MtaG9tZXBhZ2UtYm90dG9tLWFydGljbGUgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm90dG9tLWFydGljbGUtaW1nIHtcXG4gIG1pbi13aWR0aDogNi42N3JlbTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uYm90dG9tLWFydGljbGUtZGV0YWlscyB7XFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwLjJyZW07XFxufVxcbi5ib3R0b20tYXJ0aWNsZS1kZXRhaWxzIHN0cm9uZyB7XFxuICBmb250LXNpemU6IHZhcigtLXR3by1yZW0pO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXlpc2gtYmx1ZSk7XFxufVxcbi5ib3R0b20tYXJ0aWNsZS1kZXRhaWxzIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXZlcnktZGFyay1ibHVlKTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5ib3R0b20tYXJ0aWNsZS1kZXRhaWxzIHAge1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1wb2ludC01cmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZU5hdkxpbmtzIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxLjJyZW0pIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICAgaW5saW5lLXNpemU6IDEwMCU7XFxuICB9XFxuICAudG9wLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwO1xcbiAgfVxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwJSk7XFxuICB9XFxuICAuYnVyZ2VyLW1lbnUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAwLjhyZW07XFxuICAgIHRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIC5uYXYtbGlzdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1OCUpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDdyZW07XFxuICAgIGlubGluZS1zaXplOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgfVxcbiAgLm5hdi1saXN0IGxpIHtcXG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICB9XFxuICAubmV3cy1ob21lcGFnZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuICAubmV3cy1ob21lcGFnZS1ib3R0b20tYXJ0aWNsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG4gIC5uZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0NXB4KSB7XFxuICAubmV3cy1ob21lcGFnZS1ib3R0b20tYXJ0aWNsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usc0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFD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QkFBQTtJQUNBLFVBQUE7RUFuQko7QUFDRjtBQXVCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtFQXJCRjtFQXdCQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EscUNBQUE7RUF0QkY7RUF3QkE7SUFDRSxhQUFBO0lBQ0EsU0FBQTtFQXRCRjtFQXdCRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQXRCSjtBQUNGO0FBMkJBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGdCQUFBO0VBekJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci1zb2Z0LW9yYW5nZTogaHNsKDM1LCA3NyUsIDYyJSk7XFxyXFxuICAtLWNvbG9yLXNvZnQtcmVkOiBoc2woNSwgODUlLCA2MyUpO1xcclxcbiAgLS1jb2xvci1vZmYtd2hpdGU6IGhzbCgzNiwgMTAwJSwgOTklKTtcXHJcXG4gIC0tY29sb3ItZ3JheWlzaC1ibHVlOiBoc2woMjMzLCA4JSwgNzklKTtcXHJcXG4gIC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWU6IGhzbCgyMzYsIDEzJSwgNDIlKTtcXHJcXG4gIC0tY29sb3ItdmVyeS1kYXJrLWJsdWU6IGhzbCgyNDAsIDEwMCUsIDUlKTtcXHJcXG4gIC0tcG9pbnQtNXJlbTogMC41cmVtO1xcclxcbiAgLS1vbmUtcmVtOiAxcmVtO1xcclxcbiAgLS10d28tcmVtOiAycmVtO1xcclxcbiAgLS1mb3VyLXJlbTogNHJlbTtcXHJcXG4gIC0tb25lcG9pbnQtNXJlbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIG1heC1pbmxpbmUtc2l6ZTogMTQ0MHB4O1xcclxcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxMCU7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBnbG9iYWwgc3R5bGVzXFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8vIGdsb2JhbCBzdHlsZXMgZW5kXFxyXFxuXFxyXFxuaW1nLCBwaWN0dXJlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnNoYWRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvcC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS10d28tcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDpmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1cmdlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZy1ibG9jay1zdGFydDogdmFyKC0tcG9pbnQtNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5aXNoLWJsdWUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlO1xcclxcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1vbmVwb2ludC01cmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5uYXYucmVzcG9uc2l2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogNTUwbXMgZWFzZSB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWhvbWVwYWdlLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vbmUtcmVtKTtcXHJcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLWZvdXItcmVtKTtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb25lLXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheWlzaC1ibHVlKTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb25lcG9pbnQtNXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBpbmxpbmUtc2l6ZTogMTJyZW07XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiB2YXIoLS1vbmUtcmVtKTtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNTByZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc29mdC1yZWQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWFzaWRlLXJpZ2h0IHtcXHJcXG4gIG1heC13aWR0aDogMzMuMzNyZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdmVyeS1kYXJrLWJsdWUpO1xcclxcbiAgYmxvY2stc2l6ZTogZml0LWNvbnRlbnQ7XFxyXFxuICAuaHIge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xcclxcbiAgfVxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNvZnQtb3JhbmdlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWRldGFpbHMge1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tb25lLXJlbSk7XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXlpc2gtYmx1ZSk7XFxyXFxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IHZhcigtLXBvaW50LTVyZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubmV3cy1ob21lcGFnZS1ib3R0b20tc2VjdGlvbiB7XFxyXFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLWZvdXItcmVtKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtaG9tZXBhZ2UtYm90dG9tLWFydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWFydGljbGUtaW1nIHtcXHJcXG4gIG1pbi13aWR0aDogNi42N3JlbTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWFydGljbGUtZGV0YWlscyB7XFxyXFxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwLjJyZW07XFxyXFxuICBzdHJvbmcge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXR3by1yZW0pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheWlzaC1ibHVlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdmVyeS1kYXJrLWJsdWUpO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogdmFyKC0tcG9pbnQtNXJlbSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxyXFxuICB9XFxyXFxufSBcXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGVOYXZMaW5rcyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxLjJyZW0pIHtcXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gICAgaW5saW5lLXNpemU6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wLXdyYXBwZXIge1xcclxcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO3JpZ2h0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9mZi13aGl0ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAgLmJ1cmdlci1tZW51IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICByaWdodDogMC44cmVtOyB0b3A6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTglKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07IFxcclxcbiAgICBtYXJnaW4taW5saW5lLWVuZDogN3JlbTsgXFxyXFxuICAgIGlubGluZS1zaXplOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xcclxcbiAgICBsaSB7XFxyXFxuICAgICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3cy1ob21lcGFnZS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG4gIC5uZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDVweCkge1xcclxcbiAgLm5ld3MtaG9tZXBhZ2UtYm90dG9tLWFydGljbGUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tbWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW1hZ2Utd2ViLTMtZGVza3RvcC04MDB4MzI5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS13ZWItMy1tb2JpbGUtNDAweDM1MC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcmV0cm8tcGNzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS10b3AtbGFwdG9wcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtZ2FtaW5nLWdyb3d0aC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+RnJvbnRlbmQgTWVudG9yIHwgTmV3cyBob21lcGFnZTwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wLXdyYXBwZXJcXFwiPlxcbiAgICAgIDxoZWFkZXI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibG9nb1xcXCIgLz5cXG4gICAgICA8L2hlYWRlcj5cXG5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXJnZXItbWVudVxcXCI+XFxuICAgICAgICA8aW1nXFxuICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiXFxuICAgICAgICAgIGFsdD1cXFwibmF2YmFyIGJ1dHRvbiBjbG9zZS9idXJnZXJcXFwiXFxuICAgICAgICAgIGlkPVxcXCJjbG9zZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgPG5hdiBjbGFzcz1cXFwibmF2XFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2LWxpc3RcXFwiPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+SG9tZTwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+TmV3PC9hPjwvbGk+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Qb3B1bGFyPC9hPjwvbGk+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5UcmVuZGluZzwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+Q2F0ZWdvcmllczwvYT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L25hdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPG1haW4gY2xhc3M9XFxcIm5ld3MtaG9tZXBhZ2UtbWFpblxcXCI+XFxuICAgICAgICA8cGljdHVyZT5cXG4gICAgICAgICAgPHNvdXJjZVxcbiAgICAgICAgICAgIG1lZGlhPVxcXCIobWluLXdpZHRoOiAyNXJlbSlcXFwiXFxuICAgICAgICAgICAgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ3ZWItMy1pbWdcXFwiXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICBhbHQ9XFxcIndvb2RlbiBnZW9tZXRyeSBjb2xvciBwdXp6bGUgc2hhcGVzXFxcIlxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9waWN0dXJlPlxcbiAgXFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwibmV3cy1ob21lcGFnZS1zZWN0aW9uXFxcIj5cXG4gICAgICAgICAgPGgxPlRoZSBCcmlnaHQgRnV0dXJlIG9mIFdlYiAzLjA/PC9oMT5cXG4gICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIFdlIGRpdmUgaW50byB0aGUgbmV4dCBldm9sdXRpb24gb2YgdGhlIHdlYiB0aGF0IGNsYWltcyB0byBwdXQgdGhlXFxuICAgICAgICAgICAgICBwb3dlciBvZiB0aGUgcGxhdGZvcm1zIGJhY2sgaW50byB0aGUgaGFuZHMgb2YgdGhlIHBlb3BsZS4gQnV0IGlzIGl0XFxuICAgICAgICAgICAgICByZWFsbHkgZnVsZmlsbGluZyBpdHMgcHJvbWlzZT9cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPGJ1dHRvbj5yZWFkIG1vcmU8L2J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgICAgPC9tYWluPlxcbiAgXFxuICAgICAgPGFzaWRlIGNsYXNzPVxcXCJuZXdzLWFzaWRlLXJpZ2h0XFxcIj5cXG4gICAgICAgIDxoMj5OZXc8L2gyPlxcbiAgXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhc2lkZS1kZXRhaWxzXFxcIj5cXG4gICAgICAgICAgPGgzPjxhIGhyZWY9XFxcIiNcXFwiPkh5ZHJvZ2VuIFZTIEVsZWN0cmljIENhcnM8L2E+PC9oMz5cXG4gICAgICAgICAgPHA+V2lsbCBoeWRyb2dlbi1mdWVsZWQgY2FycyBldmVyIGNhdGNoIHVwIHRvIEVWcz88L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxociBjbGFzcz1cXFwiaHJcXFwiIC8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhc2lkZS1kZXRhaWxzXFxcIj5cXG4gICAgICAgICAgPGgzPjxhIGhyZWY9XFxcIiNcXFwiPlRoZSBEb3duc2lkZXMgbzRBMSBBcnRpc3RyeTwvYT48L2gzPlxcbiAgICAgICAgICA8cD5cXG4gICAgICAgICAgICBXaGF0IGFyZSB0aGUgcG9zc2libGUgYWR2ZXJzZSBlZmZlY3RzIG9mIG9uLWRlbWFuZCBBbCBpbWFnZVxcbiAgICAgICAgICAgIGdlbmVyYXRpb24/XFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGhyIGNsYXNzPVxcXCJoclxcXCIgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFzaWRlLWRldGFpbHNcXFwiPlxcbiAgICAgICAgICA8aDM+PGEgaHJlZj1cXFwiI1xcXCI+SXMgVkMgRnVuZGluZyBEcnlpbmcgVXA/PC9hPjwvaDM+XFxuICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgIFByaXZhdGUgZnVuZGluZyBieSBWQyBmaXJtcyBpcyBkb3duIDUwJSBZT1kuIFdlIHRha2UgYSBsb29rIGF0IHdoYXRcXG4gICAgICAgICAgICB0aGF0IG1lYW5zLlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2FzaWRlPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcIm5ld3MtaG9tZXBhZ2UtYm90dG9tLXNlY3Rpb25cXFwiPlxcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJuZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1hcnRpY2xlLWltZ1xcXCI+XFxuICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgIGFsdD1cXFwiUmV0cm8gQ29tcHV0ZXJzXFxcIlxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3R0b20tYXJ0aWNsZS1kZXRhaWxzXFxcIj5cXG4gICAgICAgICAgPHN0cm9uZz4gMDE8L3N0cm9uZz5cXG4gICAgICAgICAgPGg0PjxhIGhyZWY9XFxcIiNcXFwiPlJldml2aW5nIFJldHJvIFBDczwvYT48L2g0PlxcbiAgICAgICAgICA8cD5XaGF0IGhhcHBlbnMgd2hlbiBvbGQgUENzIGFyZSBnaXZlbiBtb2Rlcm4gdXBncmFkZXM/PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9hcnRpY2xlPlxcblxcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJuZXdzLWhvbWVwYWdlLWJvdHRvbS1hcnRpY2xlXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1hcnRpY2xlLWltZ1xcXCI+XFxuICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCIgYWx0PVxcXCJrZXlib2FyZFxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm90dG9tLWFydGljbGUtZGV0YWlsc1xcXCI+XFxuICAgICAgICAgIDxzdHJvbmc+IDAyPC9zdHJvbmc+XFxuICAgICAgICAgIDxoND48YSBocmVmPVxcXCIjXFxcIj5Ub3AgMTAgTGFwdG9wcyBvZiAyMDIyIDwvYT48L2g0PlxcbiAgICAgICAgICA8cD5PdXIgYmVzdCBwaWNrcyBmb3IgdmFyaW91cyBuZWVkcyBhbmQgYnVkZ2V0cy48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2FydGljbGU+XFxuXFxuICAgICAgPGFydGljbGUgY2xhc3M9XFxcIm5ld3MtaG9tZXBhZ2UtYm90dG9tLWFydGljbGVcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm90dG9tLWFydGljbGUtaW1nXFxcIj5cXG4gICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgYWx0PVxcXCJjb21wdXRlciBnYW1pbmcgam95c3RpY2tcXFwiXFxuICAgICAgICAgIC8+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1hcnRpY2xlLWRldGFpbHNcXFwiPlxcbiAgICAgICAgICA8c3Ryb25nPiAwMzwvc3Ryb25nPlxcbiAgICAgICAgICA8aDQ+PGEgaHJlZj1cXFwiI1xcXCI+VGhlIEdyb3d0aCBvZiBHYW1pbmc8L2E+PC9oND5cXG4gICAgICAgICAgPHA+SG93IHRoZSBwYW5kZW1pYyBoYXMgc3BhcmtlZCBmcmVzaCBvcHBvcnR1bml0aWVzLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvYXJ0aWNsZT5cXG4gICAgPC9zZWN0aW9uPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2xvc2VJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1lbnUtY2xvc2Uuc3ZnXCI7XHJcbmltcG9ydCBvcGVuSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1tZW51LnN2Z1wiO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItbWVudVwiKTtcclxuY29uc3QgY2xvc2UgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VcIik7XHJcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlzdCA+IGxpXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG5cclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJyZXNwb25zaXZlXCIpO1xyXG4gICAgaWYgKG5hdi5jbGFzc05hbWUuaW5jbHVkZXMoXCJyZXNwb25zaXZlXCIpKSB7XHJcbiAgICAgICAgY2xvc2Uuc3JjPWNsb3NlSW1hZ2U7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2hhZGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlLnNyYz0gb3BlbkltYWdlO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNoYWRlXCIpO1xyXG4gICAgfVxyXG4gICAgbmF2TGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAobGluay5zdHlsZS5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgbGluay5zdHlsZS5hbmltYXRpb249XCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5rLnN0eWxlLmFuaW1hdGlvbiA9YGFuaW1hdGVOYXZMaW5rcyAwLjVzIGVhc2UgZm9yd2FyZHMgJHtpbmRleCAvIDcgKyAwLjN9c2A7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSk7XHJcblxyXG4vLyBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwicmVzcG9uc2l2ZVwiKTtcclxuLy8gICAgIGlmIChuYXYuY2xhc3NOYW1lLmluY2x1ZGVzKFwicmVzcG9uc2l2ZVwiKSkge1xyXG4vLyAgICAgICAgIG5hdkxpbmtzLmZvckVhY2goKGxpLCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4vLyAgICAgICAgICAgICBsaS5zdHlsZS5hbmltYXRpb24gPWBhbmltYXRlTmF2TGlua3MgMC41cyBlYXNlIGZvcndhcmRzICR7aW5kZXgvNSswLjN9c2A7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgY2xvc2Uuc3JjPWNsb3NlSW1hZ2U7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGNsb3NlLnNyYz0gb3BlbkltYWdlO1xyXG4vLyAgICAgICAgIGxpLnN0eWxlLmFuaW1hdGlvbj1cIlwiO1xyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5odG1sXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanNcIjtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==