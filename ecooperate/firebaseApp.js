import * as firebase from 'firebase';

const firebaseConfig = {
  	apiKey: "AIzaSyAaZlW9Y7PkARUwuqDVo_R8WMmlN9O-pYA",
	authDomain: "eco-operate.firebaseapp.com",
	databaseURL: "https://eco-operate.firebaseio.com",
	projectId: "eco-operate",
	storageBucket: "eco-operate.appspot.com",
	messagingSenderId: "850754295652"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;