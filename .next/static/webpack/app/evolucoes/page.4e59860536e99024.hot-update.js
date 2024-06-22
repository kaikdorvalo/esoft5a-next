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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Evolucao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_EvolutionCard_EvolutionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EvolutionCard/EvolutionCard */ \"(app-pages-browser)/./src/components/EvolutionCard/EvolutionCard.tsx\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header/Header */ \"(app-pages-browser)/./src/components/header/Header.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/evolucoes/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Evolucao() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const [pageTitle, setPageTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [urls, setUrls] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [cont, setCont] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const getParam = (param)=>{\n        return params.get(param);\n    };\n    const callApi = async ()=>{\n        try {\n            const fetchRes = await fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(getParam(\"evolution\")));\n            const data = await fetchRes.json();\n            const object = Object.values(data.sprites);\n            let urlArray = object.filter((el)=>typeof el === \"string\");\n            console.log(urlArray);\n            setUrls([\n                urlArray[2],\n                urlArray[3],\n                urlArray[0],\n                urlArray[1]\n            ]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const loadPageTitle = ()=>{\n        const title = getParam(\"evolution\");\n        if (title) {\n            setPageTitle(title);\n        } else {\n            setPageTitle(\"Erro\");\n        }\n    };\n    function setImage(urls, count) {\n        cont >= urls.length - 1 ? setCont(0) : setCont(cont + 1);\n        const img = document.createElement(\"img\");\n        img.src = urls[count];\n        img.alt = \"pokemon image\";\n        setImage;\n        console.log(urls[counter]);\n        imgDiv.innerHTML = \"\";\n        imgDiv.appendChild(img);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        loadPageTitle();\n        callApi();\n        setImage(urls, cont);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setImage(urls);\n    }, [\n        cont\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                title: pageTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\app\\\\evolucoes\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EvolutionCard_EvolutionCard__WEBPACK_IMPORTED_MODULE_1__.EvolutionCard, {\n                    img: \"aaa\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\app\\\\evolucoes\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaikd\\\\Documents\\\\dev_web_satin\\\\esoft5a-next\\\\src\\\\app\\\\evolucoes\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Evolucao, \"yg0Y4IKyMc7MwcuvVwmT0V77g1Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Evolucao;\nvar _c;\n$RefreshReg$(_c, \"Evolucao\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXZvbHVjb2VzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXlFO0FBQ3JCO0FBQ0Y7QUFDTjtBQUNMO0FBRXhCLFNBQVNNOztJQUNwQixNQUFNQyxTQUFTTCxnRUFBZUE7SUFDOUIsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUNsRCxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxLQUFLQyxPQUFPLEdBQUdYLCtDQUFRQSxDQUFDO0lBRy9CLE1BQU1ZLFdBQVcsQ0FBQ0M7UUFDZCxPQUFPVixPQUFPVyxHQUFHLENBQUNEO0lBQ3RCO0lBRUEsTUFBTUUsVUFBVTtRQUNaLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQTJELE9BQXRCTCxTQUFTO1lBQzNFLE1BQU1NLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQyxNQUFNQyxTQUFTQyxPQUFPQyxNQUFNLENBQUNKLEtBQUtLLE9BQU87WUFDekMsSUFBSUMsV0FBV0osT0FBT0ssTUFBTSxDQUFDLENBQUNDLEtBQU8sT0FBT0EsT0FBTztZQUNuREMsUUFBUUMsR0FBRyxDQUFDSjtZQUNaakIsUUFBUTtnQkFBQ2lCLFFBQVEsQ0FBQyxFQUFFO2dCQUFFQSxRQUFRLENBQUMsRUFBRTtnQkFBRUEsUUFBUSxDQUFDLEVBQUU7Z0JBQUVBLFFBQVEsQ0FBQyxFQUFFO2FBQUM7UUFDaEUsRUFBRSxPQUFPSyxPQUFPO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDaEI7SUFDSjtJQUVBLE1BQU1DLGdCQUFnQjtRQUNsQixNQUFNQyxRQUFRbkIsU0FBUztRQUN2QixJQUFJbUIsT0FBTztZQUNQMUIsYUFBYTBCO1FBQ2pCLE9BQU87WUFDSDFCLGFBQWE7UUFDakI7SUFDSjtJQUVBLFNBQVMyQixTQUFTMUIsSUFBYyxFQUFFMkIsS0FBYTtRQUMzQ3pCLFFBQVFGLEtBQUs0QixNQUFNLEdBQUcsSUFBSXpCLFFBQVEsS0FBS0EsUUFBUUQsT0FBTztRQUV0RCxNQUFNRSxNQUFNeUIsU0FBU0MsYUFBYSxDQUFDO1FBQ25DMUIsSUFBSTJCLEdBQUcsR0FBRy9CLElBQUksQ0FBQzJCLE1BQU07UUFDckJ2QixJQUFJNEIsR0FBRyxHQUFHO1FBRVZOO1FBRUFMLFFBQVFDLEdBQUcsQ0FBQ3RCLElBQUksQ0FBQ2lDLFFBQVE7UUFFekJDLE9BQU9DLFNBQVMsR0FBRztRQUNuQkQsT0FBT0UsV0FBVyxDQUFDaEM7SUFFdkI7SUFFQVgsZ0RBQVNBLENBQUM7UUFDTitCO1FBQ0FmO1FBRUFpQixTQUFTMUIsTUFBTUU7SUFDbkIsR0FBRyxFQUFFO0lBRUxULGdEQUFTQSxDQUFDO1FBQ05pQyxTQUFTMUI7SUFDYixHQUFHO1FBQUNFO0tBQUs7SUFFVCxxQkFDSTs7MEJBQ0ksOERBQUNYLDZEQUFNQTtnQkFBQ2tDLE9BQU8zQjs7Ozs7OzBCQUNmLDhEQUFDdUM7Z0JBQUtDLFdBQVczQyw4REFBVzswQkFDeEIsNEVBQUNMLGtGQUFhQTtvQkFBQ2MsS0FBSTs7Ozs7Ozs7Ozs7OztBQUluQztHQXJFd0JSOztRQUNMSiw0REFBZUE7OztLQURWSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2V2b2x1Y29lcy9wYWdlLnRzeD8zYjFiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgRXZvbHV0aW9uQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvRXZvbHV0aW9uQ2FyZC9Fdm9sdXRpb25DYXJkXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdm9sdWNhbygpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3QgW3BhZ2VUaXRsZSwgc2V0UGFnZVRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1cmxzLCBzZXRVcmxzXSA9IHVzZVN0YXRlPEFycmF5PFN0cmluZz4+KFtdKTtcclxuICAgIGNvbnN0IFtjb250LCBzZXRDb250XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gICAgY29uc3QgZ2V0UGFyYW0gPSAocGFyYW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBwYXJhbXMuZ2V0KHBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxsQXBpID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2dldFBhcmFtKCdldm9sdXRpb24nKX1gKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gT2JqZWN0LnZhbHVlcyhkYXRhLnNwcml0ZXMpO1xyXG4gICAgICAgICAgICBsZXQgdXJsQXJyYXkgPSBvYmplY3QuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsID09PSAnc3RyaW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybEFycmF5KVxyXG4gICAgICAgICAgICBzZXRVcmxzKFt1cmxBcnJheVsyXSwgdXJsQXJyYXlbM10sIHVybEFycmF5WzBdLCB1cmxBcnJheVsxXV0gYXMgc3RyaW5nW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9hZFBhZ2VUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFBhcmFtKCdldm9sdXRpb24nKTtcclxuICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKHRpdGxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoXCJFcnJvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRJbWFnZSh1cmxzOiBzdHJpbmdbXSwgY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnQgPj0gdXJscy5sZW5ndGggLSAxID8gc2V0Q29udCgwKSA6IHNldENvbnQoY29udCArIDEpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gdXJsc1tjb3VudF07XHJcbiAgICAgICAgaW1nLmFsdCA9ICdwb2tlbW9uIGltYWdlJztcclxuXHJcbiAgICAgICAgc2V0SW1hZ2VcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codXJsc1tjb3VudGVyXSlcclxuXHJcbiAgICAgICAgaW1nRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRQYWdlVGl0bGUoKTtcclxuICAgICAgICBjYWxsQXBpKClcclxuXHJcbiAgICAgICAgc2V0SW1hZ2UodXJscywgY29udClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKHVybHMpXHJcbiAgICB9LCBbY29udF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXtwYWdlVGl0bGV9PjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxFdm9sdXRpb25DYXJkIGltZz1cImFhYVwiID48L0V2b2x1dGlvbkNhcmQ+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkV2b2x1dGlvbkNhcmQiLCJIZWFkZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkV2b2x1Y2FvIiwicGFyYW1zIiwicGFnZVRpdGxlIiwic2V0UGFnZVRpdGxlIiwidXJscyIsInNldFVybHMiLCJjb250Iiwic2V0Q29udCIsImltZyIsInNldEltZyIsImdldFBhcmFtIiwicGFyYW0iLCJnZXQiLCJjYWxsQXBpIiwiZmV0Y2hSZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib2JqZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwic3ByaXRlcyIsInVybEFycmF5IiwiZmlsdGVyIiwiZWwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJsb2FkUGFnZVRpdGxlIiwidGl0bGUiLCJzZXRJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYWx0IiwiY291bnRlciIsImltZ0RpdiIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/evolucoes/page.tsx\n"));

/***/ })

});