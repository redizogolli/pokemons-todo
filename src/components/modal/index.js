import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { usePokemon } from '../../hooks/Pokemon';

const Popup = ({ isOpen, pokemon, onClose }) => {
  const { editPokemon } = usePokemon();
  const [name, setName] = React.useState(pokemon.name);
  const [type, setType] = React.useState(pokemon.type);

  const handleSave = () => {
    // onSave(data);
    editPokemon(pokemon.id, name, type);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{'Edit Pokemon'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl isInvalid={name === ''}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {name === '' && (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={type === ''}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={type}
                onChange={e => setType(e.target.value)}
              />
              {type === '' && (
                <FormErrorMessage>Type is required.</FormErrorMessage>
              )}
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button
            colorScheme="green"
            onClick={handleSave}
            disabled={type === '' || name === ''}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Popup;
