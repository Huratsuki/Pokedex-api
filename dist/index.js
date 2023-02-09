"use strict";

var _express = _interopRequireDefault(require("express"));
var _addControllers = _interopRequireDefault(require("./setup/addControllers"));
var _addMiddlewares = _interopRequireDefault(require("./setup/addMiddlewares"));
var _connectionService = require("./services/connectionService");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
try {
  (0, _connectionService.connect)().then(function () {
    const app = (0, _express.default)();
    (0, _addMiddlewares.default)(app); // DEVE SER ADICIONANDO ANTES DOS CONTROLLERS
    (0, _addControllers.default)(app);
    app.listen(3000, () => {
      console.log("A API ESTÁ RODANDO NA PORTA 3000");
    });
  });
} catch (error) {
  (0, _connectionService.disconnect)();
}