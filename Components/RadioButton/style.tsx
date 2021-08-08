import Colors from "../../constants/Colors";

export default {

    container: {
        marginHorizontal: 20,
        marginVertical: 15,
    },

    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    showVertical: {
        flexWrap: "nowrap",
    },

    radioTitle: {
        marginBottom: 10,
        color: Colors.darkGrey,
        fontWeight: "bold",
    },

    radioButton: {
        marginRight: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: Colors.lightGrey,
    },

    buttonText: {
        color: Colors.black
    },

    activebutton: {
        backgroundColor: Colors.purple,
    },

    activeText: {
        color: Colors.white,
    }
}