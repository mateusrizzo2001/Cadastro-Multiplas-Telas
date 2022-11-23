import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Navegacao from './Componentes/Navegacao';
import ContextoCadastro from './Componentes/ContextoCadastro';

export default function App() {
  return (
    <NavigationContainer>
      <ContextoCadastro>
        <Navegacao />
      </ContextoCadastro>
    </NavigationContainer>
  );
}