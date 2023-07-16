import { useState, useCallback } from "react";
import isEmail from 'validator/es/lib/isEmail';

export function useValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    if (name === 'email') {
      if (value === '') {
        target.setCustomValidity('Поле обязательно к заполнению');
      } else if (!isEmail(value)) {
        target.setCustomValidity('Некорректый адрес почты');
      } else {
        target.setCustomValidity('');
      }
    }

    const regexName = /^[a-zа-яё\-\s]+$/gi;

    if (name === 'name')  {
      if ( value === '') {
        target.setCustomValidity('Поле обязательно к заполнению');
      } else if (!regexName.test(value)) {
        target.setCustomValidity('Некорректый формат имени');
      } else {
        target.setCustomValidity('');
      }
    };

    if (name === 'password') {
      if ( value === '') {
        target.setCustomValidity('Поле обязательно к заполнению');
      } else {
        target.setCustomValidity('');
      }
    };

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}