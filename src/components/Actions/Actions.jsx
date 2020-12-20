import React from 'react';
import { ReactComponent as LeftArrow } from '../../assets/svgs/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/svgs/right_arrow.svg';
import './Actions.scss';

const Actions = props => {
  const {
    step,
    handleNextButtonClick,
    handlePreviosButtonClick,
    handleSkipButtonClick,
  } = props;
  const backToWhere = step > 1 ? 'previous step' : 'homepage';

  return (
    <div className='actions'>
      <a
        className='actions__backTo'
        onClick={handlePreviosButtonClick}
      >
        <LeftArrow /> Back to the {backToWhere}
      </a>
      <div className='actions__buttons'>
        <button
          className='actions__buttons--skip'
          onClick={handleSkipButtonClick}
        >
          Skip for now
        </button>
        <button
          className='actions__buttons--next'
          onClick={handleNextButtonClick}
        >
          Next step <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Actions;
