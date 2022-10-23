import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator, PermissionsProvider} from '../src/index';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
