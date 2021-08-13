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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Marvel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/dario/Teste_trabalho/Marvel_Heroes/Marvel/Marvel_Characters/pages/characters/index.jsx\";\n\n\nfunction Marvel() {\n  const {\n    0: post,\n    1: setPost\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: filters,\n    1: setFilters\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    filterByName: {\n      name: ''\n    }\n  });\n  console.log(post);\n  const imgPath = '/standard_fantastic.';\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then(response => setPost(response.data.data.results));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: post.length > 0 ? post.map(heroes => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      id: \"characters\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: \"imgCard\",\n        src: heroes.thumbnail.path + imgPath + heroes.thumbnail.extension,\n        alt: \"character\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: heroes.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, this)]\n    }, heroes, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ2ZWxfbXVsdGl2ZXJzZS8uL3BhZ2VzL2NoYXJhY3RlcnMvaW5kZXguanN4PzFiZDMiXSwibmFtZXMiOlsiTWFydmVsIiwicG9zdCIsInNldFBvc3QiLCJ1c2VTdGF0ZSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiZmlsdGVyQnlOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpbWdQYXRoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImxlbmd0aCIsIm1hcCIsImhlcm9lcyIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDO0FBQ3JDRyxnQkFBWSxFQUFFO0FBQ1pDLFVBQUksRUFBRTtBQURNO0FBRHVCLEdBQUQsQ0FBdEM7QUFLQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFFQSxRQUFNUyxPQUFPLEdBQUcsc0JBQWhCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxvREFBQSxDQUFVLHdJQUFWLEVBQW9KQyxJQUFwSixDQUEwSkMsUUFBRCxJQUFjWixPQUFPLENBQUNZLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxPQUFwQixDQUE5SztBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLGNBQ0dmLElBQUksQ0FBQ2dCLE1BQUwsR0FBYyxDQUFkLEdBQ0doQixJQUFJLENBQUNpQixHQUFMLENBQVVDLE1BQUQsaUJBQ1Q7QUFBUyxRQUFFLEVBQUMsWUFBWjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLFdBQUcsRUFBRUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxJQUFqQixHQUF3QlgsT0FBeEIsR0FBa0NTLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkUsU0FBakY7QUFBNEYsV0FBRyxFQUFDO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsK0JBQ0U7QUFBQSxvQkFBS0gsTUFBTSxDQUFDWjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQSxPQUE4QlksTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLENBREgsZ0JBU0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRCIsImZpbGUiOiIuL3BhZ2VzL2NoYXJhY3RlcnMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJ2ZWwoKSB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe1xuICAgIGZpbHRlckJ5TmFtZToge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHBvc3QpO1xuXG4gIGNvbnN0IGltZ1BhdGggPSAnL3N0YW5kYXJkX2ZhbnRhc3RpYy4nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwczovL2dhdGV3YXkubWFydmVsLmNvbTo0NDMvdjEvcHVibGljL2NoYXJhY3RlcnM/dHM9MSZhcGlrZXk9NzE0NzczYTM3NTgxNjVjYjE3M2RiYWQ0ODI1YzA2MDgmaGFzaD1iOGM1MzAyOTUyMjRmYjE4MzVjNTFlYTZiNzAwMGI0YicpLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRQb3N0KHJlc3BvbnNlLmRhdGEuZGF0YS5yZXN1bHRzKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge3Bvc3QubGVuZ3RoID4gMFxuICAgICAgICA/IHBvc3QubWFwKChoZXJvZXMpID0+IChcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImNoYXJhY3RlcnNcIiBrZXk9e2hlcm9lc30+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ0NhcmRcIiBzcmM9e2hlcm9lcy50aHVtYm5haWwucGF0aCArIGltZ1BhdGggKyBoZXJvZXMudGh1bWJuYWlsLmV4dGVuc2lvbn0gYWx0PVwiY2hhcmFjdGVyXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT57aGVyb2VzLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKSlcbiAgICAgICAgOiA8aDE+TG9hZGluZzwvaDE+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/characters/index.jsx\n");

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