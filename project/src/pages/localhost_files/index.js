/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2FHP230019%2FDesktop%2Freact%20js%2Ftodo-list%2Fsrc%2Fpages%2Findex.js&page=%2F!":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2FHP230019%2FDesktop%2Freact%20js%2Ftodo-list%2Fsrc%2Fpages%2Findex.js&page=%2F! ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.js */ \"./src/pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRkhQMjMwMDE5JTJGRGVza3RvcCUyRnJlYWN0JTIwanMlMkZ0b2RvLWxpc3QlMkZzcmMlMkZwYWdlcyUyRmluZGV4LmpzJnBhZ2U9JTJGISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGtEQUFzQjtBQUM3QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZTIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2FHP230019%2FDesktop%2Freact%20js%2Ftodo-list%2Fsrc%2Fpages%2Findex.js&page=%2F!\n"));

/***/ }),

/***/ "./src/components/Imports.jsx":
/*!************************************!*\
  !*** ./src/components/Imports.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Text: function() { return /* binding */ Text; },\n/* harmony export */   Title: function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nlet done_point = 0;\nlet task_num = 0;\nfunction Text() {\n    _s();\n    const [utga, setUtga] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isDone, setIt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [taskNum, setTaskNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [del, setDel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function idk(e) {\n        if (e.key == \"Enter\") {\n            setList([\n                ...list,\n                utga\n            ]);\n            setTask(task + 1);\n        }\n    }\n    function checkActive() {\n        setTask(task + 1);\n        setList([\n            ...list,\n            utga\n        ]);\n        task_num += task;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"auto\",\n            width: \"100%\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            flexDirection: \"column\",\n            gap: \"20px\"\n        },\n        onKeyDown: idk,\n        onChange: (e)=>setUtga(e.target.value),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    gap: \"10px\",\n                    flexDirection: \"column\"\n                },\n                children: list.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontFamily: \"Poppins\",\n                            width: \"390px\",\n                            padding: \"8px\",\n                            fontSize: \"20px\",\n                            borderRadius: \"10px\",\n                            gap: \"10px\",\n                            display: del ? \"flex\" : \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    alignItems: \"center\",\n                                    justifyContent: \"center\",\n                                    display: \"flex\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        height: \"20px\",\n                                        width: \"20px\",\n                                        borderRadius: \"50%\",\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        backgroundColor: isDone ? \"white\" : \"#1A8BBB\",\n                                        border: \"1px solid rgba(183, 188, 203, 1)\"\n                                    },\n                                    onClick: ()=>setIt(!isDone)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    width: \"200px\",\n                                    fontSize: \"16px\",\n                                    textDecoration: isDone ? \"none\" : \"line-through\"\n                                },\n                                children: el\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    width: \"100%\",\n                                    justifyContent: \"flex-end\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"photo1.png\",\n                                        height: \"40px\",\n                                        width: \"40px\",\n                                        onClick: ()=>console.log(\"photo1\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"photo2.png\",\n                                        height: \"40px\",\n                                        width: \"40px\",\n                                        onClick: ()=>setDel(!del)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    width: \"392px\",\n                    height: \"45px\",\n                    borderRadius: \"40px\",\n                    border: \"1px solid #E6E6E6\",\n                    fontSize: \"20px\"\n                },\n                placeholder: \"what do u want to do?\"\n            }, void 0, false, {\n                fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    color: \"#FFF\",\n                    fontSize: \"20px\",\n                    fontStyle: \"normal\",\n                    fontWeight: \"700\",\n                    lineHeight: \"normal\",\n                    backgroundColor: \"#1A8BBB\",\n                    height: \"50px\",\n                    width: \"151px\",\n                    borderRadius: \"30px\"\n                },\n                onClick: checkActive,\n                children: \"submit\"\n            }, void 0, false, {\n                fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Text, \"bjpa4z7IYM2DpwaqTFQV7i0bVOQ=\");\n_c = Text;\nfunction Title() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"Todo List \",\n            task_num,\n            \"/\",\n            done_point\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/components/Imports.jsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Title;\nvar _c, _c1;\n$RefreshReg$(_c, \"Text\");\n$RefreshReg$(_c1, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaZCxpQkFBaUI7b0JBQ2pCbEIsUUFBUTtvQkFDUkMsT0FBTztvQkFDUGUsY0FBYztnQkFDaEI7Z0JBQ0FJLFNBQVN2QjswQkFDVjs7Ozs7Ozs7Ozs7O0FBS1A7R0FsSWdCaEI7S0FBQUE7QUFvSVQsU0FBU29EO0lBQ2QscUJBQ0UsOERBQUNDOztZQUFHO1lBQ1N0RDtZQUFTO1lBQUVEOzs7Ozs7O0FBRzVCO01BTmdCc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1wb3J0cy5qc3g/OWZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgZG9uZV9wb2ludCA9IDA7XG5sZXQgdGFza19udW0gPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gVGV4dCgpIHtcbiAgY29uc3QgW3V0Z2EsIHNldFV0Z2FdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0RvbmUsIHNldEl0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdGFza051bSwgc2V0VGFza051bV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RlbCwgc2V0RGVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBpZGsoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIHNldExpc3QoWy4uLmxpc3QsIHV0Z2FdKTtcbiAgICAgIHNldFRhc2sodGFzayArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQWN0aXZlKCkge1xuICAgIHNldFRhc2sodGFzayArIDEpO1xuICAgIHNldExpc3QoWy4uLmxpc3QsIHV0Z2FdKTtcbiAgICB0YXNrX251bSArPSB0YXNrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgZ2FwOiBcIjIwcHhcIixcbiAgICAgIH19XG4gICAgICBvbktleURvd249e2lka31cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXRnYShlLnRhcmdldC52YWx1ZSl9XG4gICAgPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiBcIjEwcHhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAge2xpc3QubWFwKChlbCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUG9wcGluc1wiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIzOTBweFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGdhcDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGRlbCA/IFwiZmxleFwiIDogXCJub25lXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0RvbmUgPyBcIndoaXRlXCIgOiBcIiMxQThCQkJcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgxODMsIDE4OCwgMjAzLCAxKVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXQoIWlzRG9uZSl9XG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBpc0RvbmUgPyBcIm5vbmVcIiA6IFwibGluZS10aHJvdWdoXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtlbH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwicGhvdG8xLnBuZ1wiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MHB4XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcInBob3RvMVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cInBob3RvMi5wbmdcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwcHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBweFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGVsKCFkZWwpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIzOTJweFwiLFxuICAgICAgICAgIGhlaWdodDogXCI0NXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFNkU2RTZcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgIH19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwid2hhdCBkbyB1IHdhbnQgdG8gZG8/XCJcbiAgICAgID48L2lucHV0PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgbGluZUhlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFBOEJCQlwiLFxuICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTUxcHhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtjaGVja0FjdGl2ZX1cbiAgICAgID5cbiAgICAgICAgc3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpdGxlKCkge1xuICByZXR1cm4gKFxuICAgIDxoMT5cbiAgICAgIFRvZG8gTGlzdCB7dGFza19udW19L3tkb25lX3BvaW50fVxuICAgIDwvaDE+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb25lX3BvaW50IiwidGFza19udW0iLCJUZXh0IiwidXRnYSIsInNldFV0Z2EiLCJsaXN0Iiwic2V0TGlzdCIsInRhc2siLCJzZXRUYXNrIiwiaXNEb25lIiwic2V0SXQiLCJ0YXNrTnVtIiwic2V0VGFza051bSIsImRlbCIsInNldERlbCIsImlkayIsImUiLCJrZXkiLCJjaGVja0FjdGl2ZSIsImRpdiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJlbCIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvbkNsaWNrIiwicCIsInRleHREZWNvcmF0aW9uIiwiaW1nIiwic3JjIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJjb2xvciIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiVGl0bGUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Imports.jsx\n"));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Imports */ \"./src/components/Imports.jsx\");\n\n\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"Body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"Header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Imports__WEBPACK_IMPORTED_MODULE_1__.Title, {}, void 0, false, {\n                        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"Bottom\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"bottoms_inner\",\n                        className: \"bottoms_inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Imports__WEBPACK_IMPORTED_MODULE_1__.Text, {}, void 0, false, {\n                            fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/HP230019/Desktop/react js/todo-list/src/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFFcEMsU0FBU0U7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0gsc0RBQUtBOzs7Ozs7Ozs7OzhCQUVSLDhEQUFDRTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlFLElBQUc7d0JBQWdCRCxXQUFVO2tDQUNoQyw0RUFBQ0oscURBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtLQWZ3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0ltcG9ydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQm9keVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiPlxuICAgICAgICAgIDxUaXRsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCb3R0b21cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tc19pbm5lclwiIGNsYXNzTmFtZT1cImJvdHRvbXNfaW5uZXJcIj5cbiAgICAgICAgICAgIDxUZXh0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGV4dCIsIlRpdGxlIiwiQXBwIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2FHP230019%2FDesktop%2Freact%20js%2Ftodo-list%2Fsrc%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);