/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #16282f;
}

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headline {
  font-family: "Lobster", sans-serif;
  color: #e9ecef;
  font-size: 3rem;
}

.main-div {
  border: 1px solid black;
  display: flex;
  width: 90vw;
  flex-wrap: wrap; /* Wrap tiles to form rows */
  position: relative;
  height: 90vw;
}

.tile {
  display: flex;
  flex: 1 0 12.5%;
  height: 12.5%;
  float: left;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 120%;
}

.white {
  background-color: #f8f9fa;
}

.black {
  background-color: #343a40;
}

.button-container {
  display: flex;
  width: 70%;
  height: 30vw;
  flex-wrap: wrap;
  justify-content: space-between; /* Changed from space-around to space-between */
  align-items: center; /* Ensure vertical alignment if buttons' content or size varies */
  margin-top: 50px;
}

.main-buttons {
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  flex: 1 0 45%; /* Grow to fill space, but start at 45% width */
  max-width: 300px; /* Maximum width to prevent buttons from being too large */
  min-width: 150px; /* Minimum width to ensure visibility */
  margin: 15px; /* Consistent margin for all sides */
  height: 100px; /* Fixed height to ensure identical sizes */
  border: 2px solid black;
  text-align: center; /* Center the text within the button */
  padding: 10px; /* Padding for internal spacing */
  box-sizing: border-box; /* Include padding and border in the width and height */
  background-size: cover;
  background-position: center;
}

.head {
  display: flex;
  justify-content: center;
}

.clicked {
  border: 2px solid #daa520;
  color: #daa520;
  font-size: 1.5rem;
}

.end-tile {
  background-color: rgb(199, 0, 57);
}

.knight {
  transition: transform 1s ease-in-out;
  position: absolute;
}

.move {
  background-color: rgb(108, 117, 125);
}

.end-move {
  color: #daa520;
  background-color: rgb(199, 0, 57);
}

