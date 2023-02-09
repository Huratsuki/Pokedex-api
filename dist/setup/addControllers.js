"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pokemonController = _interopRequireDefault(require("../controllers/pokemonController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = app => {
  (0, _pokemonController.default)(app);
};
exports.default = _default;