"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;
exports.disconnect = disconnect;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function connect() {
  _mongoose.default.set("strictQuery", false);
  console.log('Conectando no MongoDB');
  return _mongoose.default.connect('mongodb://localhost:27017/pokedex-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
async function disconnect() {
  console.log('Desconectando do MongoDB');
  return _mongoose.default.disconnect();
}