@media (min-width: 500px) and (max-width: 1023px) {
  .main-div {
    width: 70vw;
    height: 70vw;
  }
  .main-buttons {
    flex: 1 0 15%;
    max-width: 100000px;
    min-width: 250px;
  }
}
@media (min-width: 1024px) {
  .main-page {
    display: flex;
    flex-direction: row;
  }
  .main-div {
    width: 60vw;
    height: 60vw;
    margin: 15px;
    max-width: 80vh;
    max-height: 80vh;
  }
  .button-container {
    width: 35vw;
    height: 70vh;
  }
  .main-buttons {
    flex: 1 0 15%;
    max-width: 100000px;
    min-width: 250px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;AACF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAEF;;AAAA;EACE,kCAAA;EACA,cAAA;EACA,eAAA;AAGF;;AADA;EACE,uBAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA,EAAA,4BAAA;EACA,kBAAA;EAEA,YAAA;AAGF;;AADA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,iCAAA;EACA,eAAA;AAIF;;AADA;EACE,yBAAA;AAIF;;AAFA;EACE,yBAAA;AAKF;;AAHA;EACE,aAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,8BAAA,EAAA,+CAAA;EACA,mBAAA,EAAA,iEAAA;EACA,gBAAA;AAMF;;AAHA;EACE,iBAAA;EACA,kCAAA;EACA,gBAAA;EACA,aAAA,EAAA,+CAAA;EACA,gBAAA,EAAA,0DAAA;EACA,gBAAA,EAAA,uCAAA;EACA,YAAA,EAAA,oCAAA;EACA,aAAA,EAAA,2CAAA;EACA,uBAAA;EACA,kBAAA,EAAA,sCAAA;EACA,aAAA,EAAA,iCAAA;EACA,sBAAA,EAAA,uDAAA;EACA,sBAAA;EACA,2BAAA;AAMF;;AAHA;EACE,aAAA;EACA,uBAAA;AAMF;;AAJA;EACE,yBAAA;EACA,cAAA;EACA,iBAAA;AAOF;;AALA;EACE,iCAAA;AAQF;;AANA;EACE,oCAAA;EACA,kBAAA;AASF;;AAPA;EACE,oCAAA;AAUF;;AARA;EACE,cAAA;EACA,iCAAA;AAWF;;AATA;EACE;IACE,WAAA;IACA,YAAA;EAYF;EAVA;IACE,aAAA;IACA,mBAAA;IACA,gBAAA;EAYF;AACF;AAVA;EACE;IACE,aAAA;IACA,mBAAA;EAYF;EAVA;IACE,WAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;IACA,gBAAA;EAYF;EAVA;IACE,WAAA;IACA,YAAA;EAYF;EAVA;IACE,aAAA;IACA,mBAAA;IACA,gBAAA;EAYF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\nbody {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #16282f;\r\n}\r\n.main-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.headline {\r\n  font-family: 'Lobster', sans-serif;\r\n  color: #e9ecef;\r\n  font-size: 3rem;\r\n}\r\n.main-div {\r\n  border: 1px solid black;\r\n  display: flex;\r\n  width: 90vw;\r\n  flex-wrap: wrap; /* Wrap tiles to form rows */\r\n  position: relative;\r\n\r\n  height: 90vw;\r\n}\r\n.tile {\r\n  display: flex;\r\n  flex: 1 0 12.5%;\r\n  height: 12.5%;\r\n  float: left;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 120%;\r\n  //color: white;\r\n}\r\n.white {\r\n  background-color: #f8f9fa;\r\n}\r\n.black {\r\n  background-color: #343a40;\r\n}\r\n.button-container {\r\n  display: flex;\r\n  width: 70%;\r\n  height: 30vw;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between; /* Changed from space-around to space-between */\r\n  align-items: center; /* Ensure vertical alignment if buttons' content or size varies */\r\n  margin-top: 50px;\r\n}\r\n\r\n.main-buttons {\r\n  font-size: 1.3rem;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  flex: 1 0 45%; /* Grow to fill space, but start at 45% width */\r\n  max-width: 300px; /* Maximum width to prevent buttons from being too large */\r\n  min-width: 150px; /* Minimum width to ensure visibility */\r\n  margin: 15px; /* Consistent margin for all sides */\r\n  height: 100px; /* Fixed height to ensure identical sizes */\r\n  border: 2px solid black;\r\n  text-align: center; /* Center the text within the button */\r\n  padding: 10px; /* Padding for internal spacing */\r\n  box-sizing: border-box; /* Include padding and border in the width and height */\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.clicked {\r\n  border: 2px solid #daa520;\r\n  color: #daa520;\r\n  font-size: 1.5rem;\r\n}\r\n.end-tile {\r\n  background-color: rgb(199, 0, 57);\r\n}\r\n.knight {\r\n  transition: transform 1s ease-in-out;\r\n  position: absolute;\r\n}\r\n.move {\r\n  background-color: rgb(108, 117, 125);\r\n}\r\n.end-move {\r\n  color: #daa520;\r\n  background-color: rgb(199, 0, 57);\r\n}\r\n@media (min-width: 500px) and (max-width: 1023px) {\r\n  .main-div {\r\n    width: 70vw;\r\n    height: 70vw;\r\n  }\r\n  .main-buttons {\r\n    flex: 1 0 15%;\r\n    max-width: 100000px;\r\n    min-width: 250px;\r\n  }\r\n}\r\n@media (min-width: 1024px) {\r\n  .main-page {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  .main-div {\r\n    width: 60vw;\r\n    height: 60vw;\r\n    margin: 15px;\r\n    max-width: 80vh;\r\n    max-height: 80vh;\r\n  }\r\n  .button-container {\r\n    width: 35vw;\r\n    height: 70vh;\r\n  }\r\n  .main-buttons {\r\n    flex: 1 0 15%;\r\n    max-width: 100000px;\r\n    min-width: 250px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/reletaed/create.js":
/*!********************************!*\
  !*** ./src/reletaed/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _photos_wood_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../photos/wood.jpg */ "./src/photos/wood.jpg");
/* harmony import */ var _visualization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualization */ "./src/reletaed/visualization.js");




function buttonsBackground() {
  const buttons = document.querySelectorAll('.main-buttons');
  let lastClicked = null; // Keep track of the last clicked button

  buttons.forEach((button) => {
    button.style.backgroundImage = `url(${_photos_wood_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    button.addEventListener('click', function () {
      if (lastClicked && lastClicked !== this) {
        lastClicked.style.backgroundImage = `url(${_photos_wood_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
      }
      buttons.forEach((element) => {
        element.style.fontSize = '1.3rem';
        element.classList.remove('clicked');
      });

      // Set the background image and overlay for the currently clicked button
      this.style.backgroundImage = `linear-gradient(rgba(86, 88, 90, 0.282), rgba(86, 88, 90, 0.282)), url(${_photos_wood_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
      this.style.backgroundSize = 'cover';
      this.style.backgroundPosition = 'center';
      this.style.fontSize = '1.5rem';
      this.classList.add('clicked');
      // Update the lastClicked to the current button
      lastClicked = this;
    });
  });
}

function createBoard(mainDiv) {
  let color = true;
  for (let row = 7; row > -1; row--) {
    for (let col = 0; col < 8; col++) {
      const div = document.createElement('div');
      div.addEventListener('click', () => {
        const placeButton = document.getElementById('place-button');
        const selectButton = document.getElementById('select-button');

        if (placeButton.classList.contains('clicked')) {
          (0,_visualization__WEBPACK_IMPORTED_MODULE_1__.addKnight)(div);
        }
        if (selectButton.classList.contains('clicked')) {
          (0,_visualization__WEBPACK_IMPORTED_MODULE_1__.placeEnd)(div);
        }
      });
      if (color) {
        div.classList.add('white');
      } else {
        div.classList.add('black');
      }
      div.classList.add('tile');
      div.id = `${col},${row}`;
      div.dataset.rowNum = col;
      div.dataset.colNum = row;
      mainDiv.append(div);
      color = !color;
    }
    color = !color;
  }

  buttonsBackground(); // to add a background for the buttons
}


/***/ }),

/***/ "./src/reletaed/knight.js":
/*!********************************!*\
  !*** ./src/reletaed/knight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightTravel: () => (/* binding */ knightTravel)
/* harmony export */ });
function knightMove(start) {
  const array = [];
  const answerArray = [];
  const xPlace = start[0];
  const yPlace = start[1];
  let answerOne;
  let answerTwo;
  function knightCalculate(firstNum, secondNum, digitFirst, digitSecond) {
    const arrayFirst = [];
    const arraySecond = [];
    const firstMove = firstNum + digitFirst;
    const firstMove2 = secondNum + digitSecond;
    const secondMove = firstNum + digitSecond;
    const secondMove2 = secondNum + digitFirst;

    arrayFirst.push(firstMove, firstMove2);
    arraySecond.push(secondMove, secondMove2);
    return [arrayFirst, arraySecond];
  }
  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, 2, 1);
  array.push(answerOne, answerTwo);

  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, -2, 1);
  array.push(answerOne, answerTwo);

  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, 2, -1);
  array.push(answerOne, answerTwo);

  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, -2, -1);
  array.push(answerOne, answerTwo);

  array.forEach((element) => {
    if (element[0] > 7 || element[0] < 0) return;
    if (element[1] > 7 || element[1] < 0) return;
    answerArray.push(element);
  });
  return answerArray;
}
const knightState = (moves, nextMove) => {
  const totalMoves = [];
  totalMoves.push(...moves, nextMove);
  const numberOfMoves = totalMoves.length;
  const lastMove = nextMove;

  return {
    numberOfMoves,
    totalMoves,
    lastMove,
  };
};

function knightTravel(startPosition, finishPosition) {
  const unCheckedMoves = [];
  const moves = startPosition;
  let allMoves = knightMove(startPosition);
  allMoves.forEach((element) => {
    const obj = knightState([moves], element);
    unCheckedMoves.push(obj);
  });

  function areArrayEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  function knightTravelRecursive(currentObj, finishMove) {
    const currentMove = currentObj.lastMove;
    const { totalMoves } = currentObj;
    const answer = areArrayEqual(currentMove, finishMove);
    if (answer) return currentObj;
    allMoves = knightMove(currentMove);
    allMoves.forEach((element) => {
      const obj = knightState(totalMoves, element);
      unCheckedMoves.push(obj);
    });
    const nextMove = unCheckedMoves.shift();
    const realAnswer = knightTravelRecursive(nextMove, finishMove);
    return realAnswer;
  }
  const firstMove = unCheckedMoves.shift();

  const AnswerObj = knightTravelRecursive(firstMove, finishPosition);

  return AnswerObj;
}




/***/ }),

/***/ "./src/reletaed/visualization.js":
/*!***************************************!*\
  !*** ./src/reletaed/visualization.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addKnight: () => (/* binding */ addKnight),
/* harmony export */   clearBoard: () => (/* binding */ clearBoard),
/* harmony export */   placeEnd: () => (/* binding */ placeEnd),
/* harmony export */   startMove: () => (/* binding */ startMove)
/* harmony export */ });
/* harmony import */ var _photos_chess_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../photos/chess.svg */ "./src/photos/chess.svg");
/* harmony import */ var _photos_wood_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photos/wood.jpg */ "./src/photos/wood.jpg");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight */ "./src/reletaed/knight.js");




function addKnight(div) {
  let check = false;
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('finished')) {
      check = true;
    }

    if (container.classList.contains('knight-placed')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('knight-placed');
    }
  });
  if (check) {
    clearBoard();
  }
  const divWidth = div.clientWidth;
  const divHeight = div.clientHeight;
  div.classList.add('knight-placed');

  const svg = document.createElement('img');
  svg.src = _photos_chess_svg__WEBPACK_IMPORTED_MODULE_0__;
  svg.classList.add('knight');
  svg.style.width = divWidth * 0.9 + 'px';
  svg.style.height = divHeight * 0.9 + 'px';
  svg.style.zIndex = '10';
  div.appendChild(svg);
  if (!check) {
    const mainButton = document.querySelector('.clicked');
    mainButton.classList.remove('clicked');
    mainButton.style.backgroundImage = `url(${_photos_wood_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
    mainButton.style.fontSize = '1.3rem';
  }
}

function placeEnd(div) {
  let check = false;

  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('end-tile')) {
      container.classList.remove('end-tile');
    }
    if (container.classList.contains('finished')) {
      check = true;
    }
  });
  if (check) {
    clearBoard();
  }
  if (div.classList.contains('knight-placed')) {
    const child = div.firstChild;
    div.removeChild(child);
    div.classList.remove('knight-placed');
  }
  div.classList.add('end-tile');
  if (!check) {
    const mainButton = document.querySelector('.clicked');
    mainButton.classList.remove('clicked');
    mainButton.style.backgroundImage = `url(${_photos_wood_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
    mainButton.style.fontSize = '1.3rem';
  }
}

function clearBoard() {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('end-tile')) {
      container.classList.remove('end-tile');
    }
    if (container.classList.contains('knight-placed')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('knight-placed');
    }
    if (container.classList.contains('end-move')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('end-move');
    }
    if (container.classList.contains('move')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('move');
    }
    if (container.classList.contains('finished')) {
      container.classList.remove('finished');
    }
  });
  const mainButton = document.querySelector('.clicked');
  mainButton.classList.remove('clicked');
  mainButton.style.fontSize = '1.3rem';
  mainButton.style.backgroundImage = `url(${_photos_wood_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
}

function calculateMidTile(currentTile, nextTile) {
  const Xfirst = parseInt(currentTile.dataset.rowNum, 10);
  const Yfirst = parseInt(currentTile.dataset.colNum, 10);
  const Xsecound = parseInt(nextTile.dataset.rowNum, 10);
  const YSecound = parseInt(nextTile.dataset.colNum, 10);
  let midX;
  let midY;
  if (Math.abs(Xsecound - Xfirst === 2)) {
    midX = Xsecound;
    midY = Yfirst;
  } else {
    midX = Xfirst;
    midY = YSecound;
  }
  const answer = [];
  answer.push(midX, midY);
  return answer;
}
async function animateKnight(startX, startY, endX, endY) {
  return new Promise((resolve, reject) => {
    const animationName = `Move-${Date.now()}`;
    const keyframe = `@keyframes ${animationName} {
        from {
          left: ${startX}px;
          top: ${startY}px;
        }
        to {
          left: ${endX}px;
          top: ${endY}px;
        }
      }`;

    const knightPiece = document.querySelector('.knight');
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframe, styleSheet.cssRules.length);

    knightPiece.style.animation = `${animationName} 0.7s ease-in-out forwards`;

    knightPiece.addEventListener(
      'animationend',
      () => {
        knightPiece.style.animation = ''; // Clear the animation
        resolve(); // Resolve the promise when animation ends
      },
      { once: true }
    );
  });
}

async function moveKnight(currentTile, nextTile) {
  const midTile = calculateMidTile(currentTile, nextTile);
  const midDiv = document.getElementById(`${midTile[0]},${midTile[1]}`);

  // Wait for the first animation to complete before starting the second
  await animateKnight(
    currentTile.offsetLeft,
    currentTile.offsetTop,
    midDiv.offsetLeft,
    midDiv.offsetTop
  );
  await animateKnight(
    midDiv.offsetLeft,
    midDiv.offsetTop,
    nextTile.offsetLeft,
    nextTile.offsetTop
  );
}

function getTiles() {
  let startDiv = null;
  let endDiv = null;
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('end-tile')) endDiv = container;
    if (container.classList.contains('knight-placed')) startDiv = container;
  });
  return [startDiv, endDiv];
}
function calculateWay(startDiv, endDiv) {
  const startRow = parseInt(startDiv.dataset.rowNum, 10);
  const starCol = parseInt(startDiv.dataset.colNum, 10);
  const endRow = parseInt(endDiv.dataset.rowNum, 10);
  const endCol = parseInt(endDiv.dataset.colNum, 10);

  const startArray = [];
  const endArray = [];
  startArray.push(startRow, starCol);
  endArray.push(endRow, endCol);
  const answerArray = (0,_knight__WEBPACK_IMPORTED_MODULE_2__.knightTravel)(startArray, endArray);
  return answerArray.totalMoves;
}
function addCount(div, count, endDiv) {
  const H1 = document.createElement('h1');
  H1.textContent = count;
  if (div === endDiv) {
    div.classList.add('end-move');
  } else {
    div.classList.add('move');
  }
  div.appendChild(H1);
}
async function startMove() {
  const [startDiv, endDiv] = getTiles();
  if (startDiv && endDiv) {
    const answerArray = calculateWay(startDiv, endDiv);

    for (let index = 0; index < answerArray.length - 1; index++) {
      const currentTile = document.getElementById(
        `${answerArray[index][0]},${answerArray[index][1]}`
      );
      const nextTile = document.getElementById(
        `${answerArray[index + 1][0]},${answerArray[index + 1][1]}`
      );
      await moveKnight(currentTile, nextTile); // Wait for each move to complete before the next
      addCount(nextTile, index + 1, endDiv);
    }
    endDiv.classList.add('finished');
  } else {
    return;
  }
}




/***/ }),

