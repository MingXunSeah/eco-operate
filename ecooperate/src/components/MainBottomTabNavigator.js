import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePage from "../views/Homepage.js";
import ProfilePage from '../views/ProfilePage';
import CreatePage from '../views/CreatePage';
import NotificationPage from '../views/NotificationPage';
import DiscoverPage from '../views/DiscoverPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: HomePage,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => {
                    return (
                        <MaterialCommunityIcons
                            name='home-outline'
                            size={26}
                            color={tintColor}
                        />
                    );
                }
            })
        },
        Discover: {
            screen: DiscoverPage,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => {
                    return (
                        <MaterialCommunityIcons
                            name='compass-outline'
                            size={26}
                            color={tintColor}
                        />
                    );
                }
            })
        },
        Create: {
            screen: CreatePage,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => {
                    return (
                        <MaterialCommunityIcons
                            name='plus-box-outline'
                            size={26}
                            color={tintColor}
                        />
                    );
                }
            })
        },
        Notification: {
            screen: NotificationPage,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => {
                    return (
                        <MaterialCommunityIcons
                            name='bell-outline'
                            size={26}
                            color={tintColor}
                        />
                    );
                }
            })
        },
        Profile: {
            screen: ProfilePage,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => {
                    return (
                        <MaterialCommunityIcons
                            name='account-circle-outline'
                            size={26}
                            color={tintColor}
                        />
                    );
                }
            })
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