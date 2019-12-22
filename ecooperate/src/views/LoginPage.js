import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import MainBottomTabNavigator from "../../src/components/MainBottomTabNavigator"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterPage from './RegisterPage';
import * as firebase from 'firebase'

export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
	}
	onPressSignIn() {
		try {
  			firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  					.then(() => {
                  		var user = firebase.auth().currentUser;
                  			if(!user.emailVerified) {
                  				alert("Your email is not yet verified!");             					
	                  		}
							else {
								// ADD CODE TO CLEAR TEXT INPUTS AFTER NAVIGATION
								this.props.navigation.navigate("MainBottomTabNavigator");
							}
					})
		} catch(error) {
			alert("Authentication failed. Invalid email or password.");
		}
	}
	onPressGoogleSignIn() {

	}
    render() {
        return (
        	<SafeAreaView style={styles.container}>
        		<View style={styles.createHeaderWrapper}>
        		</View>
        		<View style={styles.createBodyWrapper}>
        			<View style={styles.row}>
        				<MaterialCommunityIcons name='account' size={26} color='#303F55'/>
        				<TextInput onChangeText={(username)=>this.setState({username})} style={styles.textinput} placeholder='Username'/>
        			</View>
        			<View style={styles.row}>
        				<MaterialCommunityIcons name='email' size={26} color='#303F55'/>
        				<TextInput onChangeText={(email)=>this.setState({email})} style={styles.textinput} placeholder='Email'/>
        			</View>
        			<View style={styles.row}>
        				<MaterialCommunityIcons name='lock' size={26} color='#303F55'/>
        				<TextInput secureTextEntry onChangeText={(password)=>this.setState({password})} style={styles.textinput} placeholder='Password'/>
        			</View>
        			<TouchableOpacity onPress={()=>this.onPressSignIn()} style={styles.buttonStyle}>
        				<Text style={styles.buttonText}>LOG IN</Text>
        			</TouchableOpacity>
        		</View>
        			<Text style={styles.otherLoginHeader}>Not Yet Registered?</Text>
        			<View style={styles.otherLogins}>
        				<TouchableOpacity style={styles.loginMethod}>
        					<MaterialCommunityIcons name='facebook' size={25} color='#303F55'/>
        				</TouchableOpacity>
        				<TouchableOpacity style={styles.loginMethod}>
        					<MaterialCommunityIcons name='twitter' size={25} color='skyblue'/>
        				</TouchableOpacity>
        				<TouchableOpacity onPress={()=>this.onPressGoogleSignIn} style={styles.loginMethod}>
        					<MaterialCommunityIcons name='google' size={25} color='#ff4500'/>
        				</TouchableOpacity>
        				<TouchableOpacity style={styles.loginMethod}>
        					<MaterialCommunityIcons name='instagram' size={25} color='#da70d6'/>
        				</TouchableOpacity>
        			</View>
        			<TouchableOpacity onPress={()=>this.props.navigation.navigate('RegisterPage')} style={styles.buttonStyle}>
        				<Text style={styles.buttonText}>REGISTER WITH EMAIL</Text>
        			</TouchableOpacity>
        	</SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	createHeaderWrapper: {
		flex: 0.2
	},
	createBodyWrapper: {
		flex: 0.5,
		flexDirection: 'column',
		padding: 10,
		justifyContent: 'space-between'
	},
	createBottomWrapper: {
		flex: 0.3
	},
	icons: {

	},
	row: {
		flex: 1,
		flexDirection: 'row',
		margin: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#303F55'
	},
	textinput: {
		padding: 10,
		flex: 1
	},
	buttonStyle: {
		backgroundColor: '#303F55',
		padding: 20,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 7,
		alignItems: 'center'
	},
	buttonText: {
		fontFamily: 'Roboto',
		color: 'white'
	},
	otherLoginHeader: {
		fontWeight: 'bold',
		fontSize: 15,
		fontFamily: 'Roboto',
		marginTop: 20,
		marginLeft: 30
	},
	otherLogins: {
		flex: 0.2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	loginMethod: {
		borderBottomColor: '#303F55',
		borderWidth: 1,
		marginLeft: 10,
		marginBottom: 10,
		marginRight: 10,
		padding: 15,
		borderRadius: 50
	}
});