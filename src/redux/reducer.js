import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
