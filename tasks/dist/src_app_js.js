/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfomc_tasks"] = self["webpackChunkfomc_tasks"] || []).push([["src_app_js"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fomcapp_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fomcapp/Loader */ \"webpack/container/remote/fomcapp/Loader\");\n/* harmony import */ var fomcapp_Loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fomcapp_Loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n/* harmony import */ var _tableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tableContainer */ \"./src/tableContainer.js\");\n\n\n\n\n // import TableActions from './tableActions';\n// const FomcHeader = React.lazy(() => import('fomcapp/Header'));\n// const FomcSidebar = React.lazy(() => import('fomcapp/Sidebar'));\n// const Table = React.lazy(() => import('tasks/Table'));\n// import FomcSidebar from 'fomcapp/Sidebar';\n// import CustomersTable from 'customers/Table'\n\nvar App = function App(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _store_store__WEBPACK_IMPORTED_MODULE_3__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((fomcapp_Loader__WEBPACK_IMPORTED_MODULE_2___default()), null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableContainer__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://fomc-tasks/./src/app.js?");

/***/ }),

/***/ "./src/store/rootReducer.js":
/*!**********************************!*\
  !*** ./src/store/rootReducer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_tasksSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/tasksSlice */ \"./src/store/slices/tasksSlice.js\");\n\n\nvar rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  tasks: _slices_tasksSlice__WEBPACK_IMPORTED_MODULE_1__.default\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://fomc-tasks/./src/store/rootReducer.js?");

/***/ }),

/***/ "./src/store/slices/tasksSlice.js":
/*!****************************************!*\
  !*** ./src/store/slices/tasksSlice.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"set\": () => /* binding */ set,\n/* harmony export */   \"clear\": () => /* binding */ clear,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'tasks',\n  // in case cart was saved items, will be here:\n  initialState: {\n    list: [],\n    userId: null\n  },\n  // reducers actions\n  reducers: {\n    // get tasks action\n    set: {\n      reducer: function reducer(state, action) {\n        var userId = action.payload.userId;\n        console.log(action);\n        console.log('setting tasks, with userId: ', userId);\n        return _objectSpread(_objectSpread({}, state), {}, {\n          list: [{\n            name: 'task1',\n            val: 1,\n            id: '000000'\n          }, {\n            name: 'task2',\n            val: 2,\n            id: '000001'\n          }],\n          userId: userId || null\n        });\n      }\n    },\n    clear: function clear(state) {\n      console.log('clearing tasks');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        list: []\n      });\n    }\n  }\n});\nvar actions = tasksSlice.actions,\n    reducer = tasksSlice.reducer;\nvar set = actions.set,\n    clear = actions.clear;\n\nconsole.log('from tasks slice - set: ', set);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n//# sourceURL=webpack://fomc-tasks/./src/store/slices/tasksSlice.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.js\");\n\n\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__.default\n});\n\nif (true) {\n  module.hot.accept(/*! ./rootReducer */ \"./src/store/rootReducer.js\", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.js\");\n(function () {\n    var newRootReducer = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.js\").default;\n\n    store.replaceReducer(newRootReducer);\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://fomc-tasks/./src/store/store.js?");

/***/ }),

/***/ "./src/tableContainer.js":
/*!*******************************!*\
  !*** ./src/tableContainer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n // import { set, clear } from './store/slices/tasksSlice';\n\nvar Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_tasks_Table\").then(__webpack_require__.t.bind(__webpack_require__, /*! tasks/Table */ \"webpack/container/remote/tasks/Table\", 23));\n});\nvar TableActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_tasks_TableActions\").then(__webpack_require__.t.bind(__webpack_require__, /*! tasks/TableActions */ \"webpack/container/remote/tasks/TableActions\", 23));\n});\n\nvar TableContainer = function TableContainer(_ref) {\n  var tasks = _ref.tasks;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableActions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table, {\n    tasks: tasks\n  }));\n};\n\nvar stateToProps = function stateToProps(state) {\n  return {\n    tasks: state.tasks.list,\n    userId: state.tasks.userI\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(stateToProps)(TableContainer));\n\n//# sourceURL=webpack://fomc-tasks/./src/tableContainer.js?");

/***/ })

}]);