"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            /* console.log(url) */ nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on('routeChangeStart', handleRouteChange);\n        router.events.on('routeChangeComplete', function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            router.events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/components/Layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4 glass\",\n                __source: {\n                    fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/components/Layout.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            })\n        ]\n    }));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNNO0FBQ047OztBQUVqQyxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUV0QixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFFeEJELGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBRWIsR0FBSyxDQUFDTSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUM5QixFQUFzQixxQkFDdEJMLHNEQUFlO1FBQ25CLENBQUM7UUFFREcsTUFBTSxDQUFDSSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFrQixtQkFBRUosaUJBQWlCO1FBRXRERCxNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQXFCLHNCQUFFLFFBQVE7WUFBRlIsTUFBTSxDQUFOQSxxREFBYzs7UUFFNUQsTUFBTSxDQUFDLFFBQ2YsR0FEcUIsQ0FBQztZQUNWRyxNQUFNLENBQUNJLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQWtCLG1CQUFFTixpQkFBaUI7UUFDM0QsQ0FBQztJQUVMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNOztpRkFFR1AsK0NBQU07Ozs7Ozs7O2lGQUNOYyxDQUFJO2dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7Ozs7Ozs7MEJBQ2pDVixRQUFROzs7O0FBSXpCLENBQUM7R0E5QktELE1BQU07O1FBRU9GLGtEQUFTOzs7S0FGdEJFLE1BQU07QUFnQ1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgICAgICAvKiBjb25zb2xlLmxvZyh1cmwpICovXG4gICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcblxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICAgICAgfVxuXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNCBnbGFzc1wiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});