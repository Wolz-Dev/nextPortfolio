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

/***/ "./components/ScrollArrow.js":
/*!***********************************!*\
  !*** ./components/ScrollArrow.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ScrollArrow = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScroll = ref[0], setShowScroll = ref[1];\n    var checkScrollTop = function() {\n        if (!showScroll && window.pageYOffset > 400) {\n            setShowScroll(true);\n        } else if (showScroll && window.pageYOffset <= 400) {\n            setShowScroll(false);\n        }\n    };\n    var scrollTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth'\n        });\n    };\n    window.addEventListener('scroll', checkScrollTop);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaArrowCircleUp, {\n        className: \"scrollTop\",\n        onClick: scrollTop,\n        style: {\n            height: 40,\n            display: showScroll ? 'flex' : 'none'\n        },\n        __source: {\n            fileName: \"/home/wolz/Documentos/Dev Training/FrontEnd/NextJS/Portfolio/components/ScrollArrow.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this\n    }));\n};\n_s(ScrollArrow, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ScrollArrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollArrow);\nvar _c;\n$RefreshReg$(_c, \"ScrollArrow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njcm9sbEFycm93LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ1M7OztBQUdoRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUNwQixHQUQwQixDQUFDOztJQUV6QixHQUFLLENBQStCRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQ0csVUFBVSxHQUFtQkgsR0FBZSxLQUFoQ0ksYUFBYSxHQUFJSixHQUFlO0lBRW5ELEdBQUssQ0FBQ0ssY0FBYyxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7UUFDNUIsRUFBRSxHQUFHRixVQUFVLElBQUlHLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQzVDSCxhQUFhLENBQUMsSUFBSTtRQUNwQixDQUFDLE1BQU0sRUFBRSxFQUFFRCxVQUFVLElBQUlHLE1BQU0sQ0FBQ0MsV0FBVyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ25ESCxhQUFhLENBQUMsS0FBSztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0ksU0FBUyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7UUFDdkJGLE1BQU0sQ0FBQ0csUUFBUSxDQUFDLENBQUM7WUFBQ0MsR0FBRyxFQUFFLENBQUM7WUFBRUMsUUFBUSxFQUFFLENBQVE7UUFBQyxDQUFDO0lBQ2hELENBQUM7SUFFREwsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVQLGNBQWM7SUFFaEQsTUFBTSxzRUFDSEosMkRBQWU7UUFBQ1ksU0FBUyxFQUFDLENBQVc7UUFBQ0MsT0FBTyxFQUFFTixTQUFTO1FBQUVPLEtBQUssRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRSxFQUFFO1lBQUVDLE9BQU8sRUFBRWQsVUFBVSxHQUFHLENBQU0sUUFBRyxDQUFNO1FBQUMsQ0FBQzs7Ozs7Ozs7QUFFM0gsQ0FBQztHQXJCS0QsV0FBVztLQUFYQSxXQUFXO0FBdUJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2Nyb2xsQXJyb3cuanM/ZTEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZhQXJyb3dDaXJjbGVVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5cbmNvbnN0IFNjcm9sbEFycm93ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzaG93U2Nyb2xsLCBzZXRTaG93U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNoZWNrU2Nyb2xsVG9wID0gKCkgPT4ge1xuICAgIGlmICghc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPiA0MDApIHtcbiAgICAgIHNldFNob3dTY3JvbGwodHJ1ZSlcbiAgICB9IGVsc2UgaWYgKHNob3dTY3JvbGwgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDw9IDQwMCkge1xuICAgICAgc2V0U2hvd1Njcm9sbChmYWxzZSlcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbFRvcClcblxuICByZXR1cm4gKFxuICAgIDxGYUFycm93Q2lyY2xlVXAgY2xhc3NOYW1lPVwic2Nyb2xsVG9wXCIgb25DbGljaz17c2Nyb2xsVG9wfSBzdHlsZT17eyBoZWlnaHQ6IDQwLCBkaXNwbGF5OiBzaG93U2Nyb2xsID8gJ2ZsZXgnIDogJ25vbmUnIH19IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQXJyb3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYUFycm93Q2lyY2xlVXAiLCJTY3JvbGxBcnJvdyIsInNob3dTY3JvbGwiLCJzZXRTaG93U2Nyb2xsIiwiY2hlY2tTY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwib25DbGljayIsInN0eWxlIiwiaGVpZ2h0IiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ScrollArrow.js\n");

/***/ })

});