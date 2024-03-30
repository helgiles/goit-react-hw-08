import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/slice';
import { selectNameFilter } from '../../redux/filter/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchbox}>
      <p>Find contact by my name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}
