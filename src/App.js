import React from 'react';
import { ChakraProvider, Grid, GridItem, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { PokemonList } from './components';
import { AppProvider } from './context';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Grid w="full" h="full" templateRows={'auto 1fr'}>
          <GridItem rowStart={1} display="flex" justifyContent={'end'}>
            <ColorModeSwitcher />
          </GridItem>
          <GridItem rowStart={2} display="flex" justifyContent={'center'}>
            <PokemonList />
          </GridItem>
        </Grid>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
