import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131016'
    },
    header:{
        marginTop: 75,
        marginHorizontal: 24,
    },
    mainText:{
        fontSize: 24,
        color:'white',
        fontWeight: 'bold'
    },
    subText:{
        color: '#6B6B6B',
        fontSize: 16
    },
    addField:{
        marginTop: 34,
        flexDirection: 'row',
    },
    input:{
        color: '#FDFCFE',
        backgroundColor: '#1F1E25',
        marginRight: 7,
        height: 56,
        flexGrow: 1,
        paddingLeft: 16,
        borderRadius: 4
    },
    button:{
        backgroundColor: '#31CF67',
        width: 56,
        height: 56,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 4   
    },
    buttonText:{
        fontSize: 24,
        color: 'white',
    },
    itemsContainer:{
        marginTop: 44,
        marginHorizontal: 24,
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    emptyList:{
        marginTop: 24,
    },
    emptyText:{
        color: 'white',
        textAlign: 'center'
    }
})