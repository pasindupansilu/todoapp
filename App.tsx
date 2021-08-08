import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import TaskForm from './Components/TaskForm/TaskForm';
import GreetingBar from './Components/GreetingBar/GreetingBar';
import FilterBar from './Components/FilterBar/FilterBar';
import ActionBar from './Components/ActionBar/ActionBar';
import DisplayTasks from './Components/DisplayTasks/DisplayTasks';
import Colors from './constants/Colors';
import GlobalFont from 'react-native-global-font';

const App = () => {

  const [filterOption, setFilterOption] = useState("all");
  const [inCompletedTaskList, setInCompletedTaskList] = useState({
    currentList: []
  });
  const [completedTaskList, setCompletedTaskList] = useState({
    currentList: []
  });

  const refRBSheet = useRef();

  const openBottomSheet = () => {
    refRBSheet.current.open();
  }

  useEffect(() => {
    let fontName = 'Poppins-Regular';
    GlobalFont.applyGlobal(fontName);
  }, []);

  const handleNewTask = (task: object) => {
    let { currentList } = inCompletedTaskList;
    currentList.push(task);
    inCompletedTaskList.currentList = currentList;
    setInCompletedTaskList({ ...inCompletedTaskList });
    refRBSheet.current.close();
  }

  const handleTaskCompletion = (task: object) => {
    let { currentList } = completedTaskList;
    currentList.push(task);
    completedTaskList.currentList = currentList
    setCompletedTaskList({ ...completedTaskList });
    handleDeleteTask(task);
  }

  const handleDeleteTask = (task: object) => {
    let { currentList } = inCompletedTaskList;
    currentList.splice(currentList.findIndex(t => t.id == task.id || t.title == task.title), 1);
    inCompletedTaskList.currentList = currentList;
    setInCompletedTaskList({ ...inCompletedTaskList });
  }

  return (
    <SafeAreaView style={SafeAreaViewStyles}>
      <GreetingBar
        userName="John Doe" />
      <FilterBar
        getFilterOption={setFilterOption} />
      <View style={{ flex: 1 }}>
        {
          (inCompletedTaskList.currentList.length >= 0 && completedTaskList.currentList.length >= 0) && (
            <DisplayTasks
              completedTaskList={completedTaskList.currentList}
              inCompletedTaskList={inCompletedTaskList.currentList}
              completeEvent={handleTaskCompletion}
              deleteEvent={handleDeleteTask}
              filterOption={filterOption}
            />
          )
        }
      </View>
      <ActionBar
        addTask={openBottomSheet}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={Dimensions.get('window').height * 0.7}
        keyboardAvoidingViewEnabled={true}
        customStyles={customBottomSheetStyles}
      >
        <ScrollView style={{ flex: 1, marginBottom: 10, }}>
          <TaskForm
            handleNewTask={handleNewTask}
          />
        </ScrollView>
      </RBSheet>
    </SafeAreaView>
  );
};

export default App;


const customBottomSheetStyles = {
  wrapper: {
    backgroundColor: '#00000011',
  },
  container: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 35.00,
    elevation: 80,
  },
  draggableIcon: {
    width: "45%",
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: Colors.lightGrey
  }
}

const SafeAreaViewStyles = {
  flex: 1,
  backgroundColor: Colors.white
}