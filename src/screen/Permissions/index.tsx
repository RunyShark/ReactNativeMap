/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {Button, Platform, Text, View} from 'react-native';

import {PermissionsContext} from '../../index';

import {styles} from './style';

export const PermissionsScreen = () => {
  const {permissions, askLocationsPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Button title="Permission" onPress={askLocationsPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};
