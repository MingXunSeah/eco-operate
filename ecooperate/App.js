import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import MainStackNavigator from "./src/components/MainStackNavigator";
import firebaseApp from './firebaseApp';

export default class App extends Component {
	constructor(props) {
		super(props);
		const firebaseConfig = {
			apiKey: "AIzaSyAaZlW9Y7PkARUwuqDVo_R8WMmlN9O-pYA",
			authDomain: "eco-operate.firebaseapp.com",
			databaseURL: "https://eco-operate.firebaseio.com",
			projectId: "eco-operate",
			storageBucket: "eco-operate.appspot.com",
			messagingSenderId: "850754295652"
		};
	}

  	render() {
      	return (
          	<MainStackNavigator/>
      	);
  	}
}
