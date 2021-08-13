/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/comics",{

/***/ "./pages/comics/index.js":
/*!*******************************!*\
  !*** ./pages/comics/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_image_deadpool_marvel_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/image/deadpool-marvel.gif */ \"./public/image/deadpool-marvel.gif\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/dario/Teste_trabalho/Marvel_Heroes/Marvel/Marvel_Characters/pages/comics/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Comics() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      comics = _useState[0],\n      setComics = _useState[1];\n\n  var imgPath = '/standard_fantastic.';\n\n  var getComics = function getComics() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then(function (response) {\n      return setComics(response.data.data.results);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getComics();\n  }, [comics]);\n  console.log(comics);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: comics.length > 0 ? comics.map(function (comic) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: comic.thumbnail.path + imgPath + comic.thumbnail.extension,\n          alt: \"comics\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: comic.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: 'Number of pages : ' + comic.pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"Stories available :\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: 'From Series: ' + comic.series.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: 'Number of Stories: ' + comic.stories.available\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: comic.images.path + imgPath + comic.images.extension,\n            alt: \"story\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this)]\n      }, comic.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, _this);\n    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: _public_image_deadpool_marvel_gif__WEBPACK_IMPORTED_MODULE_3__.default,\n      alt: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Comics, \"KKBZHRsByJUgbh7BkNxka0PKGCQ=\");\n\n_c = Comics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Comics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taWNzL2luZGV4LmpzP2Y3YTAiXSwibmFtZXMiOlsiQ29taWNzIiwidXNlU3RhdGUiLCJjb21pY3MiLCJzZXRDb21pY3MiLCJpbWdQYXRoIiwiZ2V0Q29taWNzIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJjb21pYyIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJ0aXRsZSIsInBhZ2VDb3VudCIsInNlcmllcyIsIm5hbWUiLCJzdG9yaWVzIiwiYXZhaWxhYmxlIiwiaW1hZ2VzIiwiaWQiLCJjaGFyYWN0ZXJMb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFSEMsK0NBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUV4QkMsTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0I7O0FBSS9CLE1BQU1DLE9BQU8sR0FBRyxzQkFBaEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkMsb0RBQUEsQ0FBVSxvSUFBVixFQUFnSkMsSUFBaEosQ0FBcUosVUFBQ0MsUUFBRDtBQUFBLGFBQWNMLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJDLE9BQXBCLENBQXZCO0FBQUEsS0FBcko7QUFDRCxHQUZEOztBQUlBQyxrREFBUyxDQUFDLFlBQU07QUFDYk4sYUFBUztBQUNYLEdBRlEsRUFFTixDQUFDSCxNQUFELENBRk0sQ0FBVDtBQUdBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBWjtBQUNBLHNCQUNFO0FBQUEsY0FDR0EsTUFBTSxDQUFDWSxNQUFQLEdBQWdCLENBQWhCLEdBQ0daLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSwwQkFDWDtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLElBQWhCLEdBQXVCZCxPQUF2QixHQUFpQ1ksS0FBSyxDQUFDQyxTQUFOLENBQWdCRSxTQUEzRDtBQUFzRSxhQUFHLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0gsS0FBSyxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHNCQUFLLHVCQUF1QkosS0FBSyxDQUFDSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJSTtBQUFBLG9DQUNJO0FBQUEsd0JBQUssa0JBQWtCTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsd0JBQUssd0JBQXdCUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFRRTtBQUFLLGVBQUcsRUFBRVQsS0FBSyxDQUFDVSxNQUFOLENBQWFSLElBQWIsR0FBb0JkLE9BQXBCLEdBQThCWSxLQUFLLENBQUNVLE1BQU4sQ0FBYVAsU0FBckQ7QUFBZ0UsZUFBRyxFQUFDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBY0gsS0FBSyxDQUFDVyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFYLENBREgsZ0JBZ0JHO0FBQUssU0FBRyxFQUFFQyxzRUFBVjtBQUF5QixTQUFHLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBcEN1QjVCLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9wYWdlcy9jb21pY3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2hhcmFjdGVyTG9hZCBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvZGVhZHBvb2wtbWFydmVsLmdpZic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbWljcygpIHtcblxuICBjb25zdCBbY29taWNzLCBzZXRDb21pY3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGltZ1BhdGggPSAnL3N0YW5kYXJkX2ZhbnRhc3RpYy4nO1xuXG4gIGNvbnN0IGdldENvbWljcyA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tOjQ0My92MS9wdWJsaWMvY29taWNzP3RzPTEmYXBpa2V5PTcxNDc3M2EzNzU4MTY1Y2IxNzNkYmFkNDgyNWMwNjA4Jmhhc2g9YjhjNTMwMjk1MjI0ZmIxODM1YzUxZWE2YjcwMDBiNGInKS50aGVuKChyZXNwb25zZSkgPT4gc2V0Q29taWNzKHJlc3BvbnNlLmRhdGEuZGF0YS5yZXN1bHRzKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgZ2V0Q29taWNzKCk7XG4gIH0sIFtjb21pY3NdKTtcbiAgY29uc29sZS5sb2coY29taWNzKVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge2NvbWljcy5sZW5ndGggPiAwXG4gICAgICAgID8gY29taWNzLm1hcCgoY29taWMpID0+IChcbiAgICAgICAgICA8c2VjdGlvbiBrZXk9e2NvbWljLmlkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjb21pYy50aHVtYm5haWwucGF0aCArIGltZ1BhdGggKyBjb21pYy50aHVtYm5haWwuZXh0ZW5zaW9ufSBhbHQ9XCJjb21pY3NcIiAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPntjb21pYy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8aDM+eydOdW1iZXIgb2YgcGFnZXMgOiAnICsgY29taWMucGFnZUNvdW50fTwvaDM+XG4gICAgICAgICAgICAgIDxoMz5TdG9yaWVzIGF2YWlsYWJsZSA6PC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57J0Zyb20gU2VyaWVzOiAnICsgY29taWMuc2VyaWVzLm5hbWUgfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57J051bWJlciBvZiBTdG9yaWVzOiAnICsgY29taWMuc3Rvcmllcy5hdmFpbGFibGV9PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y29taWMuaW1hZ2VzLnBhdGggKyBpbWdQYXRoICsgY29taWMuaW1hZ2VzLmV4dGVuc2lvbn0gYWx0PVwic3RvcnlcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICkpXG4gICAgICAgIDogPGltZyBzcmM9e2NoYXJhY3RlckxvYWR9IGFsdD1cImxvYWRpbmdcIiAvPlxuICAgICAgfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comics/index.js\n");

/***/ }),

/***/ "./public/image/deadpool-marvel.gif":
/*!******************************************!*\
  !*** ./public/image/deadpool-marvel.gif ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/image/public/image/deadpool-marvel.8041ccba1adeeac91714062d1dbd4e96.gif\",\"height\":300,\"width\":212});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ltYWdlL2RlYWRwb29sLW1hcnZlbC5naWY/MjY5MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWdCLENBQUMsdUhBQXVIIiwiZmlsZSI6Ii4vcHVibGljL2ltYWdlL2RlYWRwb29sLW1hcnZlbC5naWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9kZWFkcG9vbC1tYXJ2ZWwuODA0MWNjYmExYWRlZWFjOTE3MTQwNjJkMWRiZDRlOTYuZ2lmXCIsXCJoZWlnaHRcIjozMDAsXCJ3aWR0aFwiOjIxMn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/image/deadpool-marvel.gif\n");

/***/ })

});