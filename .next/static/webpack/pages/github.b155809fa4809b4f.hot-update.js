"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GitHub = function(param) {\n    var user = param.user, statusCode = param.statusCode;\n    if (statusCode) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            statusCode: statusCode,\n            __source: {\n                fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                lineNumber: 7,\n                columnNumber: 16\n            },\n            __self: _this\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"col-md-4 offset-md-4 my-5 \",\n                __source: {\n                    fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"card card-body text-center\",\n                    __source: {\n                        fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: user.avatar_url,\n                            alt: \"avatar\",\n                            __source: {\n                                fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: user.bio\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"mb-2\",\n                            __source: {\n                                fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    href: user.html_url,\n                                    target: \"_blank\",\n                                    className: \"btn btn-wolz bg-black2 me-3 text-light border-wolz\",\n                                    __source: {\n                                        fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: \"Go to my GitHub\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    href: \"/\",\n                                    className: \"btn btn-wolz bg-black2 text-light border-wolz\",\n                                    __source: {\n                                        fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/pages/github.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: \"Go to my Portfolio\"\n                                })\n                            ]\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = GitHub;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);\nvar _c;\n$RefreshReg$(_c, \"GitHub\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRodWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNiOztBQUU1QixHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBeEJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7SUFFOUIsRUFBRSxFQUFFQSxVQUFVLEVBQUUsQ0FBQztRQUNiLE1BQU0sc0VBQUVILDhDQUFLO1lBQUNHLFVBQVUsRUFBRUEsVUFBVTs7Ozs7Ozs7SUFDeEMsQ0FBQztJQUVELE1BQU0sc0VBQ0RKLDBEQUFNOzs7Ozs7O3VGQUNGSyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OzJGQUNmRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNEI7Ozs7Ozs7Z0dBQ3RDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBNEI7Ozs7Ozs7OzZGQUN0Q0MsQ0FBRTs7Ozs7OztzQ0FBRUosSUFBSSxDQUFDSyxJQUFJOzs2RkFDYkMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFUCxJQUFJLENBQUNRLFVBQVU7NEJBQUVDLEdBQUcsRUFBQyxDQUFROzs7Ozs7Ozs2RkFDdENDLENBQUM7Ozs7Ozs7c0NBQUVWLElBQUksQ0FBQ1csR0FBRzs7OEZBQ1hULENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OztxR0FDaEJTLENBQUM7b0NBQUNDLElBQUksRUFBRWIsSUFBSSxDQUFDYyxRQUFRO29DQUFFQyxNQUFNLEVBQUMsQ0FBUTtvQ0FBQ1osU0FBUyxFQUFDLENBQW9EOzs7Ozs7OzhDQUFDLENBQWU7O3FHQUNySFMsQ0FBQztvQ0FBQ0MsSUFBSSxFQUFDLENBQUc7b0NBQUNWLFNBQVMsRUFBQyxDQUErQzs7Ozs7Ozs4Q0FBQyxDQUFrQjs7Ozs7Ozs7O0FBT3BILENBQUM7S0F2QktKLE1BQU07O0FBdUNaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dpdGh1Yi5qcz8zNTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9fZXJyb3JcIlxuXG5jb25zdCBHaXRIdWIgPSAoeyB1c2VyLCBzdGF0dXNDb2RlIH0pID0+IHtcblxuICAgIGlmIChzdGF0dXNDb2RlKSB7XG4gICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG9mZnNldC1tZC00IG15LTUgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dXNlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJhdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXIuYmlvfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4td29seiBiZy1ibGFjazIgbWUtMyB0ZXh0LWxpZ2h0IGJvcmRlci13b2x6XCI+R28gdG8gbXkgR2l0SHViPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi13b2x6IGJnLWJsYWNrMiB0ZXh0LWxpZ2h0IGJvcmRlci13b2x6XCI+R28gdG8gbXkgUG9ydGZvbGlvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9Xb2x6LURldicpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1cyA+IDIwMCA/IHJlcy5zdGF0dXMgOiBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB1c2VyOiBkYXRhLFxuICAgICAgICAgICAgc3RhdHVzQ29kZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXRIdWIiXSwibmFtZXMiOlsiTGF5b3V0IiwiRXJyb3IiLCJHaXRIdWIiLCJ1c2VyIiwic3RhdHVzQ29kZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImltZyIsInNyYyIsImF2YXRhcl91cmwiLCJhbHQiLCJwIiwiYmlvIiwiYSIsImhyZWYiLCJodG1sX3VybCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/github.js\n");

/***/ })

});