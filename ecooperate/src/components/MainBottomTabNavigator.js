import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePage from "../views/Homepage";
import ProfilePage from '../views/ProfilePage';

const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: HomePage
        },
        Profile: {
            screen: ProfilePage
        },
    },{
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: 'white',
                activeBackgroundColor: '#ff6f00',
                inactiveBackgroundColor: '#ffa726'
            }
        })
    }
)

export default createAppContainer(TabNavigator);