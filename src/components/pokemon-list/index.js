import React, { useContext, useState } from 'react';
import { Box, HStack, Heading, IconButton, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AppContext from '../../context';
import { usePokemon } from '../../hooks/Pokemon';
import PokemonItem from '../pokemon-item';
import Popup from '../modal';

const PokemonList = () => {
  const { pokemons } = useContext(AppContext);
  const { addPokemon } = usePokemon();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const editClicked = pokemon => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gap={4}
      h="full"
      w="full"
    >
      {isOpen && (
        <Popup
          pokemon={selectedPokemon}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <HStack h="full" w="full" justifyContent={'space-between'} px={4} py={2}>
        <Heading>Pokemons</Heading>
        <IconButton
          colorScheme={'green'}
          aria-label="add"
          icon={<AddIcon />}
          onClick={addPokemon}
        ></IconButton>
      </HStack>
      <Flex justifyContent={'center'} gap={2} wrap="wrap">
        {pokemons.map(pokemon => (
          <PokemonItem
            key={pokemon.id}
            pokemon={pokemon}
            editClicked={editClicked}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PokemonList;
