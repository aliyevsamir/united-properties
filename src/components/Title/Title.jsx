import React from 'react';
import './Title.scss';

const Title = props => {
  const { title, description } = props;
  return (
    <div className='title'>
      <h1 className='title__header'>{title}</h1>
      <p className='title__description'>{description}</p>
    </div>
  );
};

export default Title;
