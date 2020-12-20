import React, { useState } from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import data from './data';

function App() {
  const [index, setIndex] = useState(0);

  const handlePreviosButtonClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      alert(`Home page`);
    }
  };

  const handleSkipButtonClick = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else {
      alert(`You can't skip this step, please finish`);
    }
  };

  const handleNextButtonClick = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else {
      alert('You finished!');
    }
  };

  const {
    id,
    author,
    author_employment,
    title,
    quote,
    description,
    mainComponent,
  } = data[index];

  return (
    <div className='App'>
      <Sidebar
        step={id}
        quote={quote}
        author={author}
        author_employment={author_employment}
      />
      <Main
        step={id}
        title={title}
        description={description}
        handleNextButtonClick={handleNextButtonClick}
        handlePreviosButtonClick={handlePreviosButtonClick}
        handleSkipButtonClick={handleSkipButtonClick}
      >
        {mainComponent}
      </Main>
    </div>
  );
}

export default App;
