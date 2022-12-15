import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface Props{
    name: string
    removeItem : () => void
}

export function Item(props : Props){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.button} onPress={props.removeItem}>
            <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}