import React from 'react';
import Form from './components/Form/Form';
import Investment from './components/Investment/Investment';
import Preferences from './components/Preferences/Preferences';

export default [
  {
    id: 1,
    title: 'Contact Details',
    description:
      'Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you',
    quote:
      'Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you',
    author: 'William Mac',
    author_employment: 'CO-FOUNDER, INVESTOR',
    mainComponent: <Form />,
  },
  {
    id: 2,
    title: 'Investment plans',
    description:
      'Let us know about your investment plans. This will help us get you to the right expert who will help you further',
    quote:
      'Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free',
    author: 'Jodie Sears',
    author_employment: 'UNITEDPROPERTIES’ AGENT',
    mainComponent: <Investment />,
  },
  {
    id: 3,
    title: 'Investment preferences',
    description:
      'This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals',
    quote:
      'United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side',
    author: 'Ollie Mcmahon',
    author_employment: 'MANAGING DIRECTOR',
    mainComponent: <Preferences />,
  },
];
