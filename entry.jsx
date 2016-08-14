import MyEditor from './my-editor.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
require('draft-js/dist/Draft.css');

ReactDOM.render(
  <MyEditor />,
  document.getElementById("content")
);
