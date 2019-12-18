import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import Constants from 'expo-constants';

export default class CreatePage extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            activityName: '',
            categories: [{
                value: 'Cat 1',
            }, {
                value: 'Cat 2',
            }, {
                value: 'Cat 3',
            }],
            date: new Date('2020-06-12T14:42:42'),
            mode: 'date',
            show: false,
            location: '',
            stateLocation: '',
            address: ''
        };
    }

    /** Date and Time Picker **/
    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    timepicker = () => {
        this.show('time');
    }
        /**** ****/

    render() {
        const { show, date, mode } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.createHeaderWrapper}>
                    <Text style={styles.createHeader}>Create</Text>
                    <Text style={styles.createHeader2}>Register your new activity here</Text>
                </View>
                <ScrollView>
                <Text>Activity Name: </Text>
                <TextInput
                    style={styles.textBox}
                    onChange={text => this.setState(text)}
                    value={this.state.activityName}
                />
                <Text>Category: </Text>
                <Dropdown
                    label='Categories'
                    data={this.state.categories}
                />
                <Text>Start Date: </Text>
                <View>
                    <Button onPress={this.datepicker} title="Select Start Date!" />
                </View>
                <Text>Start Time: </Text>
                <View>
                    <Button onPress={this.timepicker} title="Select Start Time!" />
                </View>
                <Text>End Date: </Text>
                <View>
                    <Button onPress={this.datepicker} title="Select End Date!" />
                </View>
                <Text>End Time: </Text>
                <View>
                    <Button onPress={this.timepicker} title="Select End Time!" />
                </View>
                {show && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
                }
                <Text>Location: </Text>
                <TextInput
                    style={styles.textBox}
                    onChange={text => this.setState(text)}
                    value={this.state.location}
                />
                <Text>State: </Text>
                <TextInput
                    style={styles.textBox}
                    onChange={text => this.setState(text)}
                    value={this.state.stateLocation}
                />
                <Text>Address: </Text>
                <TextInput
                    style={styles.textBox}
                    onChange={text => this.setState(text)}
                    value={this.state.address}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    createHeaderWrapper: {
        height: 240,
        backgroundColor: '#303F55',
        justifyContent: 'center',
        alignItems: 'center'
    },
    createHeader: {
        fontSize: 40,
        fontFamily: 'Roboto',
        color: 'white'
    },
    createHeader2: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: 'white'
    },
});