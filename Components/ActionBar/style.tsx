import Colors from "../../constants/Colors";

export default {
    container: {
        margin: 20,
    },

    row: {
        flexDirection: "row",
    },

    column: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    primaryButton: {
        padding: 8,
        backgroundColor: Colors.pink,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
}