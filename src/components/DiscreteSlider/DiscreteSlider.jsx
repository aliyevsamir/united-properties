import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './DiscreteSlider.scss';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: 300,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

const marks = [
  {
    value: 0,
    label: '$10,000',
  },
  {
    value: 20,
    label: '$50,000',
  },
  {
    value: 40,
    label: '$100,000',
  },
  {
    value: 60,
    label: '$200,000',
  },
  {
    value: 80,
    label: '$500,000',
  },
  {
    value: 100,
    label: '$1,000,000 +',
  },
];

const DiscreteSlider = () => {
  return (
    <div className='discrete-slider'>
      <Slider
        aria-labelledby='discrete-slider-custom'
        step={20}
        valueLabelDisplay={false}
        marks={marks}
        valueLabelDisplay={'off'}
      />
    </div>
  );
};

export default DiscreteSlider;
