import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoadingScreen} from '../pages/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}></Stack.Navigator>
  );
};
