import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import MainBottomTabNavigator from './MainBottomTabNavigator';

const AppNavigator = createStackNavigator({
    MainBottomTabNavigator: {
        screen: MainBottomTabNavigator,
        navigationOptions: {
            headerTitle: 'ecooperate',
            headerLeft: null,
            headerStyle: {
                backgroundColor: '#ffa726',
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                color: '#ffffff'
            }
        },
    }
})

export default createAppContainer(AppNavigator);