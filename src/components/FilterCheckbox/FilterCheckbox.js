import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox(props) {

  const location = useLocation();
  
  const handleFilterCheckbox = (evt) => {
    props.onCheckbox(evt.target.checked);
  } ;

  return (
    <div className='checkbox'>
      <label className='checkbox__container' >
      {location.pathname === '/movies' ? (
        <>
          <input
            type='checkbox'
            id='checkbox-movies'
            className='checkbox__filter'            
            name='checkbox-movies'
            defaultValue='yes'
            onChange={handleFilterCheckbox}
            checked={props.checked}            
          />
          <span className='checkbox__slider'>
            <span className='checkbox__toggler'></span>
          </span>
        </>  
      ) : (
        <>
          <input
            type='checkbox'
            id='checkbox-saved-movies'
            className='checkbox__filter'            
            name='checkbox-saved-movies'
            defaultValue='yes'
            onChange={handleFilterCheckbox }
            checked={props.checkedSavedMovies}            
          />
          <span className='checkbox__slider'>
            <span className='checkbox__toggler'></span>
          </span>
        </>
      )}    
    </label>
    <p className='checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;