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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_image_stan_comics_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/image/stan-comics.gif */ \"./public/image/stan-comics.gif\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/dario/Teste_trabalho/Marvel_Heroes/Marvel/Marvel_Characters/pages/comics/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Comics() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      comics = _useState[0],\n      setComics = _useState[1];\n\n  var imgPath = '/standard_fantastic.';\n\n  var getComics = function getComics() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then(function (response) {\n      return setComics(response.data.data.results);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getComics();\n  }, [comics]);\n  console.log(comics);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: comics.length > 0 ? comics.map(function (comic) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: comic.thumbnail.path + imgPath + comic.thumbnail.extension,\n          alt: \"comics\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: comic.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: 'Number of pages : ' + comic.pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"Stories available :\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: 'From Series: ' + comic.series.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: 'Number of Stories: ' + comic.stories.available\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: comic.images.path + imgPath + comic.images.extension,\n            alt: \"story\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this)]\n      }, comic.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, _this);\n    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n      src: _public_image_stan_comics_gif__WEBPACK_IMPORTED_MODULE_4__.default,\n      alt: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Comics, \"KKBZHRsByJUgbh7BkNxka0PKGCQ=\");\n\n_c = Comics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Comics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taWNzL2luZGV4LmpzP2Y3YTAiXSwibmFtZXMiOlsiQ29taWNzIiwidXNlU3RhdGUiLCJjb21pY3MiLCJzZXRDb21pY3MiLCJpbWdQYXRoIiwiZ2V0Q29taWNzIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJjb21pYyIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJ0aXRsZSIsInBhZ2VDb3VudCIsInNlcmllcyIsIm5hbWUiLCJzdG9yaWVzIiwiYXZhaWxhYmxlIiwiaW1hZ2VzIiwiaWQiLCJjb21pY3NMb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUhDLCtDQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFeEJDLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCOztBQUkvQixNQUFNQyxPQUFPLEdBQUcsc0JBQWhCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJDLG9EQUFBLENBQVUsb0lBQVYsRUFBZ0pDLElBQWhKLENBQXFKLFVBQUNDLFFBQUQ7QUFBQSxhQUFjTCxTQUFTLENBQUNLLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxPQUFwQixDQUF2QjtBQUFBLEtBQXJKO0FBQ0QsR0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2JOLGFBQVM7QUFDWCxHQUZRLEVBRU4sQ0FBQ0gsTUFBRCxDQUZNLENBQVQ7QUFHQVUsU0FBTyxDQUFDQyxHQUFSLENBQVlYLE1BQVo7QUFDQSxzQkFDRTtBQUFBLGNBQ0dBLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQixDQUFoQixHQUNHWixNQUFNLENBQUNhLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsMEJBQ1g7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxJQUFoQixHQUF1QmQsT0FBdkIsR0FBaUNZLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkUsU0FBM0Q7QUFBc0UsYUFBRyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGtDQUNFO0FBQUEsc0JBQUtILEtBQUssQ0FBQ0k7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBSyx1QkFBdUJKLEtBQUssQ0FBQ0s7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUk7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLLGtCQUFrQkwsS0FBSyxDQUFDTSxNQUFOLENBQWFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLHdCQUFLLHdCQUF3QlAsS0FBSyxDQUFDUSxPQUFOLENBQWNDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBUUU7QUFBSyxlQUFHLEVBQUVULEtBQUssQ0FBQ1UsTUFBTixDQUFhUixJQUFiLEdBQW9CZCxPQUFwQixHQUE4QlksS0FBSyxDQUFDVSxNQUFOLENBQWFQLFNBQXJEO0FBQWdFLGVBQUcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQWNILEtBQUssQ0FBQ1csRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBWCxDQURILGdCQWdCRyw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUMsa0VBQVo7QUFBd0IsU0FBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQk47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQXBDdUI1QixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vcGFnZXMvY29taWNzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgY29taWNzTG9hZCBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Uvc3Rhbi1jb21pY3MuZ2lmJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29taWNzKCkge1xuXG4gIGNvbnN0IFtjb21pY3MsIHNldENvbWljc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaW1nUGF0aCA9ICcvc3RhbmRhcmRfZmFudGFzdGljLic7XG5cbiAgY29uc3QgZ2V0Q29taWNzID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb206NDQzL3YxL3B1YmxpYy9jb21pY3M/dHM9MSZhcGlrZXk9NzE0NzczYTM3NTgxNjVjYjE3M2RiYWQ0ODI1YzA2MDgmaGFzaD1iOGM1MzAyOTUyMjRmYjE4MzVjNTFlYTZiNzAwMGI0YicpLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRDb21pY3MocmVzcG9uc2UuZGF0YS5kYXRhLnJlc3VsdHMpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBnZXRDb21pY3MoKTtcbiAgfSwgW2NvbWljc10pO1xuICBjb25zb2xlLmxvZyhjb21pY3MpXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICB7Y29taWNzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBjb21pY3MubWFwKChjb21pYykgPT4gKFxuICAgICAgICAgIDxzZWN0aW9uIGtleT17Y29taWMuaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2NvbWljLnRodW1ibmFpbC5wYXRoICsgaW1nUGF0aCArIGNvbWljLnRodW1ibmFpbC5leHRlbnNpb259IGFsdD1cImNvbWljc1wiIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+e2NvbWljLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoMz57J051bWJlciBvZiBwYWdlcyA6ICcgKyBjb21pYy5wYWdlQ291bnR9PC9oMz5cbiAgICAgICAgICAgICAgPGgzPlN0b3JpZXMgYXZhaWxhYmxlIDo8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnsnRnJvbSBTZXJpZXM6ICcgKyBjb21pYy5zZXJpZXMubmFtZSB9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnsnTnVtYmVyIG9mIFN0b3JpZXM6ICcgKyBjb21pYy5zdG9yaWVzLmF2YWlsYWJsZX08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb21pYy5pbWFnZXMucGF0aCArIGltZ1BhdGggKyBjb21pYy5pbWFnZXMuZXh0ZW5zaW9ufSBhbHQ9XCJzdG9yeVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKSlcbiAgICAgICAgOiA8SW1hZ2Ugc3JjPXtjb21pY3NMb2FkfSBhbHQ9XCJsb2FkaW5nXCIgLz5cbiAgICAgIH1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comics/index.js\n");

/***/ })

});