import React from 'react';
import { Provider } from 'react-redux';
import 'config/ReactotronConfig';
import store from 'store';
import { View, Text } from 'react-native';

const App = () => (
  <Provider store={store}>
    <View>
      <Text>React Native</Text>
    </View>
  </Provider>
);

export default App;
