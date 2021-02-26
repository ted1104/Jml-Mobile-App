const initialState = {
  isLogged: false,
};

function usersActions(state = initialState, action) {
  switch (action.type) {
    case 'IS_LOGGED':
      return {
        ...state,
        isLogged: action.value,
      };
    default:
      return state;
  }
}

export default usersActions;
