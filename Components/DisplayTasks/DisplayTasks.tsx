import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import TaskPill from "../TaskPill/TaskPill";
import PropTypes from "prop-types";
import style from "./style";
import Colors from "../../constants/Colors";

const DisplayTasks = (props: any) => {
    const {
        completedTaskList,
        inCompletedTaskList,
        completeEvent,
        deleteEvent,
        filterOption,
    } = props;

    const [focusedTask, setFocusedTask] = useState({});

    const handleTaskRender = (type) => {
        if (type == "all") {
            let currentList = filterOption == "all" ? inCompletedTaskList.sort((a, b) => a.id - b.id) : inCompletedTaskList.filter((t) => t.type == filterOption);
            if (currentList.length > 0) {
                return currentList.map((task, key) => {
                    return (
                        <TaskPill
                            key={key}
                            title={task.title}
                            date={task.date || "N/A"}
                            time={task.time || "N/A"}
                            type={task.type}
                            handleTask={() => handleTask(task)}
                        />
                    )
                })
            } else {
                return <Text style={style.taskPlaceHolder}>No tasks available.</Text>
            }
        } else {
            if (completedTaskList.length > 0) {
                return completedTaskList.map((task, key) => {
                    return (
                        <TaskPill
                            key={key}
                            title={task.title}
                            date={task.date || "N/A"}
                            time={task.time || "N/A"}
                            type={task.type}
                            isCompleted={true}
                            handleTask={() => handleTask(task)}
                        />
                    )
                })
            } else {
                return <Text style={style.taskPlaceHolder}>No tasks available.</Text>
            }
        }
    }

    const handleComplete = async (task: object) => {
        await completeEvent(task);
    }

    const handleDelete = async (task: object) => {
        await deleteEvent(task);
    }

    const handleTask = (task: object) => {
        setFocusedTask(task);
        Alert.alert(
            'Manage Task',
            'You can either mark the task as completed or you can delete the task.',
            [
                {
                    text: 'Mark as complete',
                    onPress: () => handleComplete(task),
                    style: "default",
                },
                {
                    text: 'Delete Task',
                    onPress: () => handleDelete(task),
                    style: "cancel",
                },
            ],
            {
                cancelable: true
            }
        )
    }


    return (
        <ScrollView style={style.container}>
            {
                filterOption && (
                    <Text style={style.title}>{filterOption.toUpperCase()}</Text>
                )
            }
            {
                (inCompletedTaskList.length >= 0 && filterOption) &&
                handleTaskRender("all")
            }
            <Text style={[style.title, { marginTop: 20 }]}>Completed</Text>
            {
                (completedTaskList.length >= 0 && filterOption) &&
                handleTaskRender("complete")
            }
        </ScrollView>
    )
}

DisplayTasks.propTypes = {
    completedTaskList: PropTypes.array,
    inCompletedTaskList: PropTypes.array,
    completeEvent: PropTypes.func,
    deleteEvent: PropTypes.func,
    filterOption: PropTypes.string,
}

export default DisplayTasks;