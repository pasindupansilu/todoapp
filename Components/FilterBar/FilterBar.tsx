import React, { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import PropTypes from "prop-types";

const FilterBar = (props: any) => {
    const {
        getFilterOption
    } = props;

    const [taskType, setTaskType] = useState("all");
    const radioDataSet = [{ title: "My Day", value: "all" }, { title: "Important", value: "important" }, { title: "Planned", value: "planned" },]

    const handleFilterOption = (val: any) => {
        setTaskType(val);
        if (getFilterOption) {
            getFilterOption(val);
        }
    }

    return (
        <RadioButton
            dataSet={radioDataSet}
            onChange={handleFilterOption}
            current={taskType}
            isHorizontal={true}
        />
    )
}

FilterBar.propTypes = {
    getFilterOption: PropTypes.func,
}

export default FilterBar;