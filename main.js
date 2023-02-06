/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*** JOSH COMEAU CSS RESET ***/\\n\\n/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n/*\\n  3. Allow percentage-based heights in the application\\n*/\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n/*\\n  Typographic tweaks!\\n  4. Add accessible line-height\\n  5. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n/*\\n  6. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n/*\\n  7. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n/*\\n  8. Avoid text overflows\\n*/\\np,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n}\\n/*\\n  9. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n/*** VARIABLES ***/\\n\\n:root {\\n  --main: #2c666e;\\n  --black: #0a090c;\\n  --white: #f0edee;\\n  --dark: #07393c;\\n  --dark-light: #15afb7;\\n  --highlight: #90ddf0;\\n}\\n/*** GENERAL ***/\\n\\nbody {\\n  color: var(--black);\\n  background-color: var(--main);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.textarea {\\n  max-width: 600px;\\n  width: 80%;\\n  overflow: auto;\\n  height: 240px;\\n  margin-bottom: 40px;\\n  outline: none;\\n}\\n.textarea:focus {\\n  border: 1px solid var(--highlight);\\n}\\n\\n.keyboard {\\n  max-width: 1080px;\\n}\\n.row {\\n  width: 100%;\\n  display: flex;\\n  gap: 4px;\\n  margin-bottom: 3px;\\n}\\nbutton {\\n  padding: 20px;\\n  flex-grow: 1;\\n  color: var(--white);\\n  background-color: var(--dark);\\n  border: 1px solid var(--highlight);\\n  border-bottom: 4px solid var(--highlight);\\n  transition: all 0.2s;\\n  min-width: 60px;\\n}\\nbutton:hover {\\n  background-color: var(--dark-light);\\n}\\nbutton:active {\\n  border-bottom: 1px solid var(--highlight);\\n  margin-top: 2px;\\n}\\n\\n.buttonActive {\\n  background-color: var(--dark-light);\\n  border-bottom: 1px solid var(--highlight);\\n  margin-top: 2px;\\n}\\n.Space {\\n  width: 40%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/Key.js":
/*!****************************!*\
  !*** ./src/classes/Key.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\n  constructor(main, row, cssClass, shift) {\n    this.main = main;\n    this.row = row;\n    this.shift = shift;\n    this.class = cssClass;\n    this.html = `<button class=\"reg-key ${this.class}\">${this.main}</button>`;\n  }\n\n  addEventListener() {\n    const textArea = document.querySelector('.textarea');\n    const position = textArea.selectionStart;\n    const head = textArea.value.slice(0, position);\n    const tail = textArea.value.slice(position);\n    const { length } = this.innerText;\n    textArea.value = head + this.innerText + tail;\n    textArea.focus();\n    textArea.setSelectionRange(position + length, position + length);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/classes/Key.js?");

/***/ }),

/***/ "./src/classes/Keyboard.js":
/*!*********************************!*\
  !*** ./src/classes/Keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _Key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key.js */ \"./src/classes/Key.js\");\n/* harmony import */ var _SpecialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpecialKey.js */ \"./src/classes/SpecialKey.js\");\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers.js */ \"./src/lib/helpers.js\");\n\n\n\n\nclass Keyboard {\n  constructor() {\n    this.keys = [];\n    this.state = {\n      capsLock: false,\n      shift: false,\n      alt: false,\n      ctrl: false,\n      lang: 'eng',\n    };\n  }\n\n  createKeys(map) {\n    map.forEach((el) => {\n      if (el.type === 'special') {\n        this.keys.push(new _SpecialKey_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](el.main, el.row, el.class));\n      } else {\n        this.keys.push(new _Key_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el.main, el.row, el.class, el.shift));\n      }\n    });\n  }\n\n  createHtml() {\n    let keyboardHtml = '<div class=\"keyboard\">';\n    let row;\n    // Initalise keys html\n    const keysHtml = this.keys.reduce((acc, cur) => {\n      if (cur.row !== row) {\n        row = cur.row;\n        const newRowHtml = _lib_helpers_js__WEBPACK_IMPORTED_MODULE_2__.createRowHtml(row);\n\n        return `${acc}${newRowHtml}${cur.html}`;\n      }\n\n      return `${acc}${cur.html}`;\n    }, '');\n\n    keyboardHtml += `${keysHtml}</div>`;\n\n    document.querySelector('body').insertAdjacentHTML('beforeend', keyboardHtml);\n  }\n\n  addEventListeners() {\n    const regKeys = document.querySelectorAll('.reg-key');\n    const keyElements = document.querySelectorAll('button');\n\n    // add mouseclick events\n    this.keys.forEach((key) => {\n      const button = document.querySelector(`.${key.class || key.main}`);\n      if (key.main === 'Shift') {\n        return button.addEventListener('click', () => {\n          keyElements.forEach((el) => {\n            const focusedKey = this.keys.find((x) => (\n              x.main === el.innerText || x.shift === el.innerText\n            ));\n            if (!this.shift) {\n              // eslint-disable-next-line no-param-reassign\n              if (focusedKey.shift) el.innerText = focusedKey.shift;\n              // eslint-disable-next-line no-param-reassign\n            } else if (focusedKey.shift) el.innerText = focusedKey.main;\n          });\n          this.shift = !this.shift;\n        });\n      }\n      if (key.main === 'capsLock') {\n        return button.addEventListener('click', () => {\n          regKeys.forEach((el) => {\n            // eslint-disable-next-line no-param-reassign\n            if (!this.capsLock) el.innerText = el.innerText.toUpperCase();\n            // eslint-disable-next-line no-param-reassign\n            else el.innerText = el.innerText.toLowerCase();\n          });\n          this.capsLock = !this.capsLock;\n        });\n      }\n      button.addEventListener('click', key.addEventListener);\n    });\n    // add keyboard event\n    document.querySelector('body').addEventListener('keydown', (e) => {\n      e.preventDefault();\n      const element = document.querySelector(`.${e.code}`);\n      element.click();\n      element.classList.add('buttonActive');\n      setTimeout(() => element.classList.remove('buttonActive'), 200);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/classes/Keyboard.js?");

