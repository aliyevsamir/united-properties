import React from 'react';
import { ReactComponent as QuotationMark } from '../../assets/svgs/quotation_mark.svg';
import { ReactComponent as Triangle } from '../../assets/svgs/quote_box_triangle.svg';
import './Quote.scss';

const Quote = props => {
  const { quote, author, author_employment } = props;
  return (
    <div className='quote'>
      <div className='quotation-mark-container'>
        <QuotationMark />
      </div>
      <div className='quote-triangle'>
        <Triangle />
      </div>
      <div className='quote__content'>{quote}</div>
      <div className='quote__author'>
        <div className='quote__author--name'>{author}</div>
        <div className='quote__author--employment'>
          {author_employment}
        </div>
      </div>
    </div>
  );
};

export default Quote;
