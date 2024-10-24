import React from 'react';
import './App.css';
import 'h8k-components';

import AutocorrectTextarea from './components/AutocorrectTextarea';
const title = "Autocorrection App";

const App = ({corrections}) => {

    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="App">
          <AutocorrectTextarea corrections={corrections} />
        </div>
      </div>
    );
  }

export default App;
