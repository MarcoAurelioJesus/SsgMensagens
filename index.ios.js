import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/App';

const SsgMensagens = props => (
      <View >
        <App />
      </View>
)

AppRegistry.registerComponent('SsgMensagens', () => SsgMensagens);
