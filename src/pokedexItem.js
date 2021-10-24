
import React, { Component,useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Pokedex from './pokedex';





const GET_POKEMON_INFO = gql`
query que($name: String!){
	getPokemon(pokemon: $name reverseFlavorTexts: true takeFlavorTexts: 1) {
		num
		species
		types
		abilities { first second hidden }
		baseStats { hp attack defense specialattack specialdefense speed }
		gender { male female }
		height
		weight
		flavorTexts { game flavor }
		evYields { hp attack defense specialattack specialdefense speed }
		isEggObtainable
		minimumHatchTime
		maximumHatchTime
		levellingRate
		sprite
		shinySprite
		backSprite
		shinyBackSprite
		smogonTier
		smogonPage
		serebiiPage
		bulbapediaPage
	}
}`;


function PokedexItem ({species}){
    const { loading, error, data } = useQuery(GET_POKEMON_INFO, {
        variables: { species },
      });


    if (loading) return null;
    if (error) return `Error! ${error}`;  
    
    return(data.getPokemon.species)
}



function results(){
    const results = Pokedex().map(pokemon=>(<div>{PokedexItem(pokemon)}</div>))

}
export default PokedexItem