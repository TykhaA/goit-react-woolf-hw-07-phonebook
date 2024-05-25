import style from './listContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/slice';
import {
  getContacts,
  getLoading,
  getError,
} from '../../redux/contacts/selecor';
import { useEffect } from 'react';

const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter.filter);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterByName = value => {
    return contacts.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  };

  const hendleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContact = filterByName(filter);
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      <ul>
        {contacts &&
          filterContact.map(elem => {
            return (
              <li className={style.list} key={elem.id}>
                <span>{elem.name}:</span>
                <span className={style.number}>{elem.phone}</span>
                <button
                  className={style.btn}
                  onClick={() => hendleDelete(elem.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default ListContacts;
