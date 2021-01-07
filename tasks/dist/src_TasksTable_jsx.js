/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfomc_tasks"] = self["webpackChunkfomc_tasks"] || []).push([["src_TasksTable_jsx"],{

/***/ "./src/TasksTable.jsx":
/*!****************************!*\
  !*** ./src/TasksTable.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import { connect } from 'react-redux'\n// const { set, clear } = React.lazy(() => import('tasks/TasksSlice'));\n// import { set, clear } from 'tasks/TasksSlice';\n// import { set, clear } from 'tasks/TasksSlice';\n\nvar TasksTable = function TasksTable(_ref) {\n  var tasks = _ref.tasks;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, tasks && Array.isArray(tasks) && tasks.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, tasks.map(function (_ref2) {\n    var name = _ref2.name,\n        val = _ref2.val;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"task-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, name, \"     -     \", val), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null));\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"I am the tasks table\"));\n}; // const mapStateToProps = state => ({\n//   tasks: state.tasks,\n// })\n// const mapDispatchToProps = { set, clear };\n// export default connect(\n//   mapStateToProps,\n//   mapDispatchToProps\n// )(TasksTable)\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksTable);\n\n//# sourceURL=webpack://fomc-tasks/./src/TasksTable.jsx?");

/***/ })

}]);