import React from 'react';
import Actions from '../Actions/Actions';
import Header from '../Header/Header';
import Title from '../Title/Title';
import './Main.scss';

const Main = props => {
  const {
    step,
    title,
    description,
    handleNextButtonClick,
    handlePreviosButtonClick,
    handleSkipButtonClick,
    children,
  } = props;
  return (
    <div className='main'>
      <div className='main-container'>
        <Header step={step} />
        <Title title={title} description={description} />
        {children}
        <Actions
          step={step}
          handleNextButtonClick={handleNextButtonClick}
          handlePreviosButtonClick={handlePreviosButtonClick}
          handleSkipButtonClick={handleSkipButtonClick}
        />
      </div>
    </div>
  );
};

export default Main;
