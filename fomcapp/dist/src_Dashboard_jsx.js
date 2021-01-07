/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfomcapp"] = self["webpackChunkfomcapp"] || []).push([["src_Dashboard_jsx"],{

/***/ "./src/Container.jsx":
/*!***************************!*\
  !*** ./src/Container.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n // import Slice, { set, clear } from 'tasks/TasksSlice';\n\nvar TasksTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_tasks_Table\").then(__webpack_require__.t.bind(__webpack_require__, /*! tasks/Table */ \"webpack/container/remote/tasks/Table\", 23));\n});\nvar TasksActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_tasks_TableActions\").then(__webpack_require__.t.bind(__webpack_require__, /*! tasks/TableActions */ \"webpack/container/remote/tasks/TableActions\", 23));\n});\n\nvar Container = function Container(_ref) {\n  var pulledDomain = _ref.pulledDomain,\n      userId = _ref.userId,\n      tasks = _ref.tasks;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, pulledDomain === 'tasks' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TasksActions, {\n    userId: userId\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TasksTable, {\n    tasks: tasks\n  })), pulledDomain === 'orders' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    tasks: state.tasks.list\n  };\n}; // const mapDispatchToProps = { set, clear };\n// console.log('FOMC APP - Container - mapDispatchToProps: ', mapDispatchToProps);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Container)); // export default Container;\n\n//# sourceURL=webpack://fomcapp/./src/Container.jsx?");

/***/ }),

/***/ "./src/Dashboard.jsx":
/*!***************************!*\
  !*** ./src/Dashboard.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersTaskList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersTaskList.jsx */ \"./src/usersTaskList.jsx\");\n\n\n\nvar Dashboard = function Dashboard(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"I am the dashboard\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_usersTaskList_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n\n//# sourceURL=webpack://fomcapp/./src/Dashboard.jsx?");

/***/ }),

/***/ "./src/usersTaskList.jsx":
/*!*******************************!*\
  !*** ./src/usersTaskList.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Container_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.jsx */ \"./src/Container.jsx\");\n/* harmony import */ var tasks_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tasks/Store */ \"webpack/container/remote/tasks/Store\");\n/* harmony import */ var tasks_Store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tasks_Store__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // const TasksStore = React.lazy(() => import('tasks/Store'));\n\nvar TasksTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_tasks_Table\").then(__webpack_require__.t.bind(__webpack_require__, /*! tasks/Table */ \"webpack/container/remote/tasks/Table\", 23));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  console.log(\"TasksStore: \", (tasks_Store__WEBPACK_IMPORTED_MODULE_3___default())); // debugger;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: (tasks_Store__WEBPACK_IMPORTED_MODULE_3___default())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Container_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n    pulledDomain: \"tasks\",\n    userId: \"012345\"\n  }));\n});\n\n//# sourceURL=webpack://fomcapp/./src/usersTaskList.jsx?");

/***/ })

}]);