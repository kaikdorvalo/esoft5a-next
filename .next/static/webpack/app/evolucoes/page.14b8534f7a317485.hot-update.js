"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/evolucoes/page",{

/***/ "(app-pages-browser)/./src/components/EvolutionCard/EvolutionCard.tsx":
/*!********************************************************!*\
  !*** ./src/components/EvolutionCard/EvolutionCard.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EvolutionCard: function() { return /* binding */ EvolutionCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _EvolutionCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvolutionCard.module.css */ \"(app-pages-browser)/./src/components/EvolutionCard/EvolutionCard.module.css\");\n/* harmony import */ var _EvolutionCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EvolutionCard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction EvolutionCard(param) {\n    let { img, onclick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_EvolutionCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_EvolutionCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().imgBox),\n            onClick: onclick,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                alt: \"pokemon\",\n                className: (_EvolutionCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().img)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\components\\\\EvolutionCard\\\\EvolutionCard.tsx\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\components\\\\EvolutionCard\\\\EvolutionCard.tsx\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\components\\\\EvolutionCard\\\\EvolutionCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = EvolutionCard;\nvar _c;\n$RefreshReg$(_c, \"EvolutionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0V2b2x1dGlvbkNhcmQvRXZvbHV0aW9uQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFPeEMsU0FBU0MsY0FBYyxLQUF1QjtRQUF2QixFQUFFQyxHQUFHLEVBQUVDLE9BQU8sRUFBUyxHQUF2QjtJQUMxQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV0wsdUVBQVc7a0JBQ3ZCLDRFQUFDSTtZQUFJQyxXQUFXTCx5RUFBYTtZQUFFUSxTQUFTTDtzQkFDcEMsNEVBQUNEO2dCQUFJTyxLQUFLUDtnQkFBS1EsS0FBSTtnQkFBVUwsV0FBV0wsc0VBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEU7S0FSZ0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0V2b2x1dGlvbkNhcmQvRXZvbHV0aW9uQ2FyZC50c3g/ZjhkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRXZvbHV0aW9uQ2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIGltZzogc3RyaW5nXHJcbiAgICBvbmNsaWNrOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXZvbHV0aW9uQ2FyZCh7IGltZywgb25jbGljayB9OiBwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0JveH0gb25DbGljaz17b25jbGlja30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9J3Bva2Vtb24nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkV2b2x1dGlvbkNhcmQiLCJpbWciLCJvbmNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImltZ0JveCIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/EvolutionCard/EvolutionCard.tsx\n"));

/***/ })

});