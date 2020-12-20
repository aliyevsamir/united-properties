import React from 'react';
import { ReactComponent as RightArrow } from '../../assets/svgs/right_arrow.svg';
import './Header.scss';

const Header = props => {
  const { step } = props;
  return (
    <div className='header'>
      <p className='header__step'>Step {step} of 3</p>
      <p className='header__help'>
        Lost or have trouble?{' '}
        <a>
          Get help <RightArrow />
        </a>
      </p>
    </div>
  );
};

export default Header;
