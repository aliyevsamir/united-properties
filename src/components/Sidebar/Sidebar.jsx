import React from 'react';
import Logo from '../Logo/Logo';
import ProgressBar from '../ProgressBar/ProgressBar';
import Quote from '../Quote/Quote';
import './Sidebar.scss';

const Sidebar = props => {
  const { step, quote, author, author_employment } = props;

  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <Logo />
        <ProgressBar step={step} />
        <Quote
          quote={quote}
          author={author}
          author_employment={author_employment}
        />
      </div>
    </div>
  );
};

export default Sidebar;
