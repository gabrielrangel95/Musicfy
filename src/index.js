import React from 'react';
import { Provider } from 'react-redux';
import 'config/ReactotronConfig';
import store from 'store';
import Router from 'router';
console.disableYellowBox = true;
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
