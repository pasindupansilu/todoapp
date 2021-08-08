import React from "react";
import { View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import Colors from "../../constants/Colors";
import style from "./style";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from "prop-types";

const ActionBar = (props: any) => {

    const {
        addTask
    } = props

    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.column}>
                    <TouchableOpacity>
                        <Icon2 name="home" size={23} color={Colors.purple} />
                    </TouchableOpacity>
                </View>
                <View style={style.column}>
                    <TouchableOpacity
                        style={style.primaryButton}
                        onPress={addTask}>
                        <Icon name="plus" size={25} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={style.column}>
                    <IconButton
                        icon="cog-outline"
                        color={Colors.purple}
                        size={30}
                        disabled={true}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
        </View>
    )
}

ActionBar.propTypes = {
    addTask: PropTypes.func,
}

export default ActionBar;