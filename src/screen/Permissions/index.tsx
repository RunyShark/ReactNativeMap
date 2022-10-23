/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Button, Platform, Text, View} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  PermissionStatus,
} from 'react-native-permissions';

import {styles} from './style';

export const PermissionsScreen = () => {
  const {ANDROID} = PERMISSIONS;

  let permissionStatus: PermissionStatus;

  const checkLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        permissionStatus = await request(ANDROID.ACCESS_FINE_LOCATION);
      }
    } catch (error) {
      console.log(error);
    }
    console.log({permissionStatus});
  };

  return (
    <View style={styles.container}>
      <Text>Hello word</Text>
      <Button title="Permission" onPress={checkLocationPermission} />
    </View>
  );
};
