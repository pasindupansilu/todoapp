import React, { useEffect, useState } from "react";
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import Radio from "./Radio";
import style from "./style";


const RadioButton = (props: any) => {
    const {
        dataSet,
        onChange,
        current,
        title,
        isHorizontal
    } = props;

    const [value, setValue] = useState("");

    const handleChange = (val: any) => {
        setValue(val);
        if (onChange) {
            onChange(val);
        }
    }

    useEffect(() => {
        setValue(current);
    }, [current]);

    return (
        <View style={style.container}>
            {
                title && (
                    <Text style={[style.radioTitle]} >{title}</Text>
                )
            }
            {
                isHorizontal ? (
                    <ScrollView horizontal={true}>
                        <View style={[style.buttonContainer, { flexGrow: 1, flexDirection: "row", flexWrap: "wrap" }]}>
                            {
                                dataSet.map((ob: any, key: any) => {
                                    return (
                                        <Radio
                                            key={key}
                                            title={ob.title}
                                            value={ob.value}
                                            onPress={handleChange}
                                            current={value}
                                        />
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <View style={[style.buttonContainer]}>
                        {
                            dataSet.map((ob: any, key: any) => {
                                return (
                                    <Radio
                                        key={key}
                                        title={ob.title}
                                        value={ob.value}
                                        onPress={handleChange}
                                        current={value}
                                    />
                                )
                            })
                        }
                    </View>
                )
            }
        </View>
    );
}

RadioButton.propTypes = {
    dataSet: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    current: PropTypes.string,
    title: PropTypes.string,
    isHorizontal: PropTypes.bool,
}

export default RadioButton;