import {createStore} from 'redux';
import UsersReducer from './reducers/users/users.reducers';

export default createStore(UsersReducer);
