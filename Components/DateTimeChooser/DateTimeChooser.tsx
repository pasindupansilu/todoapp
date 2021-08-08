import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import style from './style';
import Colors from '../../constants/Colors';
import PropTypes from 'prop-types';

const DateTimeChooser = (props: any) => {

    const {
        title,
        getDateTime
    } = props;

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        let currentDate = new Date(selectedDate) || date;
        let finalDate = new Date(new Date(new Date(currentDate).setHours(currentDate.getHours() + 5)).setMinutes(currentDate.getMinutes() + 30));
        setShow(Platform.OS === 'ios');
        setDate(finalDate);
        if (getDateTime) {
            getDateTime(date);
        }
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={style.container}>
            <Text
                style={[style.pickerTitle]}
            >{title}</Text>
            <View style={style.row}>
                <View style={{ marginRight: 15 }}>
                    <Button
                        mode="contained"
                        onPress={showDatepicker}
                        icon="calendar"
                        color={Colors.lightGrey}
                    >
                        Select a date
                    </Button>
                    {/* <Text style={style.currentValue}>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</Text> */}
                </View>
                <View>
                    <Button
                        mode="contained"
                        onPress={showTimepicker}
                        icon="clock-outline"
                        color={Colors.lightGrey}
                    >
                        Select Time
                    </Button>
                    {/* <Text>{`${date.getHours()}:${date.getMinutes()}`}</Text> */}
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

DateTimeChooser.propTypes = {
    title: PropTypes.string,
    getDateTime: PropTypes.func,
}

export default DateTimeChooser;