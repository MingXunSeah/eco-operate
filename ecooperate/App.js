import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import MainStackNavigator from "./src/components/MainStackNavigator";

export default class App extends Component {
  render() {
      return (
          <MainStackNavigator/>
      );
  }
}
