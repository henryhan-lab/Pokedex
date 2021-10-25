
import React, { Component,useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import GifPlayer from 'react-gif-player'
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';


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
    return(
	<div align ="center">
	    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-end	',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
		width:350,
		margin:10
      }}
    >

	  <Box sx={{

		  width:400,
		  alignSelf:'center',
		  m:'10',
	  }}>

      <Box
        component="img"
		
        sx={{
			m:'10',
			alignSelf: 'center'
        }}
        alt="The house from the offer."
        src={data.getPokemonByDexNumber.sprite}
      />
		</Box>



		<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start		' },
          m: 3,
		  alignSelf:'flex-start'
		  
          
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
		{data.getPokemonByDexNumber.species}
        </Box>

        <Box component="inline" sx={{ alignContent: "flex-start", color: 'primary.main', fontSize: 12 }}>
		{data.getPokemonByDexNumber.flavorTexts[0].flavor}
        </Box>

		<Box component="span" sx={{ alignSelf: "flex-start	 ", color: 'primary.main', fontSize: 12 }}>
		Attack: {data.getPokemonByDexNumber.baseStats.attack}
        </Box>

		<Box component="span" sx={{ color: 'primary.main', fontSize: 12 }}>
		Defense: {data.getPokemonByDexNumber.baseStats.defense}
        </Box>

		<Box component="span" sx={{ color: 'primary.main', fontSize: 12 }}>
		Special Attack: {data.getPokemonByDexNumber.baseStats.specialattack}
        </Box>

		<Box component="span" sx={{ color: 'primary.main', fontSize: 12 }}>
		Special Defense: {data.getPokemonByDexNumber.baseStats.specialdefense}
        </Box>



		</Box>
	

	
	</Box>

	</div>
	)
}


const Pokedex = (props) => {





    var rows = [];
    for (var i = 1; i < 10; i++) {
        rows.push(<PokedexItem id = {i} />);
    }
    return(
        <React.Fragment>
<div>

   {rows}
</div>

</React.Fragment>

//<div>{lowerCasedNames.map(pokemon=><div>{PokedexItem({pokemon})}</div>)}</div>

    )

}

export default Pokedex



