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

const Popup = ({ id, name, type }) => {
  const [name, setName] = React.useState(name);
  const [type, setType] = React.useState(type);

  const handleSave = () => {
    onSave(data);
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl isInvalid={name === ''}>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={name} />
              {isError && (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isError}>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={type} />
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
