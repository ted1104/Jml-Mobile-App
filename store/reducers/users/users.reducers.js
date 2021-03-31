import {UsersActionsType} from './users.type';

const initialState = {
  isLogged: false,
  dataUser: [],
};

function usersActions(state = initialState, action) {
  switch (action.type) {
    case UsersActionsType.IS_LOGGED:
      return {
        ...state,
        isLogged: action.value,
      };
    case UsersActionsType.SET_PROFILE_DATA:
      return {
        ...state,
        dataUser: action.value,
      };
    default:
      return state;
  }
}

export default usersActions;