/***/ }),

/***/ "./src/classes/SpecialKey.js":
/*!***********************************!*\
  !*** ./src/classes/SpecialKey.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SpecialKey)\n/* harmony export */ });\n/* harmony import */ var _Key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key.js */ \"./src/classes/Key.js\");\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/helpers.js */ \"./src/lib/helpers.js\");\n\n\n\nclass SpecialKey extends _Key_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(main, row, cssClass) {\n    super(main, row, cssClass, false);\n    this.html = `<button class=\"special-key ${this.class}\">${this.main}</button>`;\n  }\n\n  addEventListener() {\n    _lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSpecialAction(this.innerText);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/classes/SpecialKey.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _classes_Keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Keyboard.js */ \"./src/classes/Keyboard.js\");\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/helpers.js */ \"./src/lib/helpers.js\");\n\n\n\n\n/** * Keys ** */\nconst engKeys = new Map([\n  ['`', {\n    main: '`', shift: '¬', row: 0, type: 'regular', caps: false, class: 'BackQuote',\n  }],\n  ['1', {\n    main: '1', shift: '!', row: 0, type: 'regular', caps: false, class: 'Digit1',\n  }],\n  ['2', {\n    main: '2', shift: '\"', row: 0, type: 'regular', caps: false, class: 'Digit2',\n  }],\n  ['3', {\n    main: '3', shift: '£', row: 0, type: 'regular', caps: false, class: 'Digit3',\n  }],\n  ['4', {\n    main: '4', shift: '$', row: 0, type: 'regular', caps: false, class: 'Digit4',\n  }],\n  ['5', {\n    main: '5', shift: '%', row: 0, type: 'regular', caps: false, class: 'Digit5',\n  }],\n  ['6', {\n    main: '6', shift: '^', row: 0, type: 'regular', caps: false, class: 'Digit6',\n  }],\n  ['7', {\n    main: '7', shift: '&', row: 0, type: 'regular', caps: false, class: 'Digit7',\n  }],\n  ['8', {\n    main: '8', shift: '*', row: 0, type: 'regular', caps: false, class: 'Digit8',\n  }],\n  ['9', {\n    main: '9', shift: '(', row: 0, type: 'regular', caps: false, class: 'Digit9',\n  }],\n  ['0', {\n    main: '0', shift: ')', row: 0, type: 'regular', caps: false, class: 'Digit0',\n  }],\n  ['-', {\n    main: '-', shift: '_', row: 0, type: 'regular', caps: false, class: 'Minus',\n  }],\n  ['=', {\n    main: '=', shift: '+', row: 0, type: 'regular', caps: false, class: 'Equal',\n  }],\n  ['del', {\n    main: 'del', row: 0, type: 'special', class: 'Delete',\n  }],\n  ['tab', {\n    main: 'tab', row: 1, type: 'special', class: 'Tab',\n  }],\n  ['q', {\n    main: 'q', shift: 'Q', row: 1, type: 'regular', caps: true, class: 'KeyQ',\n  }],\n  ['w', {\n    main: 'w', shift: 'W', row: 1, type: 'regular', caps: true, class: 'KeyW',\n  }],\n  ['e', {\n    main: 'e', shift: 'E', row: 1, type: 'regular', caps: true, class: 'KeyE',\n  }],\n  ['r', {\n    main: 'r', shift: 'R', row: 1, type: 'regular', caps: true, class: 'KeyR',\n  }],\n  ['t', {\n    main: 't', shift: 'T', row: 1, type: 'regular', caps: true, class: 'KeyT',\n  }],\n  ['y', {\n    main: 'y', shift: 'Y', row: 1, type: 'regular', caps: true, class: 'KeyY',\n  }],\n  ['u', {\n    main: 'u', shift: 'U', row: 1, type: 'regular', caps: true, class: 'KeyU',\n  }],\n  ['i', {\n    main: 'i', shift: 'I', row: 1, type: 'regular', caps: true, class: 'KeyI',\n  }],\n  ['o', {\n    main: 'o', shift: 'O', row: 1, type: 'regular', caps: true, class: 'KeyO',\n  }],\n  ['p', {\n    main: 'p', shift: 'P', row: 1, type: 'regular', caps: true, class: 'KeyP',\n  }],\n  ['[', {\n    main: '[', shift: '{', row: 1, type: 'regular', caps: false, class: 'BracketLeft',\n  }],\n  [']', {\n    main: ']', shift: '}', row: 1, type: 'regular', caps: false, class: 'BracketRight',\n  }],\n  ['backspace', {\n    main: 'backspace', row: 1, type: 'special', class: 'Backspace',\n  }],\n  ['capsLock', {\n    main: 'capsLock', row: 2, type: 'special', class: 'CapsLock',\n  }],\n  ['a', {\n    main: 'a', shift: 'A', row: 2, type: 'regular', caps: true, class: 'KeyA',\n  }],\n  ['s', {\n    main: 's', shift: 'S', row: 2, type: 'regular', caps: true, class: 'KeyS',\n  }],\n  ['d', {\n    main: 'd', shift: 'D', row: 2, type: 'regular', caps: true, class: 'KeyD',\n  }],\n  ['f', {\n    main: 'f', shift: 'F', row: 2, type: 'regular', caps: true, class: 'KeyF',\n  }],\n  ['g', {\n    main: 'g', shift: 'G', row: 2, type: 'regular', caps: true, class: 'KeyG',\n  }],\n  ['h', {\n    main: 'h', shift: 'H', row: 2, type: 'regular', caps: true, class: 'KeyH',\n  }],\n  ['j', {\n    main: 'j', shift: 'J', row: 2, type: 'regular', caps: true, class: 'KeyJ',\n  }],\n  ['k', {\n    main: 'k', shift: 'K', row: 2, type: 'regular', caps: true, class: 'KeyK',\n  }],\n  ['l', {\n    main: 'l', shift: 'L', row: 2, type: 'regular', caps: true, class: 'KeyL',\n  }],\n  [';', {\n    main: ';', shift: ':', row: 2, type: 'regular', caps: false, class: 'SemiColon',\n  }],\n  ['\\'', {\n    main: '\\'', shift: '@', row: 2, type: 'regular', caps: false, class: 'Qoute',\n  }],\n  ['#', {\n    main: '#', shift: '~', row: 2, type: 'regular', caps: false, class: 'BackSlash',\n  }],\n  ['enter', {\n    main: 'enter', row: 2, type: 'special', class: 'Enter',\n  }],\n  ['lShift', {\n    main: 'Shift', row: 3, type: 'special', class: 'ShiftLeft',\n  }],\n  ['\\\\', {\n    main: '\\\\', shift: '|', row: 3, type: 'regular', caps: false, class: 'IntlBackSlash',\n  }],\n  ['z', {\n    main: 'z', shift: 'Z', row: 3, type: 'regular', caps: false, class: 'KeyZ',\n  }],\n  ['x', {\n    main: 'x', shift: 'X', row: 3, type: 'regular', caps: false, class: 'KeyX',\n  }],\n  ['c', {\n    main: 'c', shift: 'C', row: 3, type: 'regular', caps: false, class: 'KeyC',\n  }],\n  ['v', {\n    main: 'v', shift: 'V', row: 3, type: 'regular', caps: false, class: 'KeyV',\n  }],\n  ['b', {\n    main: 'b', shift: 'B', row: 3, type: 'regular', caps: false, class: 'KeyB',\n  }],\n  ['n', {\n    main: 'n', shift: 'N', row: 3, type: 'regular', caps: false, class: 'KeyN',\n  }],\n  ['m', {\n    main: 'm', shift: 'M', row: 3, type: 'regular', caps: false, class: 'KeyM',\n  }],\n  [',', {\n    main: ',', shift: '<', row: 3, type: 'regular', caps: false, class: 'Comma',\n  }],\n  ['.', {\n    main: '.', shift: '>', row: 3, type: 'regular', caps: false, class: 'Period',\n  }],\n  ['/', {\n    main: '/', shift: '?', row: 3, type: 'regular', caps: false, class: 'Slash',\n  }],\n  ['up', {\n    main: 'up', row: 3, type: 'special', class: 'ArrowUp',\n  }],\n  ['rShift', {\n    main: 'Shift', row: 3, type: 'special', class: 'ShiftRight',\n  }],\n  ['lCtr', {\n    main: 'Crtl', row: 4, type: 'special', class: 'ControlLeft',\n  }],\n  ['lAlt', {\n    main: 'Atl', row: 4, type: 'special', class: 'AltLeft',\n  }],\n  ['space', {\n    main: 'space', row: 4, type: 'special', class: 'Space',\n  }],\n  ['rAlt', {\n    main: 'Alt', row: 4, type: 'special', class: 'AltRight',\n  }],\n  ['rCrtl', {\n    main: 'Ctrl', row: 4, type: 'special', class: 'ControlRight',\n  }],\n  ['left', {\n    main: 'left', row: 4, type: 'special', class: 'AorrowLeft',\n  }],\n  ['down', {\n    main: 'down', row: 4, type: 'special', class: 'ArrowDown',\n  }],\n  ['right', {\n    main: 'right', row: 4, type: 'special', class: 'ArrowRight',\n  }],\n]);\n\nconst textAreaHtml = '<textarea class=\"textarea\"/>';\n_lib_helpers_js__WEBPACK_IMPORTED_MODULE_2__.appendToFrontOfBody(textAreaHtml);\n\nconst keyboard = new _classes_Keyboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nkeyboard.createKeys(engKeys);\nkeyboard.createHtml();\nkeyboard.addEventListeners();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/lib/helpers.js":
/*!****************************!*\
  !*** ./src/lib/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendToFrontOfBody\": () => (/* binding */ appendToFrontOfBody),\n/* harmony export */   \"createRowHtml\": () => (/* binding */ createRowHtml),\n/* harmony export */   \"getSpecialAction\": () => (/* binding */ getSpecialAction)\n/* harmony export */ });\nfunction createRowHtml(row) {\n  // First row does not need a closing tag from previous row\n  if (row === 0) return ('<div class=\"row row0\">');\n  return `</div><div class=\"row row${row}\">`;\n}\n\nfunction appendToFrontOfBody(html) {\n  document.querySelector('body').insertAdjacentHTML('afterbegin', html);\n}\n\nfunction getSpecialAction(key) {\n  const textArea = document.querySelector('.textarea');\n  let position = textArea.selectionStart;\n  switch (key) {\n    case 'del':\n      textArea.value = textArea.value.slice(0, position) + textArea.value.slice(position + 1);\n      textArea.focus();\n      textArea.setSelectionRange(position, position);\n      break;\n    case 'tab':\n      textArea.value += '  ';\n      break;\n    case 'backspace':\n      textArea.value = textArea.value.slice(0, position - 1) + textArea.value.slice(position);\n      textArea.focus();\n      textArea.setSelectionRange(position - 1, position - 1);\n      break;\n    case 'enter':\n      textArea.value += '\\n';\n      break;\n    case 'space':\n      textArea.value += ' ';\n      break;\n    case 'up':\n      position = textArea.value.lastIndexOf('\\n', position - 1);\n      textArea.setSelectionRange(position, position);\n      break;\n    case 'down':\n      position = textArea.value.indexOf('\\n', textArea.selectionEnd) + 1 || textArea.value.length;\n      textArea.setSelectionRange(position, position);\n      break;\n    case 'left':\n      textArea.focus();\n      textArea.setSelectionRange(position - 1, position - 1);\n      break;\n    case 'right':\n      textArea.focus();\n      textArea.setSelectionRange(position + 1, position + 1);\n      break;\n    default:\n      break;\n  }\n}\n\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/lib/helpers.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;