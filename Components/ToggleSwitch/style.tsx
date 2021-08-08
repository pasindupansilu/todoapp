import Colors from "../../constants/Colors";

export default {
    container: {
        marginVertical: 15,
        marginHorizontal: 20,
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },

    leftColumn: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    rightColumn: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "flex-end",
    },

    toggleTitle: {
        fontWeight: "bold",
        color: Colors.dark,
    },

    toggleButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.lightGrey,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    activeButton: {
        backgroundColor: Colors.purple,
    },

    buttonText: {
        color: Colors.dark,
        marginRight: 25,
    },

    activeText: {
        color: Colors.white
    },

    buttonNob: {
        height: "70%",
        width: 3,
        borderRadius: 10,
        backgroundColor: Colors.purple,
    },

    activeNob: {
        backgroundColor: Colors.white,
    }

}