const initialState = {
  isLogged: false,
  dataUser: null,
};

function usersActions(state = initialState, action) {
  switch (action.type) {
    case 'IS_LOGGED':
      return {
        ...state,
        isLogged: action.value,
      };
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        dataUser: action.value,
      };
    default:
      return state;
  }
}

export default usersActions;
