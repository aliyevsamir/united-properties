import React, { useState } from 'react';
import './Preferences.scss';
import choicesData from './choices';

const Preferences = () => {
  const [choices, setChoices] = useState(choicesData);

  const handleCheckboxChange = e => {
    console.log(e.target.value);
    const newChoices = choices.map(choice =>
      choice.id == e.target.value
        ? { ...choice, selected: !choice.selected }
        : choice
    );

    setChoices(newChoices);
    // console.log(e.target.value);
  };

  console.log(choices);

  return (
    <div className='preferences'>
      <div className='preferences__header'>
        What kind of real estate are you interested in?
      </div>
      <div className='preferences__choices'>
        {choices.map(choice => (
          <label
            htmlFor={`choice-${choice.id}`}
            className={`choice ${choice.selected ? 'selected' : ''}`}
            key={choice.id}
          >
            <input
              type='checkbox'
              name={`choice-${choice.id}`}
              id={`choice-${choice.id}`}
              value={choice.id}
              onChange={handleCheckboxChange}
            />
            <span></span>

            <p>{choice.choice}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Preferences;
