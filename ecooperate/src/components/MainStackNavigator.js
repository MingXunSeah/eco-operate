import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from "../views/Homepage";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage
    },
})

export default createAppContainer(AppNavigator);