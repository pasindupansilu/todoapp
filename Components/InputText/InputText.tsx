import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput
} from 'react-native';
import style from './style';
import PropTypes from "prop-types";


const InputText = (props: any) => {
    const {
        onChange,
        placeHolder,
        pattern,
        title
    } = props;

    const [value, setValue] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (val: any) => {
        if (pattern) {
            if (pattern.test(val)) {
                setValue(val);
                onChange(val);
                setIsValid(true);
            } else {
                setValue(val);
                onChange("");
                setIsValid(false);
            }
        } else {
            setValue(val);
            onChange(val);
            setIsValid(true);
        }
    }

    return (
        <View style={[style.inputContainer]}>
            <Text
                style={[style.inputTitle]}
            >{title}</Text>
            <TextInput
                onChangeText={handleChange}
                placeholder={placeHolder}
                style={[style.inputStyle, isFocused && value ? style.activeStyle : {}]}
                value={value || ""}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {
                (isValid == false && value != null) && (
                    <Text style={[
                        style.errorText
                    ]}>Please enter a valid title</Text>
                )
            }
        </View>
    )
}

InputText.propType = {
    onChange: PropTypes.func,
    placeHolder: PropTypes.string,
    pattern: PropTypes.any,
    title: PropTypes.string,
}

export default InputText;