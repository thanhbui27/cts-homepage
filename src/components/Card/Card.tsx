import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
  label?: string;
  icon?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ label, icon, description }) => {
  return (
    <CardContainer>
      <div className='card'>
        <h5 className='label'>{label}</h5>
        <div>
          <img className='icon-background' src={icon} alt='Icon_background' />
          <div className='line' />
          <p className='description'>{description}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
