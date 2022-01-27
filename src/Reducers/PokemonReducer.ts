import { PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "../Actions/PokemonActionTypes";

interface IPokemonState {
    loading: boolean;
    pokemon?: PokemonType 
};

const initialState = {
    loading: false
};

const pokemonReducer = (state: IPokemonState = initialState, action: PokemonDispatchTypes): IPokemonState => {
    switch (action.type) {
        case POKEMON_FAIL:
            return { loading: false }
        case POKEMON_LOADING:
            return { loading: true }
        case POKEMON_SUCCESS:
            return { loading: false, pokemon: action.payload }
        default:
            return state
    }
};

export default pokemonReducer;