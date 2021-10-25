
import React, { Component,useState } from 'react';
import { gql, useQuery } from '@apollo/client';







const GET_POKEMON_INFO = gql`
query($number: Int!) {
	getPokemonByDexNumber(number: $number reverseFlavorTexts: true takeFlavorTexts: 1) {
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


function PokedexItem (props){
    const { loading, error, data } = useQuery(GET_POKEMON_INFO,{variables: { number:props.id }}
      );
    if (loading) return null;
    if (error) return `Error! ${error}`;  
    return(<img  alt = "" src = {data.getPokemonByDexNumber.sprite} />)
}


export default PokedexItem