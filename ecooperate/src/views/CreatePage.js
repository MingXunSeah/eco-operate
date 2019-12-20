import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-crop-picker';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import Constants from 'expo-constants';

export default class CreatePage extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            activityName: '',
            activityDescription: '',
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

    imagepicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.state.image = image;
        });
    }

    render() {
        const { show, date, mode } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.createHeaderWrapper}>
                    <Text style={styles.createHeader}>Create</Text>
                    <Text style={styles.createHeader2}>Register your new activity here</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>Activity Name </Text>
                        <TextInput
                            style={styles.textBox}
                            onChangeText={(activityName) => this.setState({ activityName })}
                            value={this.state.activityName}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>Activity Description </Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            style={styles.textBox}
                            onChangeText={(activityDescription) => this.setState({ activityDescription })}
                            value={this.state.activityDescription}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>Category</Text>
                        <Dropdown
                            style={styles.dropdown}
                            data={this.state.categories}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>Start Date and Time</Text>
                        <View style={styles.col}>
                            <View>
                                <Button onPress={this.datepicker} title="Select Start Date!" />
                            </View>
                            <View>
                                <Button onPress={this.timepicker} title="Select Start Time!" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>End Date and Time</Text>
                        <View style={styles.col}>
                            <View>
                                <Button onPress={this.datepicker} title="Select End Date!" />
                            </View>
                            <View>
                                <Button onPress={this.timepicker} title="Select End Time!" />
                            </View>
                        </View>
                    </View>
                    {show && <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate} />
                    }
                    <View style={styles.row}>
                        <Text style={styles.inputname}>Location </Text>
                        <TextInput
                            style={styles.textBox}
                            onChangeText={(location) => this.setState({ location })}
                            value={this.state.location}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>State </Text>
                        <TextInput
                            style={styles.textBox}
                            onChangeText={(stateLocation) => this.setState({ stateLocation })}
                            value={this.state.stateLocation}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputname}>Address </Text>
                        <TextInput
                            style={styles.textBox}
                            onChangeText={(address) => this.setState({ address })}
                            value={this.state.address}
                        />
                    </View>
                    <Button onPress={this.imagepicker} title="Upload Image" />
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
        fontSize: 50,
        fontFamily: 'Roboto',
        color: 'white'
    },
    createHeader2: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: 'white'
    },
    scrollContainer: {
        flex: 1,
        padding: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#303F55',
        borderWidth: 1,
        marginBottom: 20
    },
    col: {
        flex: 1,
        flexDirection: 'column',
    },
    inputname: {
        backgroundColor: '#303F55',
        height: 70,
        width: 130,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Arial',
        fontSize: 20,
        color: 'white'
    },
    textBox: {
        height: 70,
        flexWrap: 'wrap',
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'Arial',
        fontSize: 20
    },
    dropdown: {
        height: 70,
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 5,
    }
});