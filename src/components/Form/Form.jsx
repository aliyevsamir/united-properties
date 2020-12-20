import React, { useState } from 'react';
import './Form.scss';
import phoneCodes from '../../phoneCodes';
import { ReactComponent as RightArrow } from '../../assets/svgs/right_arrow.svg';

const Form = props => {
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(phoneCodes[index]['code']);

  const handlePhoneCodeChange = e => {
    setIndex(e.target.value);
  };

  const handlePhoneInputChange = e => {
    console.log(e);
  };

  return (
    <div className='form'>
      <form>
        <div>
          <div className='form-group'>
            <input type='text' id='full-name' />
            <label htmlFor='full-name'>
              <div>Full name</div>
            </label>
          </div>
          <div className='form-group number-input'>
            <input type='text' />
            <input value={`+${phoneCodes[index]['code']}`} readOnly />
            <select onChange={e => handlePhoneCodeChange(e)}>
              {phoneCodes.map(el => (
                <option value={el.id}>{el.flag}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-group'>
          <input type='email' id='email' />
          <label htmlFor='email'>
            <div>E-mail address</div>
          </label>
        </div>
        <div className='form-group'>
          <select className='country-selector' id='country-selector'>
            <option value='AZ'>Azerbaijan</option>
            <option value='TR'>Turkey</option>
            <option value='PK'>Pakistan</option>
          </select>

          <label htmlFor='country-selector'>
            <div>Country</div>
          </label>
        </div>
      </form>

      <div className='policy-container'>
        <div>Privacy policy</div>
        <p>
          We know you care about how your personal information is used
          and shared, so we take your privacy seriously
        </p>
        <a>
          Expand privacy policy <RightArrow />
        </a>
      </div>
    </div>
  );
};

export default Form;
