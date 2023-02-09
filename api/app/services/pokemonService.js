import PokemonModel from "../model/pokemon.model";
import TipoModel from "../model/tipo.model";

export class PokemonService {
    async listarTipos() {
        var tipos = await TipoModel.find().lean();
        var tiposResult = tipos.map(function (tipo) {
            return tipo.nome;
        })
        return tiposResult;
    }

    async listar() {
        var pokemons = await PokemonModel.find().lean();
        return pokemons;
    }

    async salvar(pokemon) {
        var createdPokemon = new PokemonModel(pokemon);
        await createdPokemon.save();
        return "Salvou com sucesso";
    }

    async deletar(id) {
        await PokemonModel.findByIdAndDelete(id);
        return "Pokemon deletado com sucesso";
    }

    async editar(id, pokemon) {
        await PokemonModel.findByIdAndUpdate(id, pokemon);
        return "Pokemon atualizado com sucesso";
    }

    async buscar(id) {
        var pokemon = await PokemonModel.findById(id).lean();
        return pokemon;
    }
}

