/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfomc_customers"] = self["webpackChunkfomc_customers"] || []).push([["src_bootstrap_js"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fomcapp_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fomcapp/Loader */ \"webpack/container/remote/fomcapp/Loader\");\n/* harmony import */ var fomcapp_Loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fomcapp_Loader__WEBPACK_IMPORTED_MODULE_1__);\n// noprotect\n\n // const FomcHeader = React.lazy(() => import('fomcapp/Header'));\n// const FomcSidebar = React.lazy(() => import('fomcapp/Sidebar'));\n\nvar Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_customers_Table\").then(__webpack_require__.t.bind(__webpack_require__, /*! customers/Table */ \"webpack/container/remote/customers/Table\", 23));\n}); // import FomcSidebar from 'fomcapp/Sidebar';\n// import CustomersTable from 'customers/Table'\n\nvar App = function App(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((fomcapp_Loader__WEBPACK_IMPORTED_MODULE_1___default()), null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title, \" test\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://fomc-customers/./src/app.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\nvar title = 'FOMC FEDERATED MFE - CUSTOMERS';\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app__WEBPACK_IMPORTED_MODULE_2__.default, {\n  title: title\n}), document.getElementById('app'));\nmodule.hot.accept();\n\n//# sourceURL=webpack://fomc-customers/./src/bootstrap.js?");

/***/ })

}]);