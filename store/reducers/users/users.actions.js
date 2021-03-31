import {UsersActionsType} from './users.type';

export const isLogged = (islog) => ({
  type: UsersActionsType.IS_LOGGED,
  value: islog,
});

export const setProfileUser = (data) => ({
  type: UsersActionsType.SET_PROFILE_DATA,
  value: data,
});
