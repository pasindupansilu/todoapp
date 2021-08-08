import Colors from "../../constants/Colors";

export default {

    container: {
        marginTop: 15,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: Colors.lightGrey,
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },

    leftColumn: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
    },

    rightColumn: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "flex-end",
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
    },

    completedTitle: {
        textDecorationLine: 'line-through',
    },

    subTitle: {
        marginTop: 5,
        color: Colors.darkGrey,
        fontSize: 13,
        fontWeight: "bold",
    },

    taskHandler: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: Colors.darkGrey,
        backgroundColor: Colors.white,
        borderRadius: 25,
    },

    completedButton: {
        backgroundColor: Colors.purple,
        borderWidth: 0,
        padding: 2,
    }

}