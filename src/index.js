import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';

import { StateProvider } from "./contexts/stateProvider";
import reducer, { initialState } from "./reducer";
import  App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
     
        {/* <Timer /> */}
        <App/>
        
      
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);