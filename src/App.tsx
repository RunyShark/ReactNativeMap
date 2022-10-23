import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Navigator} from './navigator/Navigator';

// const AppState = ({children}: any) => {
//   return <PermissionsProvider>{children}</PermissionsProvider>;
// };

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
      {/* <AppState>
        <Navigator />
      </AppState> */}
    </NavigationContainer>
  );
};
