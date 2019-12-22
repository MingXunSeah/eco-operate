import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginPage from './LoginPage';
import * as firebase from 'firebase';

export default class RegisterPage extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		username: '',
    		email: '',
    		password: '',
    		confirmPw: '',
    		dob: '',
    		country: ''
    	}
    }
    onPressRegister() {
    	if(this.state.password == this.state.confirmPw) {
    		try {
        		const firebase = require("firebase")
        		firebase.auth()
        		        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        		        .then(() => {
        		          console.log("exit1")
        		          var user = firebase.auth().currentUser;
        		          // For profile details in DB
        		          var userProfile = {}
        		          user.sendEmailVerification().then(() => firebase.auth().signOut());
        		          alert("A verification email has been sent to your email!")
        		          this.props.navigation.navigate("LoginPage");
        		        })
        		        .catch(error => alert(error.toString()))                
    		} catch (error) {
      		console.log(error.toString())
    		}
    	}
    	else {alert("Passwords do not match");}
  	}
  	onPressGoBack() {
  		this.props.navigation.goBack();
  	}
    render() {
        return (
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollContainer}>
					<View style={styles.createHeaderWrapper}>
						<TouchableOpacity style={styles.backButton} onPress={()=>this.onPressGoBack()}>
							<MaterialCommunityIcons name='arrow-left-circle-outline' size={30} color='#303F55'/> 
						</TouchableOpacity>
						<Text style={styles.headerText}>New Account</Text>
						<View style={styles.backButton}>
						</View>
					</View>
					<View style={styles.createBodyWrapper}>
						<View style={styles.row}>
							<TextInput onChangeText={(username)=>this.setState({username})} style={styles.textinput} placeholder='Full Name'/>
						</View>
						<View style={styles.row}>
							<TextInput onChangeText={(email)=>this.setState({email})} style={styles.textinput} placeholder='Email'/>
						</View>
						<View style={styles.row}>
							<TextInput onChangeText={(password)=>this.setState({password})} style={styles.textinput} secureTextEntry placeholder='Password'/>
						</View>
						<View style={styles.row}>
							<TextInput onChangeText={(confirmPw)=>this.setState({confirmPw})} style={styles.textinput} secureTextEntry placeholder='Confirm Password'/>
						</View>
						<Text style={styles.personalInfo}>Personal Information</Text>
						<View style={styles.row}>
							<TextInput style={styles.textinput} placeholder='DOB'/>
						</View>
						<View style={styles.row}>
							<TextInput onChangeText={(country)=>this.setState({country})} style={styles.textinput} placeholder='Country'/>
						</View>
					</View>
					<TouchableOpacity onPress={()=>this.onPressRegister()} style={styles.buttonStyle}>
						<Text style={styles.buttonText}>Register Now</Text>
					</TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollContainer: {
		flex: 1
	},
	createHeaderWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 40
	},
	backButton: {
		flex: 0.15,
		alignItems: 'flex-start'
	},
	headerText: {
		flex: 0.8,
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 25,
		fontWeight: 'bold'
	},
	createBodyWrapper: {
		flex: 0.7,
		flexDirection: 'column',
		padding: 10,
		justifyContent: 'space-between'
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		margin: 20,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#303F55'
	},
	textinput: {
		flex: 1	
	},
	personalInfo: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 17	
	},
	buttonStyle: {
		flex: 0.3,
		margin: 20,
		padding: 20,
		alignItems: 'center',
		backgroundColor: '#303F55',
		borderRadius: 7
	},
	buttonText: {
		color: 'white'
	}
});