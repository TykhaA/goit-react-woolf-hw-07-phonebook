import style from './filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFiter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <div className={style.wrap_field}>
      <label htmlFor="filter" className={style.title}>
        Find contacts by name
      </label>
      <input
        className={style.field}
        type="text"
        name="filter"
        onChange={handleFiter}
      ></input>
    </div>
  );
};
export default Filter;
