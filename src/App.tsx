import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootStore } from './Store'
import { GetPokemon } from './Actions/PokemonActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
  const handleSubmit = () => dispatch(GetPokemon(pokemonName))

  console.log(pokemonState);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
            {pokemonState.pokemon.abilities.map(ability => {
              return <p key={ability.ability.name}>{ability.ability.name}</p>
            })}
          </div>
        )}
  
      </header>
    </div>
  )
}

export default App
