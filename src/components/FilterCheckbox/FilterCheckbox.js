import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <label className='checkbox__container'>
        <input type='checkbox' className='checkbox__filter'/>
        <span className='checkbox__slider'>
          <span className='checkbox__toggler'></span>
        </span>
      </label>
      <p className='checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;