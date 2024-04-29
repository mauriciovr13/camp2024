import React from 'react';
import {Provider} from 'react-redux';
import LoginScreen from './src/presentational/LoginScreen';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export default App;
