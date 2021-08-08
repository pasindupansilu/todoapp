import React from "react";
import { Text, View, Image } from "react-native";
import PropTypes from "prop-types";
import style from "./style";



const GreetingBar = (props: any) => {

    const {
        userName
    } = props;

    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.leftColumn}>
                    <Text style={style.title}>Hello,</Text>
                    <Text style={style.subTitle}>{userName}</Text>
                </View>
                <View style={style.rightColumn}>
                    <Image source={require("../../assets/images/images.jpeg")} style={style.avatarIcon} />
                </View>
            </View>
        </View>
    );
}

GreetingBar.propTypes = {
    userName: PropTypes.string,
}

export default GreetingBar;