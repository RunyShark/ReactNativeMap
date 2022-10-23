import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../index';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{title: 'HomeScreen'}}
      />
    </Stack.Navigator>
  );
};
