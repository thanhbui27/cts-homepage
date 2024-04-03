import { useState, memo, ChangeEvent, useCallback } from 'react';
import { Container } from './style';

export interface TextAreaProps {
  label?: string;
  textAreaClassName?: string;
  placeholder?: string;
  isError?: boolean;
  message?: string;
  isDisabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  textAreaClassName,
  placeholder,
  isError,
  message,
  isDisabled,
}: TextAreaProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <label className='label-wrap'>
        <span className='main-label'>{label}</span>
      </label>
      <textarea
        id={label}
        disabled={isDisabled}
        className={textAreaClassName}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {isError && <p className='err-message'>{message}</p>}
    </Container>
  );
};

TextArea.defaultProps = {
  label: '',
  textAreaClassName: '',
  message: '',
  isDisabled: false,
};

export default memo(TextArea);
