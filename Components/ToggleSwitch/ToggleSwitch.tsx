import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import style from "./style";


const ToggleSwitch = (props: any) => {

    const {
        title,
        onChange
    } = props;

    const [isActive, setIsActive] = useState(false);

    const handleChange = () => {
        setIsActive(!isActive);
        if (onChange) {
            onChange(isActive);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.leftColumn}>
                    <Text style={style.toggleTitle}>
                        {title}
                    </Text>
                </View>
                <View style={style.rightColumn}>
                    <TouchableOpacity
                        style={[style.toggleButton, isActive ? style.activeButton : {}]}
                        onPress={handleChange}
                    >
                        <Text style={[style.buttonText, isActive ? style.activeText : {}]}>
                            {
                                isActive ? "On" : "Off"
                            }
                        </Text>
                        <View style={[style.buttonNob, isActive ? style.activeNob : {}]}></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

ToggleSwitch.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func
}

export default ToggleSwitch;