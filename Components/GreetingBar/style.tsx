import Colors from "../../constants/Colors";

export default {
    container: {
        marginVertical: 15,
        marginHorizontal: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: Colors.lightGrey,
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
    },

    rightColumn: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "flex-end",
    },

    title: {
        fontSize: 25,
        color: Colors.darkGrey,
    },

    subTitle: {
        fontSize: 28,
        color: Colors.dark,
        fontWeight: "bold",
    },

    avatarIcon: {
        width: 45,
        height: 45,
        borderRadius: 10,
        resizeMode: 'cover',
    }
}