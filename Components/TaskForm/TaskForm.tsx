import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import InputText from '../InputText/InputText';
import RadioButton from '../RadioButton/RadioButton';
import DateTimeChooser from "../DateTimeChooser/DateTimeChooser";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import style from './style';
import Colors from '../../constants/Colors';


const TaskForm = (props: any) => {

  const {
    handleNewTask
  } = props;

  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("important");
  const radioDataSet = [{ title: "Important", value: "important" }, { title: "Planned", value: "planned" },]
  const [allowNotification, setAllowNotification] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (taskTitle.trim()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [taskTitle || taskType || allowNotification]);

  const handleDateTime = (dateTime: any) => {
    let datetime = new Date(dateTime);
    setDate(`${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()}`);
    setTime(`${datetime.getHours() > 12 ? datetime.getHours() - 12 : datetime.getHours()}:${datetime.getMinutes()} ${datetime.getHours() > 12 ? "PM" : "AM"}`);
  }

  const handleCreation = () => {
    let task = {
      id: new Date().getTime(),
      title: taskTitle.trim(),
      type: taskType,
      date: date,
      time: time,
      notificationEnabled: allowNotification,
    };
    if (handleNewTask) {
      handleNewTask(task);
    }
  }

  return (
    <View>
      <Text style={[style.formTitle]}>Create a task</Text>
      <InputText
        title={"Task Title"}
        placeHolder={"Enter task title"}
        pattern={/\w+/}
        onChange={setTaskTitle}
      />
      <RadioButton
        dataSet={radioDataSet}
        onChange={setTaskType}
        current={taskType}
        title={"Task Type"}
      />
      <DateTimeChooser
        title={"Choose a date & time"}
        getDateTime={handleDateTime}
      />
      <ToggleSwitch
        title={"Get alert for this task"}
        onChange={setAllowNotification}
      />
      <TouchableOpacity
        disabled={!isValid}
        style={[style.submitButton, !isValid ? style.inActive : {}]}
        onPress={handleCreation}
      >
        <Text style={style.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskForm;