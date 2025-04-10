/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --light-green: #DAF1DC;
    --side-bar: #A9CFA0;
    --forest-green: #2c952c;
    --red: #a90505;
}

* {
    margin: 0;
    padding: 0;
    background-color: var(--light-green);
    font-family: Arial, Helvetica, sans-serif;
}

.header {
    height: 60px;
    width: 100vw;
    border-bottom: 4px solid var(--forest-green);
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.container {
    display: flex;
}

.sidebar-container {
    height: 100vh;
    /* border-right: 5px solid black; */
    background-color: var(--side-bar);
    padding: 40px 30px;
    width: 100%;
    max-width: 300px;
}

.projects-container {
    margin-top: 100px;
    background-color: var(--side-bar);
}
  
.project-form {
    margin-top: 25px;
    padding: 20px;
    padding-top: 30px;
    background-color: var(--light-green);
    display: none;
    /* max-width: 255px; */
    border-radius: 10px;
}

.project-input {
    width: 150px;
    box-sizing: border-box;
    padding: 4px 8px;
    font-size: 14px;
    max-width: 100%;
}

.project-form .form-buttons {
    background-color: var(--light-green);
}

.add-project-form, .cancel-project-form {
    background-color: var(--forest-green);
    padding: 10px 20px;
    color: ivory;
    border-radius: 10px;
    font-size: 14px;
}

.cancel-project-form {
    background-color: #a90505;
}

.title {
    font-size: 30px;
    font-weight: bold;
    background-color: var(--side-bar);
}

hr {
    margin: 10px;
    height: 0px;
    border: none;
    border-top: 3px solid black;
    margin-left: 0;
    max-width: 330px;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--side-bar);
}

.projects-list {
    /* border: 2px solid black; */
    background-color: var(--side-bar);
}

.project-item {
    /* border: 2px solid black; */
    width: 97%;
    display: flex;
    justify-content: space-between;
    background-color: var(--side-bar)
}

button.delete-sidebar {
    display: none;
}

.trashcan-sidebar {
    background-color: var(--side-bar);
    cursor: pointer;
}


.trashcan-sidebar::before {
    content: "🗑️";
    font-size: 24px;
}


button {
    font-size: 25px;
    background-color: var(--side-bar);
    border: none;
}

.content-container {
    /* border: 4px solid red; */
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
}

.add-task-button {
    background-color: var(--light-green);
    font-weight: bold;
    font-size: 20px;
    margin-left: 60px;
}

.task-container {
    display: flex;
    flex-direction: column;
    /* border: 4px solid black; */
    margin: 40px 60px;
    background-color: var(--forest-green);
}

.project-heading {
    font-size: 48px;
    /* border: 4px solid black; */
    font-weight: bold;
    padding: 20px;
    background-color: var(--forest-green);
    color: ivory;
}

.list-container {
    padding: 20px;
}

.bundle1 {
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.checkbox {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    display: none;
}

.circle {
    font-size: 30px;
    cursor: pointer;
    color: black;
}

.circle::before {
    content: "◯";
    font-size: 24px;
}

.checkbox:checked + .circle {
    color: black;
}

.checkbox:checked + .circle::before {
    content: "✔";
    font-size: 24px;
}

.bundle2 {
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.task-list {
    background-color: var(--light-green);
    padding-top: 10px;
    /* border: 2px solid black; */
    width: 100%;
    display: flex;
    flex-direction: column;
}

.list-item {
    /* border: 2px solid black; */
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.list-container button {
    background-color: var(--light-green);
}

button.delete-task {
    display: none;
}

.trashcan {
    font-size: 30px;
    cursor: pointer;
}

.trashcan::before {
    content: "🗑️";
    font-size: 24px;
}

.add-project {
    font-weight: bold;
    font-size: 20px;
    margin-top: 30px;
}

.list-item {
    display: flex;
    gap: 50px;
    font-size: 24px;
}

input[type="checkbox"] {
    accent-color : var(--light-green); 
}
  
.star-checkbox {
    display: none;
}

.star {
    font-size: 30px;
    cursor: pointer;
    color: black;
}

.star::before {
    content: "\\2606";
}

.star-checkbox:checked + .star {
    color: var(--forest-green);
}

.star-checkbox:checked + .star::before {
    content: "\\2605";
}


.task-form {
    /* border: 4px solid black; */
    padding: 40px;
    width: max-content;
    background-color: var(--side-bar);
    margin-top: 50px;
    display: none;
    margin-left: 60px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

input {
    width: 20px;
    margin-left: 10px;
    border-radius: 15px;
    border-color: var(--forest-green);
    background-clip: padding-box;
    transform: translateZ(0px);
}

input[type="text"] {
    width: 500px;
    height: 50px;
    margin: 0;
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
}

input[type="date"] {
    width: 500px;
    height: 50px;
    margin: 0;
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
}

.form-component {
    display: flex;
    flex-direction: column;
    background-color: var(--side-bar);
}

.form-label {
    font-weight: bold;
    font-size: 20px;
    background-color: var(--side-bar);
    color: black;
}

.form-buttons {
    display: flex;
    justify-content: space-evenly;
    /* border: 4px solid black; */
    background-color: var(--side-bar);
    margin-top: 20px;
}

.add-task-form, .cancel-task-form {
    background-color: var(--forest-green);
    padding: 10px 20px;
    color: ivory;
    border-radius: 10px;
    font-size: 20px;
}

.cancel-task-form {
    background-color: var(--red);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --light-green: #DAF1DC;\n    --side-bar: #A9CFA0;\n    --forest-green: #2c952c;\n    --red: #a90505;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    background-color: var(--light-green);\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n    height: 60px;\n    width: 100vw;\n    border-bottom: 4px solid var(--forest-green);\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: center;\n    font-size: 48px;\n    font-weight: bold;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.container {\n    display: flex;\n}\n\n.sidebar-container {\n    height: 100vh;\n    /* border-right: 5px solid black; */\n    background-color: var(--side-bar);\n    padding: 40px 30px;\n    width: 100%;\n    max-width: 300px;\n}\n\n.projects-container {\n    margin-top: 100px;\n    background-color: var(--side-bar);\n}\n  \n.project-form {\n    margin-top: 25px;\n    padding: 20px;\n    padding-top: 30px;\n    background-color: var(--light-green);\n    display: none;\n    /* max-width: 255px; */\n    border-radius: 10px;\n}\n\n.project-input {\n    width: 150px;\n    box-sizing: border-box;\n    padding: 4px 8px;\n    font-size: 14px;\n    max-width: 100%;\n}\n\n.project-form .form-buttons {\n    background-color: var(--light-green);\n}\n\n.add-project-form, .cancel-project-form {\n    background-color: var(--forest-green);\n    padding: 10px 20px;\n    color: ivory;\n    border-radius: 10px;\n    font-size: 14px;\n}\n\n.cancel-project-form {\n    background-color: #a90505;\n}\n\n.title {\n    font-size: 30px;\n    font-weight: bold;\n    background-color: var(--side-bar);\n}\n\nhr {\n    margin: 10px;\n    height: 0px;\n    border: none;\n    border-top: 3px solid black;\n    margin-left: 0;\n    max-width: 330px;\n}\n\nul {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--side-bar);\n}\n\n.projects-list {\n    /* border: 2px solid black; */\n    background-color: var(--side-bar);\n}\n\n.project-item {\n    /* border: 2px solid black; */\n    width: 97%;\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--side-bar)\n}\n\nbutton.delete-sidebar {\n    display: none;\n}\n\n.trashcan-sidebar {\n    background-color: var(--side-bar);\n    cursor: pointer;\n}\n\n\n.trashcan-sidebar::before {\n    content: \"🗑️\";\n    font-size: 24px;\n}\n\n\nbutton {\n    font-size: 25px;\n    background-color: var(--side-bar);\n    border: none;\n}\n\n.content-container {\n    /* border: 4px solid red; */\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    display: none;\n}\n\n.add-task-button {\n    background-color: var(--light-green);\n    font-weight: bold;\n    font-size: 20px;\n    margin-left: 60px;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    /* border: 4px solid black; */\n    margin: 40px 60px;\n    background-color: var(--forest-green);\n}\n\n.project-heading {\n    font-size: 48px;\n    /* border: 4px solid black; */\n    font-weight: bold;\n    padding: 20px;\n    background-color: var(--forest-green);\n    color: ivory;\n}\n\n.list-container {\n    padding: 20px;\n}\n\n.bundle1 {\n    /* border: 2px solid black; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.checkbox {\n    margin-top: 2px;\n    width: 20px;\n    height: 20px;\n    display: none;\n}\n\n.circle {\n    font-size: 30px;\n    cursor: pointer;\n    color: black;\n}\n\n.circle::before {\n    content: \"◯\";\n    font-size: 24px;\n}\n\n.checkbox:checked + .circle {\n    color: black;\n}\n\n.checkbox:checked + .circle::before {\n    content: \"✔\";\n    font-size: 24px;\n}\n\n.bundle2 {\n    /* border: 2px solid black; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.task-list {\n    background-color: var(--light-green);\n    padding-top: 10px;\n    /* border: 2px solid black; */\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.list-item {\n    /* border: 2px solid black; */\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.list-container button {\n    background-color: var(--light-green);\n}\n\nbutton.delete-task {\n    display: none;\n}\n\n.trashcan {\n    font-size: 30px;\n    cursor: pointer;\n}\n\n.trashcan::before {\n    content: \"🗑️\";\n    font-size: 24px;\n}\n\n.add-project {\n    font-weight: bold;\n    font-size: 20px;\n    margin-top: 30px;\n}\n\n.list-item {\n    display: flex;\n    gap: 50px;\n    font-size: 24px;\n}\n\ninput[type=\"checkbox\"] {\n    accent-color : var(--light-green); \n}\n  \n.star-checkbox {\n    display: none;\n}\n\n.star {\n    font-size: 30px;\n    cursor: pointer;\n    color: black;\n}\n\n.star::before {\n    content: \"\\2606\";\n}\n\n.star-checkbox:checked + .star {\n    color: var(--forest-green);\n}\n\n.star-checkbox:checked + .star::before {\n    content: \"\\2605\";\n}\n\n\n.task-form {\n    /* border: 4px solid black; */\n    padding: 40px;\n    width: max-content;\n    background-color: var(--side-bar);\n    margin-top: 50px;\n    display: none;\n    margin-left: 60px;\n    border-radius: 15px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\ninput {\n    width: 20px;\n    margin-left: 10px;\n    border-radius: 15px;\n    border-color: var(--forest-green);\n    background-clip: padding-box;\n    transform: translateZ(0px);\n}\n\ninput[type=\"text\"] {\n    width: 500px;\n    height: 50px;\n    margin: 0;\n    font-size: 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\ninput[type=\"date\"] {\n    width: 500px;\n    height: 50px;\n    margin: 0;\n    font-size: 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.form-component {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--side-bar);\n}\n\n.form-label {\n    font-weight: bold;\n    font-size: 20px;\n    background-color: var(--side-bar);\n    color: black;\n}\n\n.form-buttons {\n    display: flex;\n    justify-content: space-evenly;\n    /* border: 4px solid black; */\n    background-color: var(--side-bar);\n    margin-top: 20px;\n}\n\n.add-task-form, .cancel-task-form {\n    background-color: var(--forest-green);\n    padding: 10px 20px;\n    color: ivory;\n    border-radius: 10px;\n    font-size: 20px;\n}\n\n.cancel-task-form {\n    background-color: var(--red);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/display-dom.js":
/*!****************************!*\
  !*** ./src/display-dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),
/* harmony export */   displayFutureTasks: () => (/* binding */ displayFutureTasks),
/* harmony export */   displayProjectOnMain: () => (/* binding */ displayProjectOnMain),
/* harmony export */   displayProjectOnSidebar: () => (/* binding */ displayProjectOnSidebar),
/* harmony export */   displayStarredTasks: () => (/* binding */ displayStarredTasks),
/* harmony export */   displayTaskOnMain: () => (/* binding */ displayTaskOnMain),
/* harmony export */   displayTodayTasks: () => (/* binding */ displayTodayTasks),
/* harmony export */   initialDisplay: () => (/* binding */ initialDisplay)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


function initialDisplay() {
  if (!(0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)("localStorage")) {
    return;
  }

  const storedProjects = localStorage.getItem("projects");
  const parsedProjects = storedProjects ? JSON.parse(storedProjects) : {};
  Object.assign(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects, parsedProjects);
  displayAllProjectsSidebar(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects);
  document.querySelector(".task-form").style.display = "none";
  //displayAllTasks(Object.values(projects).flat());
}

function displayProjectOnSidebar(title) {
  const projectsList = document.querySelector(".projects-list");
  const projectItem = document.createElement("div");
  projectItem.className = "project-item";

  const button = document.createElement("button");
  button.textContent = title;
  button.className = "project-title";
  button.addEventListener("click", () => {
    document.querySelector(".content-container").style.display = "block";
    displayProjectOnMain(title);
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-sidebar";
  deleteButton.textContent = "Delete";
  deleteButton.id = `delete-${title}`;
  deleteButton.addEventListener("click", () => {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(title);
    projectsList.removeChild(projectItem);
    const taskContainer = document.querySelector(".task-container");
    const projectHeading = taskContainer.querySelector(".project-heading");
    const listContainer = taskContainer.querySelector(".list-container");
    const addTaskButton = document.querySelector(".add-task-button");

    if (addTaskButton) addTaskButton.style.display = "none";
    if (projectHeading) projectHeading.style.display = "none";

    if (listContainer) listContainer.remove();
  });

  const deleteLabel = document.createElement("label");
  deleteLabel.setAttribute("for", `delete-${title}`);
  deleteLabel.className = "trashcan-sidebar";

  projectItem.appendChild(button);
  projectItem.appendChild(deleteButton);
  projectItem.appendChild(deleteLabel);
  projectsList.append(projectItem);
}

function displayProjectOnMain(projectTitle) {
  const taskContainer = document.querySelector(".task-container");
  const addTaskButton = document.querySelector(".add-task-button");
  addTaskButton.style.display = "block";

  let currentProject = taskContainer.getAttribute("data-current-project");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");

  if (currentProject === null) {
    taskContainer.setAttribute("data-current-project", "");
    currentProject = "";
  }

  if (projectHeading) projectHeading.style.display = "block";
  if (listContainer) listContainer.style.display = "block";

  if (projectTitle === currentProject) {
    let taskList = taskContainer.querySelector(".task-list");
    if (taskList) taskList.innerHTML = "";

    const tasks = _logic_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectTitle] || [];
    displayAllTasks(tasks);
    return;
  }

  if (projectHeading) projectHeading.remove();
  if (listContainer) listContainer.remove();

  const newProjectHeading = document.createElement("div");
  newProjectHeading.className = "project-heading";
  newProjectHeading.textContent = projectTitle;
  newProjectHeading.setAttribute("data-title", projectTitle);
  taskContainer.appendChild(newProjectHeading);

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  let taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);

  taskContainer.setAttribute("data-current-project", projectTitle);
  const tasks = _logic_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectTitle] || [];
  displayAllTasks(tasks);
}

function displayTaskOnMain(taskTitle, taskDate, taskId) {
  const taskContainer = document.querySelector(".task-container");
  let taskList;
  if (!document.querySelector(".task-list")) {
    taskList = document.createElement("ul");
    taskList.className = "task-list";
    taskContainer.appendChild(taskList);
  } else {
    taskList = document.querySelector(".task-list");
  }
  const listItem = document.createElement("div");
  const bundle1 = document.createElement("div");
  let projectTitle = taskContainer.getAttribute("data-current-project");

  bundle1.className = "bundle1";
  listItem.className = "list-item";

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = "checkbox";
  inputCheckbox.id = `circle-${taskId}`;
  const task = Object.values(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects)
    .flat()
    .find((t) => t.taskId === taskId);
  if (task && task.isDone) {
    inputCheckbox.checked = true;
  }

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      const taskToUpdate = Object.values(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.isDone = true;
        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
      }
    } else {
      const taskToUpdate = Object.values(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.isDone = false;
        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
      }
    }
  });

  const circleLabel = document.createElement("label");
  circleLabel.setAttribute("for", `circle-${taskId}`);
  circleLabel.className = "circle";

  const text = document.createElement("div");
  text.className = "text";
  text.textContent = taskTitle;
  bundle1.appendChild(inputCheckbox);
  bundle1.appendChild(circleLabel);
  bundle1.appendChild(text);

  const bundle2 = document.createElement("div");
  bundle2.className = "bundle2";
  const star = document.createElement("input");
  star.type = "checkbox";
  star.id = `star-${taskId}`;
  star.classList.add("star-checkbox");

  if (task && task.starred) {
    star.checked = true;
  }

  star.addEventListener("click", () => {
    if (star.checked) {
      const taskToUpdate = Object.values(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.starred = true;
        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
      }
    } else {
      const taskToUpdate = Object.values(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.starred = false;
        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
      }
    }
  });

  const label = document.createElement("label");
  label.setAttribute("for", `star-${taskId}`);
  label.classList.add("star");

  const date = document.createElement("div");
  date.className = "date";
  date.textContent = taskDate;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-task";
  deleteButton.textContent = "Delete";
  deleteButton.id = `delete-${taskId}`;
  deleteButton.addEventListener("click", () => {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(projectTitle, taskId);
    taskList.removeChild(listItem);
  });

  const deleteLabel = document.createElement("label");
  deleteLabel.setAttribute("for", `delete-${taskId}`);
  deleteLabel.className = "trashcan";

  bundle2.append(star);
  bundle2.append(label);
  bundle2.append(date);
  bundle2.append(deleteButton);
  bundle2.append(deleteLabel);

  listItem.appendChild(bundle1);
  listItem.appendChild(bundle2);
  taskList.appendChild(listItem);
}

function displayAllProjectsSidebar(projectsObject) {
  const projectList = document.querySelector(".projects-list");
  projectList.innerHTML = "";

  for (const projectTitle in projectsObject) {
    displayProjectOnSidebar(projectTitle);
  }
}

function displayAllTasks(tasks) {
  const taskList = document.querySelector(".task-list");

  if (taskList) {
    taskList.innerHTML = "";
  }
  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}

function displayTodayTasks(tasks) {
  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}
function displayFutureTasks(tasks) {
  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}

function displayStarredTasks(tasks) {
  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}




/***/ }),

/***/ "./src/home-dom.js":
/*!*************************!*\
  !*** ./src/home-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _display_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-dom.js */ "./src/display-dom.js");



const allTasksButton = document.querySelector(".all-tasks-button");

const todayButton = document.querySelector(".today-button");
const futureButton = document.querySelector(".future-button");
const starredButton = document.querySelector(".starred-button");

allTasksButton.addEventListener("click", () => {
  if (Object.keys(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  (0,_display_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getAllTasks)());
});

todayButton.addEventListener("click", () => {
  if (Object.keys(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  (0,_display_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayTodayTasks)((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getTodayTasks)());
});

futureButton.addEventListener("click", () => {
  if (Object.keys(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  (0,_display_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayFutureTasks)((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getFutureTasks)());
});

starredButton.addEventListener("click", () => {
  if (Object.keys(_logic_js__WEBPACK_IMPORTED_MODULE_0__.projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  (0,_display_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayStarredTasks)((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getStarredTasks)());
});


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getAllTasks: () => (/* binding */ getAllTasks),
/* harmony export */   getFutureTasks: () => (/* binding */ getFutureTasks),
/* harmony export */   getStarredTasks: () => (/* binding */ getStarredTasks),
/* harmony export */   getTodayTasks: () => (/* binding */ getTodayTasks),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects),
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
let projects = {};

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

if (storageAvailable("localStorage")) {
    const storedProjects = localStorage.getItem("projects");
    projects = storedProjects ? JSON.parse(storedProjects) : {};
}

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function createProject(projectTitle) {
    if (projectTitle in projects) {
        alert('Project Title already exists! Please choose another name.');
        return false;
    }
    projects[projectTitle] = [];
    saveProjects();
    return true;
}

function createTask(projectTitle, taskTitle, date) {
    let taskId = crypto.randomUUID();
    let taskObject = {
        projectTitle: projectTitle,
        taskTitle: taskTitle,
        date: date,
        starred: false,
        isDone: false,
        taskId: taskId,
    }
    projects[projectTitle].push(taskObject);
    saveProjects();
    return taskId;
}

function deleteTask(projectTitle, taskId) {
    const index = projects[projectTitle].findIndex(task => task.taskId === taskId);
    if (index !== -1) {
        projects[projectTitle].splice(index, 1);
        saveProjects();
    }
}

function deleteProject(projectTitle) {
    delete projects[projectTitle];
    saveProjects();
}

function getAllTasks() {
    return Object.values(projects).flat();
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0];
}

function getTodayTasks() {
    let currentDate = getCurrentDate();

    let todayTasks = Object.values(projects).flat().filter(task => task.date === currentDate);
    return todayTasks;
}

function getFutureTasks() {
    let currentDate = getCurrentDate();

    let futureTasks = Object.values(projects).flat().filter(task => task.date && new Date(task.date) > new Date(currentDate));
    return futureTasks;
}

function getStarredTasks () {
    let starredTasks = Object.values(projects).flat().filter(task => task.starred === true);
    return starredTasks;
}




/***/ }),

/***/ "./src/project-dom.js":
/*!****************************!*\
  !*** ./src/project-dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-dom.js */ "./src/display-dom.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



const projectForm = document.querySelector(".project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(projectForm);
  const obj = Object.fromEntries(fd);
  console.log(obj);
  if (!obj.title) {
    alert("Project name cannot be blank!");
    return;
  }
  const success = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(obj.title);
  if (!success) return;
  (0,_display_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectOnSidebar)(obj.title);
  projectForm.reset();
  document.querySelector(".project-form").style.display = "none";
});

const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
  document.querySelector(".project-form").style.display = "block";
});

const cancelProjectForm = document.querySelector(".cancel-project-form");
cancelProjectForm.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  projectForm.reset();
  document.querySelector(".project-form").style.display = "none";
});

const addProjectForm = document.querySelector(".add-project-form");
addProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".project-form").style.display = "none";
});


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/task-dom.js":
/*!*************************!*\
  !*** ./src/task-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-dom.js */ "./src/display-dom.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



const taskForm = document.querySelector(".task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(taskForm);
  const obj = Object.fromEntries(fd);
  let projectTitle = document.querySelector(".project-heading").textContent;
  if (!obj.taskTitle) {
    alert("Project name cannot be blank!");
    return;
  }
  let taskId = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(projectTitle, obj.taskTitle, obj.date);
  (0,_display_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayTaskOnMain)(obj.taskTitle, obj.date, taskId);
  taskForm.reset();
  document.querySelector(".task-form").style.display = "none";
});

const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", () => {
  document.querySelector(".task-form").style.display = "block";
});

const cancelTaskForm = document.querySelector(".cancel-task-form");
cancelTaskForm.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  taskForm.reset();
  document.querySelector(".task-form").style.display = "none";
});

const addTaskForm = document.querySelector(".add-task-form");
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".task-form").style.display = "none";
});


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _project_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-dom.js */ "./src/project-dom.js");
/* harmony import */ var _task_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-dom.js */ "./src/task-dom.js");
/* harmony import */ var _display_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-dom.js */ "./src/display-dom.js");
/* harmony import */ var _home_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-dom.js */ "./src/home-dom.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");







(0,_display_dom_js__WEBPACK_IMPORTED_MODULE_3__.initialDisplay)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map