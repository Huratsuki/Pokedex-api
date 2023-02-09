"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletarPokemon = deletarPokemon;
exports.editarPokemon = editarPokemon;
exports.listarPokemons = listarPokemons;
exports.listarTipos = listarTipos;
exports.salvarPokemon = salvarPokemon;
var _pokemon = _interopRequireDefault(require("../model/pokemon.model"));
var _tipo = _interopRequireDefault(require("../model/tipo.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function listarTipos() {
  var tipos = await _tipo.default.find().lean();
  var tiposResult = tipos.map(function (tipo) {
    return tipo.nome;
  });
  return tiposResult;
}
async function listarPokemons() {
  var pokemons = await _pokemon.default.find().lean();
  return pokemons;
}
async function salvarPokemon(pokemon) {
  var createdPokemon = new _pokemon.default(pokemon);
  await createdPokemon.save();
  return "Salvou com sucesso";
}
async function deletarPokemon(id) {
  await _pokemon.default.findByIdAndDelete(id);
  return "Pokemon deletado com sucesso";
}
async function editarPokemon(id, pokemon) {
  await _pokemon.default.findByIdAndUpdate(id, pokemon);
  return "Pokemon atualizado com sucesso";
}