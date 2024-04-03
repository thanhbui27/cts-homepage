import React, { useState, ChangeEvent, memo, useCallback } from 'react';
import { Container } from './style';

export interface InputProps {
  id?: string;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  inputClassName?: string;
  placeholder?: string;
  message?: string;
  isError?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  inputClassName,
  placeholder,
  isError,
  isRequired,
  isDisabled,
  message,
}: InputProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <label className='label-wrap'>
        <span className='main-label'>{label}</span>
      </label>
      <div className='input-wrapper'>
        <input
          id={id}
          type={type}
          disabled={isDisabled}
          className={inputClassName}
          value={value}
          required={isRequired}
          onChange={handleChange}
        />
        {isRequired ? (
          <div className='required_placeholder'>
            {placeholder}
            <span>*</span>
          </div>
        ) : (
          <div
            className={`unrequired_placeholder ${!!value ? 'hide' : 'show'}`}
          >
            {placeholder}
          </div>
        )}
      </div>
      {isError && <p className='err-message'>{message}</p>}
    </Container>
  );
};

Input.defaultProps = {
  label: '',
  type: 'text',
  inputClassName: '',
  isDisabled: false,
};

export default memo(Input);
