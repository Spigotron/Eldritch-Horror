"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/games";
exports.ids = ["pages/api/games"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mssql");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgames&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgames.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgames&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgames.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_games_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\games.js */ \"(api)/./pages/api/games.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_games_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_games_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/games\",\n        pathname: \"/api/games\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_games_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmdhbWVzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNnYW1lcy5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNtRDtBQUNuRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsZ0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGdEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGdhbWVzLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nYW1lc1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dhbWVzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgames&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgames.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/games.js":
/*!****************************!*\
  !*** ./pages/api/games.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n// Config to connect to Azure SQL Database using credentials in .env file\nconst config = {\n    server: process.env.DB_SERVER,\n    database: process.env.DB_NAME,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    options: {\n        encrypt: true\n    }\n};\n// Default export function to handle requests\nasync function handler(req, res) {\n    try {\n        console.log(\"Connecting to database...\");\n        // Connect to the database\n        await sql.connect(config);\n        console.log(\"Connected to database.\");\n        // Run a query\n        const result = await sql.query`SELECT * FROM Games`;\n        console.log(\"Query executed, data fetched:\", result.recordset);\n        // Send the data back as JSON\n        res.status(200).json(result.recordset);\n    } catch (err) {\n        console.error(\"Database query failed:\", err);\n        res.status(500).json({\n            error: 'Database query failed'\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2FtZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU1DLG1CQUFPQSxDQUFDLG9CQUFPO0FBQzNCQSxvREFBd0I7QUFFeEIseUVBQXlFO0FBQ3pFLE1BQU1DLFNBQVM7SUFDYkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQzdCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87SUFDN0JDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztJQUN6QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO0lBQ2pDQyxTQUFTO1FBQ1BDLFNBQVM7SUFDWDtBQUNGO0FBRUEsNkNBQTZDO0FBQzlCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLDBCQUEwQjtRQUMxQixNQUFNbkIsSUFBSW9CLE9BQU8sQ0FBQ2xCO1FBQ2xCZ0IsUUFBUUMsR0FBRyxDQUFDO1FBRVosY0FBYztRQUNkLE1BQU1FLFNBQVMsTUFBTXJCLElBQUlzQixLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDbkRKLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNFLE9BQU9FLFNBQVM7UUFFN0QsNkJBQTZCO1FBQzdCTixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSixPQUFPRSxTQUFTO0lBQ3ZDLEVBQUUsT0FBT0csS0FBSztRQUNaUixRQUFRUyxLQUFLLENBQUMsMEJBQTBCRDtRQUN4Q1QsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQXdCO0lBQ3hEO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRC1Db3BlXFxEZXNrdG9wXFxFSF9Qcm9qZWN0XFxwYWdlc1xcYXBpXFxnYW1lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcclxuXHJcbi8vIENvbmZpZyB0byBjb25uZWN0IHRvIEF6dXJlIFNRTCBEYXRhYmFzZSB1c2luZyBjcmVkZW50aWFscyBpbiAuZW52IGZpbGVcclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHNlcnZlcjogcHJvY2Vzcy5lbnYuREJfU0VSVkVSLFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIGVuY3J5cHQ6IHRydWUsIC8vIEF6dXJlIHJlcXVpcmVzIGVuY3J5cHRpb25cclxuICB9LFxyXG59O1xyXG5cclxuLy8gRGVmYXVsdCBleHBvcnQgZnVuY3Rpb24gdG8gaGFuZGxlIHJlcXVlc3RzXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0aW5nIHRvIGRhdGFiYXNlLi4uXCIpO1xyXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgIGF3YWl0IHNxbC5jb25uZWN0KGNvbmZpZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBkYXRhYmFzZS5cIik7XHJcblxyXG4gICAgLy8gUnVuIGEgcXVlcnlcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNxbC5xdWVyeWBTRUxFQ1QgKiBGUk9NIEdhbWVzYDtcclxuICAgIGNvbnNvbGUubG9nKFwiUXVlcnkgZXhlY3V0ZWQsIGRhdGEgZmV0Y2hlZDpcIiwgcmVzdWx0LnJlY29yZHNldCk7XHJcblxyXG4gICAgLy8gU2VuZCB0aGUgZGF0YSBiYWNrIGFzIEpTT05cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIHF1ZXJ5IGZhaWxlZDpcIiwgZXJyKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdEYXRhYmFzZSBxdWVyeSBmYWlsZWQnIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJzcWwiLCJyZXF1aXJlIiwiY29uZmlnIiwic2VydmVyIiwicHJvY2VzcyIsImVudiIsIkRCX1NFUlZFUiIsImRhdGFiYXNlIiwiREJfTkFNRSIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsIm9wdGlvbnMiLCJlbmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicmVzdWx0IiwicXVlcnkiLCJyZWNvcmRzZXQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/games.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgames&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgames.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();