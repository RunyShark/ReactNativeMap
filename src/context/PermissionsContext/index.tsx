import React, {createContext, useState} from 'react';
import {PermissionStatus} from 'react-native-permissions';

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
  const askLocationsPermission = () => {};
  const checkLocationsPermission = () => {};

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