/***/ "./src/photos/chess.svg":
/*!******************************!*\
  !*** ./src/photos/chess.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chess.svg";

/***/ }),

/***/ "./src/photos/wood.jpg":
/*!*****************************!*\
  !*** ./src/photos/wood.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wood.jpg";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _reletaed_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reletaed/create */ "./src/reletaed/create.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _reletaed_visualization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reletaed/visualization */ "./src/reletaed/visualization.js");




const mainDiv = document.querySelector('.main-div');

(0,_reletaed_create__WEBPACK_IMPORTED_MODULE_0__.createBoard)(mainDiv);
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  (0,_reletaed_visualization__WEBPACK_IMPORTED_MODULE_2__.clearBoard)();
});
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  (0,_reletaed_visualization__WEBPACK_IMPORTED_MODULE_2__.startMove)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFIQUFxSDtBQUNySCxvSEFBb0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLDZDQUE2QywwREFBMEQsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQ0FBb0MsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDL2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7QUFDQSxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxxQkFBcUIsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsc0JBQXNCLHNCQUFzQixXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxxQkFBcUIsc0JBQXNCLHNCQUFzQixxQkFBcUIscUJBQXFCLFdBQVcsc0JBQXNCLHFCQUFxQixzQkFBc0IsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxzR0FBc0csK0VBQStFLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSw2Q0FBNkMsMERBQTBELE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLFVBQVUsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdDQUFnQyxLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLGVBQWUseUNBQXlDLHFCQUFxQixzQkFBc0IsS0FBSyxlQUFlLDhCQUE4QixvQkFBb0Isa0JBQWtCLHVCQUF1QixzREFBc0QsdUJBQXVCLEtBQUssV0FBVyxvQkFBb0Isc0JBQXNCLG9CQUFvQixrQkFBa0IsOEJBQThCLDBCQUEwQix3Q0FBd0Msc0JBQXNCLHFCQUFxQixLQUFLLFlBQVksZ0NBQWdDLEtBQUssWUFBWSxnQ0FBZ0MsS0FBSyx1QkFBdUIsb0JBQW9CLGlCQUFpQixtQkFBbUIsc0JBQXNCLHNDQUFzQywyRUFBMkUseUZBQXlGLEtBQUssdUJBQXVCLHdCQUF3Qix5Q0FBeUMsdUJBQXVCLHFCQUFxQix3RUFBd0UsbUZBQW1GLDREQUE0RCwwREFBMEQsMEVBQTBFLDBCQUEwQiw0REFBNEQsZ0VBQWdFLHFGQUFxRixrQ0FBa0MsS0FBSyxlQUFlLG9CQUFvQiw4QkFBOEIsS0FBSyxjQUFjLGdDQUFnQyxxQkFBcUIsd0JBQXdCLEtBQUssZUFBZSx3Q0FBd0MsS0FBSyxhQUFhLDJDQUEyQyx5QkFBeUIsS0FBSyxXQUFXLDJDQUEyQyxLQUFLLGVBQWUscUJBQXFCLHdDQUF3QyxLQUFLLHVEQUF1RCxpQkFBaUIsb0JBQW9CLHFCQUFxQixPQUFPLHFCQUFxQixzQkFBc0IsNEJBQTRCLHlCQUF5QixPQUFPLEtBQUssZ0NBQWdDLGtCQUFrQixzQkFBc0IsNEJBQTRCLE9BQU8saUJBQWlCLG9CQUFvQixxQkFBcUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsT0FBTyx5QkFBeUIsb0JBQW9CLHFCQUFxQixPQUFPLHFCQUFxQixzQkFBc0IsNEJBQTRCLHlCQUF5QixPQUFPLEtBQUssdUJBQXVCO0FBQzF1SjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2pKMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLDJIQUFPLFVBQVUsMkhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNic0M7QUFDZ0I7QUFDL0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSwwQ0FBMEMsNkNBQUksQ0FBQztBQUMvQztBQUNBO0FBQ0EsbURBQW1ELDZDQUFJLENBQUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLDZHQUE2Ryw2Q0FBSSxDQUFDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QixzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlEQUFTO0FBQ25CO0FBQ0E7QUFDQSxVQUFVLHdEQUFRO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksR0FBRyxJQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZpQjtBQUNIO0FBQ0U7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4Q0FBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZDQUFJLENBQUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw2Q0FBSSxDQUFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw2Q0FBSSxDQUFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QyxtQ0FBbUM7QUFDbkM7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0Esa0JBQWtCLEtBQUs7QUFDdkIsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1AsUUFBUTtBQUNSO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVcsR0FBRyxXQUFXO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQSxXQUFXLHNCQUFzQixHQUFHLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0EsV0FBVywwQkFBMEIsR0FBRywwQkFBMEI7QUFDbEU7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ3NEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5TnREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDcEI7QUFDcUM7QUFDakU7QUFDQTtBQUNBO0FBQ0EsNkRBQVc7QUFDWDtBQUNBO0FBQ0EsRUFBRSxtRUFBVTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSxrRUFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3JlbGV0YWVkL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9yZWxldGFlZC9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcmVsZXRhZWQvdmlzdWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyODJmO1xufVxuXG4ubWFpbi1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRsaW5lIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2U5ZWNlZjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ubWFpbi1kaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwdnc7XG4gIGZsZXgtd3JhcDogd3JhcDsgLyogV3JhcCB0aWxlcyB0byBmb3JtIHJvd3MgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDkwdnc7XG59XG5cbi50aWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDEyLjUlO1xuICBoZWlnaHQ6IDEyLjUlO1xuICBmbG9hdDogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbi53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAzMHZ3O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogQ2hhbmdlZCBmcm9tIHNwYWNlLWFyb3VuZCB0byBzcGFjZS1iZXR3ZWVuICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEVuc3VyZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgaWYgYnV0dG9ucycgY29udGVudCBvciBzaXplIHZhcmllcyAqL1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWFpbi1idXR0b25zIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleDogMSAwIDQ1JTsgLyogR3JvdyB0byBmaWxsIHNwYWNlLCBidXQgc3RhcnQgYXQgNDUlIHdpZHRoICovXG4gIG1heC13aWR0aDogMzAwcHg7IC8qIE1heGltdW0gd2lkdGggdG8gcHJldmVudCBidXR0b25zIGZyb20gYmVpbmcgdG9vIGxhcmdlICovXG4gIG1pbi13aWR0aDogMTUwcHg7IC8qIE1pbmltdW0gd2lkdGggdG8gZW5zdXJlIHZpc2liaWxpdHkgKi9cbiAgbWFyZ2luOiAxNXB4OyAvKiBDb25zaXN0ZW50IG1hcmdpbiBmb3IgYWxsIHNpZGVzICovXG4gIGhlaWdodDogMTAwcHg7IC8qIEZpeGVkIGhlaWdodCB0byBlbnN1cmUgaWRlbnRpY2FsIHNpemVzICovXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgdGV4dCB3aXRoaW4gdGhlIGJ1dHRvbiAqL1xuICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGZvciBpbnRlcm5hbCBzcGFjaW5nICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBhbmQgYm9yZGVyIGluIHRoZSB3aWR0aCBhbmQgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNsaWNrZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGFhNTIwO1xuICBjb2xvcjogI2RhYTUyMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5lbmQtdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDAsIDU3KTtcbn1cblxuLmtuaWdodCB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDExNywgMTI1KTtcbn1cblxuLmVuZC1tb3ZlIHtcbiAgY29sb3I6ICNkYWE1MjA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDAsIDU3KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5tYWluLWRpdiB7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgaGVpZ2h0OiA3MHZ3O1xuICB9XG4gIC5tYWluLWJ1dHRvbnMge1xuICAgIGZsZXg6IDEgMCAxNSU7XG4gICAgbWF4LXdpZHRoOiAxMDAwMDBweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubWFpbi1kaXYge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogNjB2dztcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWF4LXdpZHRoOiA4MHZoO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gIH1cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxuICAubWFpbi1idXR0b25zIHtcbiAgICBmbGV4OiAxIDAgMTUlO1xuICAgIG1heC13aWR0aDogMTAwMDAwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBLEVBQUEsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQSxFQUFBLCtDQUFBO0VBQ0EsbUJBQUEsRUFBQSxpRUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBLEVBQUEsK0NBQUE7RUFDQSxnQkFBQSxFQUFBLDBEQUFBO0VBQ0EsZ0JBQUEsRUFBQSx1Q0FBQTtFQUNBLFlBQUEsRUFBQSxvQ0FBQTtFQUNBLGFBQUEsRUFBQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUEsRUFBQSxzQ0FBQTtFQUNBLGFBQUEsRUFBQSxpQ0FBQTtFQUNBLHNCQUFBLEVBQUEsdURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQ0FBQTtBQVFGOztBQU5BO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQVNGOztBQVBBO0VBQ0Usb0NBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtBQVdGOztBQVRBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVlGO0VBVkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQVlGO0FBQ0Y7QUFWQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VBWUY7RUFWQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQVlGO0VBVkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVlGO0VBVkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQVlGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyODJmO1xcclxcbn1cXHJcXG4ubWFpbi1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRsaW5lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogI2U5ZWNlZjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuLm1haW4tZGl2IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBXcmFwIHRpbGVzIHRvIGZvcm0gcm93cyAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgaGVpZ2h0OiA5MHZ3O1xcclxcbn1cXHJcXG4udGlsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMSAwIDEyLjUlO1xcclxcbiAgaGVpZ2h0OiAxMi41JTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMjAlO1xcclxcbiAgLy9jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi53aGl0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcclxcbn1cXHJcXG4uYmxhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDMwdnc7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIENoYW5nZWQgZnJvbSBzcGFjZS1hcm91bmQgdG8gc3BhY2UtYmV0d2VlbiAqL1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogRW5zdXJlIHZlcnRpY2FsIGFsaWdubWVudCBpZiBidXR0b25zJyBjb250ZW50IG9yIHNpemUgdmFyaWVzICovXFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1idXR0b25zIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmbGV4OiAxIDAgNDUlOyAvKiBHcm93IHRvIGZpbGwgc3BhY2UsIGJ1dCBzdGFydCBhdCA0NSUgd2lkdGggKi9cXHJcXG4gIG1heC13aWR0aDogMzAwcHg7IC8qIE1heGltdW0gd2lkdGggdG8gcHJldmVudCBidXR0b25zIGZyb20gYmVpbmcgdG9vIGxhcmdlICovXFxyXFxuICBtaW4td2lkdGg6IDE1MHB4OyAvKiBNaW5pbXVtIHdpZHRoIHRvIGVuc3VyZSB2aXNpYmlsaXR5ICovXFxyXFxuICBtYXJnaW46IDE1cHg7IC8qIENvbnNpc3RlbnQgbWFyZ2luIGZvciBhbGwgc2lkZXMgKi9cXHJcXG4gIGhlaWdodDogMTAwcHg7IC8qIEZpeGVkIGhlaWdodCB0byBlbnN1cmUgaWRlbnRpY2FsIHNpemVzICovXFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSB0ZXh0IHdpdGhpbiB0aGUgYnV0dG9uICovXFxyXFxuICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGZvciBpbnRlcm5hbCBzcGFjaW5nICovXFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlIHBhZGRpbmcgYW5kIGJvcmRlciBpbiB0aGUgd2lkdGggYW5kIGhlaWdodCAqL1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uY2xpY2tlZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGFhNTIwO1xcclxcbiAgY29sb3I6ICNkYWE1MjA7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuLmVuZC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDAsIDU3KTtcXHJcXG59XFxyXFxuLmtuaWdodCB7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5tb3ZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDExNywgMTI1KTtcXHJcXG59XFxyXFxuLmVuZC1tb3ZlIHtcXHJcXG4gIGNvbG9yOiAjZGFhNTIwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMCwgNTcpO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXHJcXG4gIC5tYWluLWRpdiB7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDcwdnc7XFxyXFxuICB9XFxyXFxuICAubWFpbi1idXR0b25zIHtcXHJcXG4gICAgZmxleDogMSAwIDE1JTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLm1haW4tcGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuICAubWFpbi1kaXYge1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIG1heC13aWR0aDogODB2aDtcXHJcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDM1dnc7XFxyXFxuICAgIGhlaWdodDogNzB2aDtcXHJcXG4gIH1cXHJcXG4gIC5tYWluLWJ1dHRvbnMge1xcclxcbiAgICBmbGV4OiAxIDAgMTUlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMDAwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgd29vZCBmcm9tICcuLi9waG90b3Mvd29vZC5qcGcnO1xyXG5pbXBvcnQgeyBhZGRLbmlnaHQsIHBsYWNlRW5kIH0gZnJvbSAnLi92aXN1YWxpemF0aW9uJztcclxuZXhwb3J0IHsgY3JlYXRlQm9hcmQgfTtcclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbnNCYWNrZ3JvdW5kKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1idXR0b25zJyk7XHJcbiAgbGV0IGxhc3RDbGlja2VkID0gbnVsbDsgLy8gS2VlcCB0cmFjayBvZiB0aGUgbGFzdCBjbGlja2VkIGJ1dHRvblxyXG5cclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt3b29kfSlgO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAobGFzdENsaWNrZWQgJiYgbGFzdENsaWNrZWQgIT09IHRoaXMpIHtcclxuICAgICAgICBsYXN0Q2xpY2tlZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7d29vZH0pYDtcclxuICAgICAgfVxyXG4gICAgICBidXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzEuM3JlbSc7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGltYWdlIGFuZCBvdmVybGF5IGZvciB0aGUgY3VycmVudGx5IGNsaWNrZWQgYnV0dG9uXHJcbiAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudChyZ2JhKDg2LCA4OCwgOTAsIDAuMjgyKSwgcmdiYSg4NiwgODgsIDkwLCAwLjI4MikpLCB1cmwoJHt3b29kfSlgO1xyXG4gICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcclxuICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9ICcxLjVyZW0nO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuICAgICAgLy8gVXBkYXRlIHRoZSBsYXN0Q2xpY2tlZCB0byB0aGUgY3VycmVudCBidXR0b25cclxuICAgICAgbGFzdENsaWNrZWQgPSB0aGlzO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKG1haW5EaXYpIHtcclxuICBsZXQgY29sb3IgPSB0cnVlO1xyXG4gIGZvciAobGV0IHJvdyA9IDc7IHJvdyA+IC0xOyByb3ctLSkge1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwbGFjZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1idXR0b24nKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWJ1dHRvbicpO1xyXG5cclxuICAgICAgICBpZiAocGxhY2VCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpIHtcclxuICAgICAgICAgIGFkZEtuaWdodChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XHJcbiAgICAgICAgICBwbGFjZUVuZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdibGFjaycpO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XHJcbiAgICAgIGRpdi5pZCA9IGAke2NvbH0sJHtyb3d9YDtcclxuICAgICAgZGl2LmRhdGFzZXQucm93TnVtID0gY29sO1xyXG4gICAgICBkaXYuZGF0YXNldC5jb2xOdW0gPSByb3c7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgIGNvbG9yID0gIWNvbG9yO1xyXG4gICAgfVxyXG4gICAgY29sb3IgPSAhY29sb3I7XHJcbiAgfVxyXG5cclxuICBidXR0b25zQmFja2dyb3VuZCgpOyAvLyB0byBhZGQgYSBiYWNrZ3JvdW5kIGZvciB0aGUgYnV0dG9uc1xyXG59XHJcbiIsImZ1bmN0aW9uIGtuaWdodE1vdmUoc3RhcnQpIHtcclxuICBjb25zdCBhcnJheSA9IFtdO1xyXG4gIGNvbnN0IGFuc3dlckFycmF5ID0gW107XHJcbiAgY29uc3QgeFBsYWNlID0gc3RhcnRbMF07XHJcbiAgY29uc3QgeVBsYWNlID0gc3RhcnRbMV07XHJcbiAgbGV0IGFuc3dlck9uZTtcclxuICBsZXQgYW5zd2VyVHdvO1xyXG4gIGZ1bmN0aW9uIGtuaWdodENhbGN1bGF0ZShmaXJzdE51bSwgc2Vjb25kTnVtLCBkaWdpdEZpcnN0LCBkaWdpdFNlY29uZCkge1xyXG4gICAgY29uc3QgYXJyYXlGaXJzdCA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXlTZWNvbmQgPSBbXTtcclxuICAgIGNvbnN0IGZpcnN0TW92ZSA9IGZpcnN0TnVtICsgZGlnaXRGaXJzdDtcclxuICAgIGNvbnN0IGZpcnN0TW92ZTIgPSBzZWNvbmROdW0gKyBkaWdpdFNlY29uZDtcclxuICAgIGNvbnN0IHNlY29uZE1vdmUgPSBmaXJzdE51bSArIGRpZ2l0U2Vjb25kO1xyXG4gICAgY29uc3Qgc2Vjb25kTW92ZTIgPSBzZWNvbmROdW0gKyBkaWdpdEZpcnN0O1xyXG5cclxuICAgIGFycmF5Rmlyc3QucHVzaChmaXJzdE1vdmUsIGZpcnN0TW92ZTIpO1xyXG4gICAgYXJyYXlTZWNvbmQucHVzaChzZWNvbmRNb3ZlLCBzZWNvbmRNb3ZlMik7XHJcbiAgICByZXR1cm4gW2FycmF5Rmlyc3QsIGFycmF5U2Vjb25kXTtcclxuICB9XHJcbiAgW2Fuc3dlck9uZSwgYW5zd2VyVHdvXSA9IGtuaWdodENhbGN1bGF0ZSh4UGxhY2UsIHlQbGFjZSwgMiwgMSk7XHJcbiAgYXJyYXkucHVzaChhbnN3ZXJPbmUsIGFuc3dlclR3byk7XHJcblxyXG4gIFthbnN3ZXJPbmUsIGFuc3dlclR3b10gPSBrbmlnaHRDYWxjdWxhdGUoeFBsYWNlLCB5UGxhY2UsIC0yLCAxKTtcclxuICBhcnJheS5wdXNoKGFuc3dlck9uZSwgYW5zd2VyVHdvKTtcclxuXHJcbiAgW2Fuc3dlck9uZSwgYW5zd2VyVHdvXSA9IGtuaWdodENhbGN1bGF0ZSh4UGxhY2UsIHlQbGFjZSwgMiwgLTEpO1xyXG4gIGFycmF5LnB1c2goYW5zd2VyT25lLCBhbnN3ZXJUd28pO1xyXG5cclxuICBbYW5zd2VyT25lLCBhbnN3ZXJUd29dID0ga25pZ2h0Q2FsY3VsYXRlKHhQbGFjZSwgeVBsYWNlLCAtMiwgLTEpO1xyXG4gIGFycmF5LnB1c2goYW5zd2VyT25lLCBhbnN3ZXJUd28pO1xyXG5cclxuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudFswXSA+IDcgfHwgZWxlbWVudFswXSA8IDApIHJldHVybjtcclxuICAgIGlmIChlbGVtZW50WzFdID4gNyB8fCBlbGVtZW50WzFdIDwgMCkgcmV0dXJuO1xyXG4gICAgYW5zd2VyQXJyYXkucHVzaChlbGVtZW50KTtcclxuICB9KTtcclxuICByZXR1cm4gYW5zd2VyQXJyYXk7XHJcbn1cclxuY29uc3Qga25pZ2h0U3RhdGUgPSAobW92ZXMsIG5leHRNb3ZlKSA9PiB7XHJcbiAgY29uc3QgdG90YWxNb3ZlcyA9IFtdO1xyXG4gIHRvdGFsTW92ZXMucHVzaCguLi5tb3ZlcywgbmV4dE1vdmUpO1xyXG4gIGNvbnN0IG51bWJlck9mTW92ZXMgPSB0b3RhbE1vdmVzLmxlbmd0aDtcclxuICBjb25zdCBsYXN0TW92ZSA9IG5leHRNb3ZlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbnVtYmVyT2ZNb3ZlcyxcclxuICAgIHRvdGFsTW92ZXMsXHJcbiAgICBsYXN0TW92ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24ga25pZ2h0VHJhdmVsKHN0YXJ0UG9zaXRpb24sIGZpbmlzaFBvc2l0aW9uKSB7XHJcbiAgY29uc3QgdW5DaGVja2VkTW92ZXMgPSBbXTtcclxuICBjb25zdCBtb3ZlcyA9IHN0YXJ0UG9zaXRpb247XHJcbiAgbGV0IGFsbE1vdmVzID0ga25pZ2h0TW92ZShzdGFydFBvc2l0aW9uKTtcclxuICBhbGxNb3Zlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSBrbmlnaHRTdGF0ZShbbW92ZXNdLCBlbGVtZW50KTtcclxuICAgIHVuQ2hlY2tlZE1vdmVzLnB1c2gob2JqKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gYXJlQXJyYXlFcXVhbChhcnIxLCBhcnIyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycjEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBrbmlnaHRUcmF2ZWxSZWN1cnNpdmUoY3VycmVudE9iaiwgZmluaXNoTW92ZSkge1xyXG4gICAgY29uc3QgY3VycmVudE1vdmUgPSBjdXJyZW50T2JqLmxhc3RNb3ZlO1xyXG4gICAgY29uc3QgeyB0b3RhbE1vdmVzIH0gPSBjdXJyZW50T2JqO1xyXG4gICAgY29uc3QgYW5zd2VyID0gYXJlQXJyYXlFcXVhbChjdXJyZW50TW92ZSwgZmluaXNoTW92ZSk7XHJcbiAgICBpZiAoYW5zd2VyKSByZXR1cm4gY3VycmVudE9iajtcclxuICAgIGFsbE1vdmVzID0ga25pZ2h0TW92ZShjdXJyZW50TW92ZSk7XHJcbiAgICBhbGxNb3Zlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IGtuaWdodFN0YXRlKHRvdGFsTW92ZXMsIGVsZW1lbnQpO1xyXG4gICAgICB1bkNoZWNrZWRNb3Zlcy5wdXNoKG9iaik7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5leHRNb3ZlID0gdW5DaGVja2VkTW92ZXMuc2hpZnQoKTtcclxuICAgIGNvbnN0IHJlYWxBbnN3ZXIgPSBrbmlnaHRUcmF2ZWxSZWN1cnNpdmUobmV4dE1vdmUsIGZpbmlzaE1vdmUpO1xyXG4gICAgcmV0dXJuIHJlYWxBbnN3ZXI7XHJcbiAgfVxyXG4gIGNvbnN0IGZpcnN0TW92ZSA9IHVuQ2hlY2tlZE1vdmVzLnNoaWZ0KCk7XHJcblxyXG4gIGNvbnN0IEFuc3dlck9iaiA9IGtuaWdodFRyYXZlbFJlY3Vyc2l2ZShmaXJzdE1vdmUsIGZpbmlzaFBvc2l0aW9uKTtcclxuXHJcbiAgcmV0dXJuIEFuc3dlck9iajtcclxufVxyXG5cclxuZXhwb3J0IHsga25pZ2h0VHJhdmVsIH07XHJcbiIsImltcG9ydCBrbmlnaHQgZnJvbSAnLi4vcGhvdG9zL2NoZXNzLnN2Zyc7XHJcbmltcG9ydCB3b29kIGZyb20gJy4uL3Bob3Rvcy93b29kLmpwZyc7XHJcbmltcG9ydCB7IGtuaWdodFRyYXZlbCB9IGZyb20gJy4va25pZ2h0JztcclxuXHJcbmZ1bmN0aW9uIGFkZEtuaWdodChkaXYpIHtcclxuICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcclxuICB0aWxlLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkJykpIHtcclxuICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdrbmlnaHQtcGxhY2VkJykpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2tuaWdodC1wbGFjZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoY2hlY2spIHtcclxuICAgIGNsZWFyQm9hcmQoKTtcclxuICB9XHJcbiAgY29uc3QgZGl2V2lkdGggPSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgZGl2SGVpZ2h0ID0gZGl2LmNsaWVudEhlaWdodDtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgna25pZ2h0LXBsYWNlZCcpO1xyXG5cclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBzdmcuc3JjID0ga25pZ2h0O1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdrbmlnaHQnKTtcclxuICBzdmcuc3R5bGUud2lkdGggPSBkaXZXaWR0aCAqIDAuOSArICdweCc7XHJcbiAgc3ZnLnN0eWxlLmhlaWdodCA9IGRpdkhlaWdodCAqIDAuOSArICdweCc7XHJcbiAgc3ZnLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgZGl2LmFwcGVuZENoaWxkKHN2Zyk7XHJcbiAgaWYgKCFjaGVjaykge1xyXG4gICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGlja2VkJyk7XHJcbiAgICBtYWluQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICAgIG1haW5CdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3dvb2R9KWA7XHJcbiAgICBtYWluQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gJzEuM3JlbSc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZUVuZChkaXYpIHtcclxuICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XHJcbiAgdGlsZS5mb3JFYWNoKChjb250YWluZXIpID0+IHtcclxuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmQtdGlsZScpKSB7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdlbmQtdGlsZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkJykpIHtcclxuICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChjaGVjaykge1xyXG4gICAgY2xlYXJCb2FyZCgpO1xyXG4gIH1cclxuICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygna25pZ2h0LXBsYWNlZCcpKSB7XHJcbiAgICBjb25zdCBjaGlsZCA9IGRpdi5maXJzdENoaWxkO1xyXG4gICAgZGl2LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdrbmlnaHQtcGxhY2VkJyk7XHJcbiAgfVxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdlbmQtdGlsZScpO1xyXG4gIGlmICghY2hlY2spIHtcclxuICAgIGNvbnN0IG1haW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpY2tlZCcpO1xyXG4gICAgbWFpbkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcbiAgICBtYWluQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt3b29kfSlgO1xyXG4gICAgbWFpbkJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9ICcxLjNyZW0nO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb2FyZCgpIHtcclxuICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcclxuICB0aWxlLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZC10aWxlJykpIHtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2VuZC10aWxlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygna25pZ2h0LXBsYWNlZCcpKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdrbmlnaHQtcGxhY2VkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZW5kLW1vdmUnKSkge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZW5kLW1vdmUnKTtcclxuICAgIH1cclxuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb3ZlJykpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUnKTtcclxuICAgIH1cclxuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaW5pc2hlZCcpKSB7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG1haW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpY2tlZCcpO1xyXG4gIG1haW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIG1haW5CdXR0b24uc3R5bGUuZm9udFNpemUgPSAnMS4zcmVtJztcclxuICBtYWluQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt3b29kfSlgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVNaWRUaWxlKGN1cnJlbnRUaWxlLCBuZXh0VGlsZSkge1xyXG4gIGNvbnN0IFhmaXJzdCA9IHBhcnNlSW50KGN1cnJlbnRUaWxlLmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgY29uc3QgWWZpcnN0ID0gcGFyc2VJbnQoY3VycmVudFRpbGUuZGF0YXNldC5jb2xOdW0sIDEwKTtcclxuICBjb25zdCBYc2Vjb3VuZCA9IHBhcnNlSW50KG5leHRUaWxlLmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgY29uc3QgWVNlY291bmQgPSBwYXJzZUludChuZXh0VGlsZS5kYXRhc2V0LmNvbE51bSwgMTApO1xyXG4gIGxldCBtaWRYO1xyXG4gIGxldCBtaWRZO1xyXG4gIGlmIChNYXRoLmFicyhYc2Vjb3VuZCAtIFhmaXJzdCA9PT0gMikpIHtcclxuICAgIG1pZFggPSBYc2Vjb3VuZDtcclxuICAgIG1pZFkgPSBZZmlyc3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1pZFggPSBYZmlyc3Q7XHJcbiAgICBtaWRZID0gWVNlY291bmQ7XHJcbiAgfVxyXG4gIGNvbnN0IGFuc3dlciA9IFtdO1xyXG4gIGFuc3dlci5wdXNoKG1pZFgsIG1pZFkpO1xyXG4gIHJldHVybiBhbnN3ZXI7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZUtuaWdodChzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBhbmltYXRpb25OYW1lID0gYE1vdmUtJHtEYXRlLm5vdygpfWA7XHJcbiAgICBjb25zdCBrZXlmcmFtZSA9IGBAa2V5ZnJhbWVzICR7YW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgbGVmdDogJHtzdGFydFh9cHg7XHJcbiAgICAgICAgICB0b3A6ICR7c3RhcnRZfXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICBsZWZ0OiAke2VuZFh9cHg7XHJcbiAgICAgICAgICB0b3A6ICR7ZW5kWX1weDtcclxuICAgICAgICB9XHJcbiAgICAgIH1gO1xyXG5cclxuICAgIGNvbnN0IGtuaWdodFBpZWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodCcpO1xyXG4gICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xyXG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKGtleWZyYW1lLCBzdHlsZVNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XHJcblxyXG4gICAga25pZ2h0UGllY2Uuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uTmFtZX0gMC43cyBlYXNlLWluLW91dCBmb3J3YXJkc2A7XHJcblxyXG4gICAga25pZ2h0UGllY2UuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2FuaW1hdGlvbmVuZCcsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBrbmlnaHRQaWVjZS5zdHlsZS5hbmltYXRpb24gPSAnJzsgLy8gQ2xlYXIgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aGVuIGFuaW1hdGlvbiBlbmRzXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlS25pZ2h0KGN1cnJlbnRUaWxlLCBuZXh0VGlsZSkge1xyXG4gIGNvbnN0IG1pZFRpbGUgPSBjYWxjdWxhdGVNaWRUaWxlKGN1cnJlbnRUaWxlLCBuZXh0VGlsZSk7XHJcbiAgY29uc3QgbWlkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bWlkVGlsZVswXX0sJHttaWRUaWxlWzFdfWApO1xyXG5cclxuICAvLyBXYWl0IGZvciB0aGUgZmlyc3QgYW5pbWF0aW9uIHRvIGNvbXBsZXRlIGJlZm9yZSBzdGFydGluZyB0aGUgc2Vjb25kXHJcbiAgYXdhaXQgYW5pbWF0ZUtuaWdodChcclxuICAgIGN1cnJlbnRUaWxlLm9mZnNldExlZnQsXHJcbiAgICBjdXJyZW50VGlsZS5vZmZzZXRUb3AsXHJcbiAgICBtaWREaXYub2Zmc2V0TGVmdCxcclxuICAgIG1pZERpdi5vZmZzZXRUb3BcclxuICApO1xyXG4gIGF3YWl0IGFuaW1hdGVLbmlnaHQoXHJcbiAgICBtaWREaXYub2Zmc2V0TGVmdCxcclxuICAgIG1pZERpdi5vZmZzZXRUb3AsXHJcbiAgICBuZXh0VGlsZS5vZmZzZXRMZWZ0LFxyXG4gICAgbmV4dFRpbGUub2Zmc2V0VG9wXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGlsZXMoKSB7XHJcbiAgbGV0IHN0YXJ0RGl2ID0gbnVsbDtcclxuICBsZXQgZW5kRGl2ID0gbnVsbDtcclxuICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcclxuICB0aWxlLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZC10aWxlJykpIGVuZERpdiA9IGNvbnRhaW5lcjtcclxuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdrbmlnaHQtcGxhY2VkJykpIHN0YXJ0RGl2ID0gY29udGFpbmVyO1xyXG4gIH0pO1xyXG4gIHJldHVybiBbc3RhcnREaXYsIGVuZERpdl07XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXRlV2F5KHN0YXJ0RGl2LCBlbmREaXYpIHtcclxuICBjb25zdCBzdGFydFJvdyA9IHBhcnNlSW50KHN0YXJ0RGl2LmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgY29uc3Qgc3RhckNvbCA9IHBhcnNlSW50KHN0YXJ0RGl2LmRhdGFzZXQuY29sTnVtLCAxMCk7XHJcbiAgY29uc3QgZW5kUm93ID0gcGFyc2VJbnQoZW5kRGl2LmRhdGFzZXQucm93TnVtLCAxMCk7XHJcbiAgY29uc3QgZW5kQ29sID0gcGFyc2VJbnQoZW5kRGl2LmRhdGFzZXQuY29sTnVtLCAxMCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0QXJyYXkgPSBbXTtcclxuICBjb25zdCBlbmRBcnJheSA9IFtdO1xyXG4gIHN0YXJ0QXJyYXkucHVzaChzdGFydFJvdywgc3RhckNvbCk7XHJcbiAgZW5kQXJyYXkucHVzaChlbmRSb3csIGVuZENvbCk7XHJcbiAgY29uc3QgYW5zd2VyQXJyYXkgPSBrbmlnaHRUcmF2ZWwoc3RhcnRBcnJheSwgZW5kQXJyYXkpO1xyXG4gIHJldHVybiBhbnN3ZXJBcnJheS50b3RhbE1vdmVzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZENvdW50KGRpdiwgY291bnQsIGVuZERpdikge1xyXG4gIGNvbnN0IEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBIMS50ZXh0Q29udGVudCA9IGNvdW50O1xyXG4gIGlmIChkaXYgPT09IGVuZERpdikge1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2VuZC1tb3ZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3ZlJyk7XHJcbiAgfVxyXG4gIGRpdi5hcHBlbmRDaGlsZChIMSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRNb3ZlKCkge1xyXG4gIGNvbnN0IFtzdGFydERpdiwgZW5kRGl2XSA9IGdldFRpbGVzKCk7XHJcbiAgaWYgKHN0YXJ0RGl2ICYmIGVuZERpdikge1xyXG4gICAgY29uc3QgYW5zd2VyQXJyYXkgPSBjYWxjdWxhdGVXYXkoc3RhcnREaXYsIGVuZERpdik7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFuc3dlckFycmF5Lmxlbmd0aCAtIDE7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgY3VycmVudFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBgJHthbnN3ZXJBcnJheVtpbmRleF1bMF19LCR7YW5zd2VyQXJyYXlbaW5kZXhdWzFdfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbmV4dFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBgJHthbnN3ZXJBcnJheVtpbmRleCArIDFdWzBdfSwke2Fuc3dlckFycmF5W2luZGV4ICsgMV1bMV19YFxyXG4gICAgICApO1xyXG4gICAgICBhd2FpdCBtb3ZlS25pZ2h0KGN1cnJlbnRUaWxlLCBuZXh0VGlsZSk7IC8vIFdhaXQgZm9yIGVhY2ggbW92ZSB0byBjb21wbGV0ZSBiZWZvcmUgdGhlIG5leHRcclxuICAgICAgYWRkQ291bnQobmV4dFRpbGUsIGluZGV4ICsgMSwgZW5kRGl2KTtcclxuICAgIH1cclxuICAgIGVuZERpdi5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBhZGRLbmlnaHQsIHBsYWNlRW5kLCBjbGVhckJvYXJkLCBzdGFydE1vdmUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSAnLi9yZWxldGFlZC9jcmVhdGUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IGNsZWFyQm9hcmQsIHN0YXJ0TW92ZSB9IGZyb20gJy4vcmVsZXRhZWQvdmlzdWFsaXphdGlvbic7XHJcblxyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZGl2Jyk7XHJcblxyXG5jcmVhdGVCb2FyZChtYWluRGl2KTtcclxuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYnV0dG9uJyk7XHJcbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNsZWFyQm9hcmQoKTtcclxufSk7XHJcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdGFydE1vdmUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==