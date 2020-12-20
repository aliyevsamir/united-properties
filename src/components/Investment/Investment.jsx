import React from 'react';
import DiscreteSlider from '../DiscreteSlider/DiscreteSlider';
import './Investment.scss';

const Investment = () => {
  return (
    <div className='investment'>
      <div className='investment__question'>
        Ho much are you planning to invest in this year?
      </div>
      <div className='investment__selections'>
        <div>
          <input type='text' id='from' />
          <label htmlFor='from'>
            <div>From</div>
          </label>
        </div>
        <div>
          <input type='text' id='to' />
          <label htmlFor='to'>
            <div>To</div>
          </label>
        </div>
      </div>
      <DiscreteSlider />
      <div className='investment__question'>
        Are you an accredited investor?
      </div>
      <div className='radio-group'>
        <div>
          <input type='radio' name='investment_radio' id='opt1' />{' '}
          <label htmlFor='opt1' className='radio-group__element'>
            <div>
              <span></span>
              <p>Yes</p>
            </div>
          </label>
        </div>
        <div>
          <input type='radio' name='investment_radio' id='opt2' />{' '}
          <label htmlFor='opt2' className='radio-group__element'>
            <div>
              <span></span>
              <p>No</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Investment;
