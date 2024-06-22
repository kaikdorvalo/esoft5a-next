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

/***/ "(app-pages-browser)/./src/app/evolucoes/page.tsx":
/*!************************************!*\
  !*** ./src/app/evolucoes/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Evolucao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_EvolutionCard_EvolutionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EvolutionCard/EvolutionCard */ \"(app-pages-browser)/./src/components/EvolutionCard/EvolutionCard.tsx\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header/Header */ \"(app-pages-browser)/./src/components/header/Header.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/evolucoes/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Evolucao() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const [pageTitle, setPageTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [urls, setUrls] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [cont, setCont] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const getParam = (param)=>{\n        return params.get(param);\n    };\n    const callApi = async ()=>{\n        try {\n            const fetchRes = await fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(getParam(\"evolution\")));\n            const data = await fetchRes.json();\n            const object = Object.values(data.sprites);\n            let urlArray = object.filter((el)=>typeof el === \"string\");\n            console.log(urlArray);\n            setUrls([\n                urlArray[2],\n                urlArray[3],\n                urlArray[0],\n                urlArray[1]\n            ]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const loadPageTitle = ()=>{\n        const title = getParam(\"evolution\");\n        if (title) {\n            setPageTitle(title);\n        } else {\n            setPageTitle(\"Erro\");\n        }\n    };\n    function setImage(urls, count) {\n        cont >= urls.length - 1 ? setCont(0) : setCont(cont + 1);\n        setImg(urls[cont]);\n    }\n    const onclick = ()=>{\n        alert(1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        loadPageTitle();\n        callApi();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setImage(urls, cont);\n    }, [\n        urls\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                title: pageTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\app\\\\evolucoes\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EvolutionCard_EvolutionCard__WEBPACK_IMPORTED_MODULE_1__.EvolutionCard, {\n                    img: img,\n                    onclick: onclick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\app\\\\evolucoes\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\app\\\\evolucoes\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Evolucao, \"yg0Y4IKyMc7MwcuvVwmT0V77g1Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Evolucao;\nvar _c;\n$RefreshReg$(_c, \"Evolucao\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXZvbHVjb2VzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXlFO0FBQ3JCO0FBQ0Y7QUFDTjtBQUNMO0FBRXhCLFNBQVNNOztJQUNwQixNQUFNQyxTQUFTTCxnRUFBZUE7SUFDOUIsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNVLEtBQUtDLE9BQU8sR0FBR1gsK0NBQVFBLENBQUM7SUFHL0IsTUFBTVksV0FBVyxDQUFDQztRQUNkLE9BQU9WLE9BQU9XLEdBQUcsQ0FBQ0Q7SUFDdEI7SUFFQSxNQUFNRSxVQUFVO1FBQ1osSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxQ0FBMkQsT0FBdEJMLFNBQVM7WUFDM0UsTUFBTU0sT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDLE1BQU1DLFNBQVNDLE9BQU9DLE1BQU0sQ0FBQ0osS0FBS0ssT0FBTztZQUN6QyxJQUFJQyxXQUFXSixPQUFPSyxNQUFNLENBQUMsQ0FBQ0MsS0FBTyxPQUFPQSxPQUFPO1lBQ25EQyxRQUFRQyxHQUFHLENBQUNKO1lBQ1pqQixRQUFRO2dCQUFDaUIsUUFBUSxDQUFDLEVBQUU7Z0JBQUVBLFFBQVEsQ0FBQyxFQUFFO2dCQUFFQSxRQUFRLENBQUMsRUFBRTtnQkFBRUEsUUFBUSxDQUFDLEVBQUU7YUFBQztRQUNoRSxFQUFFLE9BQU9LLE9BQU87WUFDWkYsUUFBUUMsR0FBRyxDQUFDQztRQUNoQjtJQUNKO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ2xCLE1BQU1DLFFBQVFuQixTQUFTO1FBQ3ZCLElBQUltQixPQUFPO1lBQ1AxQixhQUFhMEI7UUFDakIsT0FBTztZQUNIMUIsYUFBYTtRQUNqQjtJQUNKO0lBRUEsU0FBUzJCLFNBQVMxQixJQUFjLEVBQUUyQixLQUFhO1FBQzNDekIsUUFBUUYsS0FBSzRCLE1BQU0sR0FBRyxJQUFJekIsUUFBUSxLQUFLQSxRQUFRRCxPQUFPO1FBRXRERyxPQUFPTCxJQUFJLENBQUNFLEtBQUs7SUFDckI7SUFFQSxNQUFNMkIsVUFBVTtRQUNaQyxNQUFNO0lBQ1Y7SUFFQXJDLGdEQUFTQSxDQUFDO1FBQ04rQjtRQUNBZjtJQUNKLEdBQUcsRUFBRTtJQUVMaEIsZ0RBQVNBLENBQUM7UUFDTmlDLFNBQVMxQixNQUFNRTtJQUNuQixHQUFHO1FBQUNGO0tBQUs7SUFFVCxxQkFDSTs7MEJBQ0ksOERBQUNULDZEQUFNQTtnQkFBQ2tDLE9BQU8zQjs7Ozs7OzBCQUNmLDhEQUFDaUM7Z0JBQUtDLFdBQVdyQyw4REFBVzswQkFDeEIsNEVBQUNMLGtGQUFhQTtvQkFBQ2MsS0FBS0E7b0JBQUt5QixTQUFTQTs7Ozs7Ozs7Ozs7OztBQUlsRDtHQTdEd0JqQzs7UUFDTEosNERBQWVBOzs7S0FEVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ldm9sdWNvZXMvcGFnZS50c3g/M2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IEV2b2x1dGlvbkNhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL0V2b2x1dGlvbkNhcmQvRXZvbHV0aW9uQ2FyZFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZvbHVjYW8oKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IFtwYWdlVGl0bGUsIHNldFBhZ2VUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXJscywgc2V0VXJsc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvbnQsIHNldENvbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW1nLCBzZXRJbWddID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXRQYXJhbSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQocGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGxBcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmV0Y2hSZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7Z2V0UGFyYW0oJ2V2b2x1dGlvbicpfWApO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hSZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmplY3QgPSBPYmplY3QudmFsdWVzKGRhdGEuc3ByaXRlcyk7XHJcbiAgICAgICAgICAgIGxldCB1cmxBcnJheSA9IG9iamVjdC5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsQXJyYXkpXHJcbiAgICAgICAgICAgIHNldFVybHMoW3VybEFycmF5WzJdLCB1cmxBcnJheVszXSwgdXJsQXJyYXlbMF0sIHVybEFycmF5WzFdXSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkUGFnZVRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ2V0UGFyYW0oJ2V2b2x1dGlvbicpO1xyXG4gICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUodGl0bGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZShcIkVycm9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEltYWdlKHVybHM6IHN0cmluZ1tdLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29udCA+PSB1cmxzLmxlbmd0aCAtIDEgPyBzZXRDb250KDApIDogc2V0Q29udChjb250ICsgMSk7XHJcblxyXG4gICAgICAgIHNldEltZyh1cmxzW2NvbnRdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KDEpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkUGFnZVRpdGxlKCk7XHJcbiAgICAgICAgY2FsbEFwaSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZSh1cmxzLCBjb250KTtcclxuICAgIH0sIFt1cmxzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXtwYWdlVGl0bGV9PjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxFdm9sdXRpb25DYXJkIGltZz17aW1nfSBvbmNsaWNrPXtvbmNsaWNrfSA+PC9Fdm9sdXRpb25DYXJkPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJFdm9sdXRpb25DYXJkIiwiSGVhZGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJFdm9sdWNhbyIsInBhcmFtcyIsInBhZ2VUaXRsZSIsInNldFBhZ2VUaXRsZSIsInVybHMiLCJzZXRVcmxzIiwiY29udCIsInNldENvbnQiLCJpbWciLCJzZXRJbWciLCJnZXRQYXJhbSIsInBhcmFtIiwiZ2V0IiwiY2FsbEFwaSIsImZldGNoUmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9iamVjdCIsIk9iamVjdCIsInZhbHVlcyIsInNwcml0ZXMiLCJ1cmxBcnJheSIsImZpbHRlciIsImVsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibG9hZFBhZ2VUaXRsZSIsInRpdGxlIiwic2V0SW1hZ2UiLCJjb3VudCIsImxlbmd0aCIsIm9uY2xpY2siLCJhbGVydCIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/evolucoes/page.tsx\n"));

/***/ })

});