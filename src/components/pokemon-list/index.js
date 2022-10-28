import React, { useContext } from 'react';
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AppContext from '../../context';
import { usePokemon } from '../../hooks/Pokemon';
import PokemonItem from '../pokemon-item';

const PokemonList = () => {
  const { pokemons } = useContext(AppContext);
  const { addPokemon } = usePokemon();
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
      <HStack h="full" w="full" justifyContent={'space-between'} px={4} py={2}>
        <Heading>Pokemons</Heading>
        <IconButton
          colorScheme={'green'}
          aria-label="add"
          icon={<AddIcon />}
          onClick={addPokemon}
        ></IconButton>
      </HStack>
      <Flex justifyContent={'center'} gap={2} wrap='wrap'>
        {pokemons.map(pokemon => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
    </Box>
  );
};

export default PokemonList;
