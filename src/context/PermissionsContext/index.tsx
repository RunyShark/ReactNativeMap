/* eslint-disable curly */
/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  PermissionStatus,
} from 'react-native-permissions';
export interface PermissionsContextState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsContextState = {
  locationStatus: 'unavailable',
};

type PermissionContextProps = {
  permissions: PermissionsContextState;
  askLocationsPermission: () => void;
  checkLocationsPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionContextProps);

export const PermissionsProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [permissions, setPermissions] = useState(permissionsInitState);
  const {ANDROID} = PERMISSIONS;
  const {addEventListener} = AppState;

  useEffect(() => {
    addEventListener('change', state => {
      if (state !== state) return;
      checkLocationsPermission();
    });
  }, []);

  let permissionStatus: PermissionStatus;

  const askLocationsPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        permissionStatus = await request(ANDROID.ACCESS_FINE_LOCATION);
      }
    } catch (error) {
      console.log(error);
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  const checkLocationsPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        permissionStatus = await check(ANDROID.ACCESS_FINE_LOCATION);
      }
    } catch (error) {
      console.log(error);
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationsPermission,
        checkLocationsPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
