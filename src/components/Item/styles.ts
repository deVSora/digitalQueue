import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex: 1,
        marginBottom: 10,
    },
    name:{
        fontSize: 16,
        color: '#FDFCFE',
        paddingTop: 21,
        paddingBottom: 20,
        backgroundColor: '#1F1E25',
        paddingLeft: 16,
        flexGrow: 1,
        height: 60,
        borderRadius: 4,
    },
    button:{
        backgroundColor: 'red',
        width: 56,
        height: 60,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 24,
        color: 'white'
    }
})