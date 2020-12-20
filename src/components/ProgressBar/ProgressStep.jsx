import React from 'react';
import './ProgressBar.scss';

const ProgressStep = props => {
  const { isActive, progressLevel, label } = props;

  const active = isActive ? 'active' : '';
  return (
    <div className={`progressbar__level ${active}`}>
      <div>
        <div className='progressbar__level--square'></div>
        {progressLevel < 3 && (
          <>
            <span className='progressbar__level--square-step'></span>
            <span className='progressbar__level--square-step'></span>
          </>
        )}
      </div>
      <p className='progressbar__level--label'>{label}</p>
    </div>
  );
};

export default ProgressStep;
