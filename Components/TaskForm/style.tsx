import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";

export default {
    formTitle: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold',
    },

    submitButton: {
        width: (Dimensions.get('screen').width - 40),
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.pink,
    },

    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.white,
    },

    inActive: {
        opacity: 0.7,
    }
}