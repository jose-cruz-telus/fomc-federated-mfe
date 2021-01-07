/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfomc_tasks"] = self["webpackChunkfomc_tasks"] || []).push([["src_store_slices_tasksSlice_js"],{

/***/ "./src/store/slices/tasksSlice.js":
/*!****************************************!*\
  !*** ./src/store/slices/tasksSlice.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"set\": () => /* binding */ set,\n/* harmony export */   \"clear\": () => /* binding */ clear,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nvar tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'tasks',\n  // in case cart was saved items, will be here:\n  initialState: [],\n  // reducers actions\n  reducers: {\n    // get tasks action\n    set: function set() {\n      console.log('setting tasks');\n      return [{\n        name: 'task1',\n        val: 1,\n        id: '000000'\n      }, {\n        name: 'task2',\n        val: 2,\n        id: '000001'\n      }];\n    },\n    clear: function clear() {\n      return [];\n    }\n  }\n});\nvar actions = tasksSlice.actions,\n    reducer = tasksSlice.reducer;\nvar set = actions.set,\n    clear = actions.clear;\n\nconsole.log('from tasks slice - set: ', set);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n//# sourceURL=webpack://fomc-tasks/./src/store/slices/tasksSlice.js?");

/***/ })

}]);