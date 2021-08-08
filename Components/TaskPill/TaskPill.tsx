import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Colors from "../../constants/Colors";

const TaskPill = (props: any) => {

    const {
        title,
        date,
        time,
        type,
        handleTask,
        isCompleted,
    } = props;


    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.leftColumn}>
                    <Text style={[style.title, isCompleted ? style.completedTitle : {}]}>
                        {`${title}  `}
                        <Icon name="circle" size={10} color={type == "important" ? Colors.pink : Colors.darkGrey} />
                    </Text>
                    <Text style={style.subTitle}>
                        <Icon2 name="calendar" size={10} style={{ marginRight: 10 }} color={Colors.darkGrey} />
                        {`  ${date}  `}
                        <Icon2 name="clock" size={10} color={Colors.darkGrey} />
                        {`  ${time}`}
                    </Text>
                </View>
                <View style={style.rightColumn}>
                    <TouchableOpacity
                        onPress={handleTask}
                        disabled={isCompleted}
                        style={[style.taskHandler, isCompleted ? style.completedButton : {}]}
                    >
                        {
                            isCompleted && (
                                <Icon2 name="check" size={20} color={Colors.white} />
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

TaskPill.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
    handleTask: PropTypes.func,
    isCompleted: PropTypes.bool,
}

export default TaskPill;