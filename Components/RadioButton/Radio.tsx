import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import style from "./style";
import PropTypes from "prop-types";


const Radio = (props: any) => {

    const {
        title,
        value,
        onPress,
        current
    } = props;

    const [isActive, setIsActive] = useState(false);

    const handleChange = () => {
        setIsActive(true);
        onPress(value);
    }

    useEffect(() => {
        if (current == value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [current]);

    return (
        <TouchableOpacity
            style={[
                style.radioButton,
                isActive ? style.activebutton : {}
            ]}
            onPress={handleChange}
        >
            <Text
                style={[
                    isActive ? style.activeText : style.buttonText
                ]}
            >{title}</Text>
        </TouchableOpacity>
    )
}

Radio.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    onPress: PropTypes.func,
    current: PropTypes.string
}

export default Radio;