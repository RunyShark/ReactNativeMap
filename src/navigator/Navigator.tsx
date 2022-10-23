import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapScreen, PermissionsScreen} from '../index';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name={'PermissionsScreen'}
        component={PermissionsScreen}
        options={{title: 'PermissionsScreen'}}
      />
      <Stack.Screen
        name={'MapScreen'}
        component={MapScreen}
        options={{title: 'MapScreen'}}
      />
    </Stack.Navigator>
  );
};
