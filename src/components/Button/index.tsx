import React, { ReactNode } from 'react';
import { ButtonContent } from './style';

interface ButtonPropsCustom {
  type?: 'secondary' | 'primary' | 'link';
  isDisable?: boolean;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

const ButtonBase: React.FC<ButtonPropsCustom> = (props) => {
  const { isDisable, type = 'primary', children, href, onClick } = props;

  const handleClick = () => {
    if (onClick && !isDisable) {
      onClick();
    }
  };

  return (
    <ButtonContent
      type={type}
      isDisable={isDisable}
      onClick={handleClick}
      href={href}
    >
      {children}
    </ButtonContent>
  );
};

export default ButtonBase;
