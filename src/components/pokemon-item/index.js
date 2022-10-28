import React from 'react';
import {
  Box,
  HStack,
  Image,
  Text,
  useColorModeValue,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { usePokemon } from '../../hooks/Pokemon';


const PokemonItem = ({ pokemon,editClicked }) => {
  const {removePokemon} = usePokemon();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" minW="200px">
      <Image
        w="full"
        src={pokemon.image}
        alt={`${pokemon.name}_image`}
        objectFit="cover"
      />
      <HStack  bgColor={bgColor} spacing={0}>
        <Box h="full" w="full" textAlign={'center'}>
          <Text>{pokemon.name}</Text>
          <Text>Type: {pokemon.type}</Text>
        </Box>
        <VStack>
          <IconButton
            colorScheme="yellow"
            aria-label="Edit"
            icon={<EditIcon />}
            onClick={() => editClicked(pokemon)}
          />
          <IconButton
            colorScheme="red"
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={() => removePokemon(pokemon.id)}
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default PokemonItem;
