import React from 'react';
import ProgressStep from './ProgressStep';
import './ProgressBar.scss';

const ProgressBar = props => {
  const { step } = props;

  const progressbarTemplate = [
    { id: 1, label: 'Contact Details' },
    { id: 2, label: 'Investment plans' },
    { id: 3, label: 'Investment preferences' },
  ].map(progressElement => (
    <ProgressStep
      isActive={progressElement.id <= step}
      label={progressElement.label}
      progressLevel={progressElement.id}
    />
  ));

  return <div className='progressbar'>{progressbarTemplate}</div>;
};

export default ProgressBar;
