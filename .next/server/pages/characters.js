/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/characters";
exports.ids = ["pages/characters"];
exports.modules = {

/***/ "./pages/characters/index.jsx":
/*!************************************!*\
  !*** ./pages/characters/index.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Marvel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/dario/Teste_trabalho/Marvel_Heroes/Marvel/Marvel_Characters/pages/characters/index.jsx\";\n\n\nfunction Marvel() {\n  const {\n    0: post,\n    1: setPost\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: filters,\n    1: setFilters\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    filterByName: {\n      name: ''\n    }\n  });\n  console.log(post);\n  const imgPath = '/standard_fantastic.';\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then(response => setPost(response.data.data.results));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n      onChange: e => handle(e, setComp),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n        value: \"Name\",\n        children: \"Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n        value: \"Comics\",\n        children: \"Comics\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n        value: \"Stories\",\n        children: \"Stories\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), post.length > 0 ? post.map(heroes => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      id: \"characters\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: \"imgCard\",\n        src: heroes.thumbnail.path + imgPath + heroes.thumbnail.extension,\n        alt: \"character\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: heroes.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, this)]\n    }, heroes, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ2ZWxfbXVsdGl2ZXJzZS8uL3BhZ2VzL2NoYXJhY3RlcnMvaW5kZXguanN4PzFiZDMiXSwibmFtZXMiOlsiTWFydmVsIiwicG9zdCIsInNldFBvc3QiLCJ1c2VTdGF0ZSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiZmlsdGVyQnlOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpbWdQYXRoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImUiLCJoYW5kbGUiLCJzZXRDb21wIiwibGVuZ3RoIiwibWFwIiwiaGVyb2VzIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUM7QUFDckNHLGdCQUFZLEVBQUU7QUFDWkMsVUFBSSxFQUFFO0FBRE07QUFEdUIsR0FBRCxDQUF0QztBQUtBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUVBLFFBQU1TLE9BQU8sR0FBRyxzQkFBaEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RDLG9EQUFBLENBQVUsd0lBQVYsRUFBb0pDLElBQXBKLENBQTBKQyxRQUFELElBQWNaLE9BQU8sQ0FBQ1ksUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJDLE9BQXBCLENBQTlLO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGNBQVEsRUFBR0MsQ0FBRCxJQUFPQyxNQUFNLENBQUNELENBQUQsRUFBSUUsT0FBSixDQUEvQjtBQUFBLDhCQUNFO0FBQVEsYUFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQVEsYUFBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQU9HbEIsSUFBSSxDQUFDbUIsTUFBTCxHQUFjLENBQWQsR0FDR25CLElBQUksQ0FBQ29CLEdBQUwsQ0FBVUMsTUFBRCxpQkFDVDtBQUFTLFFBQUUsRUFBQyxZQUFaO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBeUIsV0FBRyxFQUFFQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLElBQWpCLEdBQXdCZCxPQUF4QixHQUFrQ1ksTUFBTSxDQUFDQyxTQUFQLENBQWlCRSxTQUFqRjtBQUE0RixXQUFHLEVBQUM7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSwrQkFDRTtBQUFBLG9CQUFLSCxNQUFNLENBQUNmO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLE9BQThCZSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsQ0FESCxnQkFTRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRCIsImZpbGUiOiIuL3BhZ2VzL2NoYXJhY3RlcnMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJ2ZWwoKSB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe1xuICAgIGZpbHRlckJ5TmFtZToge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHBvc3QpO1xuXG4gIGNvbnN0IGltZ1BhdGggPSAnL3N0YW5kYXJkX2ZhbnRhc3RpYy4nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwczovL2dhdGV3YXkubWFydmVsLmNvbTo0NDMvdjEvcHVibGljL2NoYXJhY3RlcnM/dHM9MSZhcGlrZXk9NzE0NzczYTM3NTgxNjVjYjE3M2RiYWQ0ODI1YzA2MDgmaGFzaD1iOGM1MzAyOTUyMjRmYjE4MzVjNTFlYTZiNzAwMGI0YicpLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRQb3N0KHJlc3BvbnNlLmRhdGEuZGF0YS5yZXN1bHRzKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGUoZSwgc2V0Q29tcCl9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTmFtZVwiPk5hbWU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNvbWljc1wiPkNvbWljczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3Rvcmllc1wiPlN0b3JpZXM8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgICAge3Bvc3QubGVuZ3RoID4gMFxuICAgICAgICA/IHBvc3QubWFwKChoZXJvZXMpID0+IChcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImNoYXJhY3RlcnNcIiBrZXk9e2hlcm9lc30+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ0NhcmRcIiBzcmM9e2hlcm9lcy50aHVtYm5haWwucGF0aCArIGltZ1BhdGggKyBoZXJvZXMudGh1bWJuYWlsLmV4dGVuc2lvbn0gYWx0PVwiY2hhcmFjdGVyXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT57aGVyb2VzLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKSlcbiAgICAgICAgOiA8aDE+TG9hZGluZzwvaDE+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/characters/index.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/characters/index.jsx"));
module.exports = __webpack_exports__;

})();