import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName} from '@material-ui/core/styles';
import Hello from './my-list.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

ReactDOM.render(
    <JssProvider generateClassName={generateClassName}>
      <Hello/>
    </JssProvider>,
    document.body
);

