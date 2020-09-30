import { createStore, combineReducers } from 'redux';
import contactReducer from './contacts/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
