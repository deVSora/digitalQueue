import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import {Item} from '../../components/Item'
import { styles } from './styles'

export function Home(){
    const [item, setItem] = useState<string[]>([])
    const [name, setName] = useState('')

    function handleAddItem(){
        if(item.includes(name)){
            return Alert.alert('Este nome já está cadastrado')
        }

        if(!name.trim()){
            setName('')
            return Alert.alert('Nome inválido', 'O nome deve ter no minímo um carácter')
        }

        setItem(prevState => [...prevState, name])
        setName('')
    }

    function handleRemoveItem(name:string){
        Alert.alert('Remover', `Remover o ${name}`,[
            {
                text: 'Sim',
                onPress: () => {
                    setItem(prevState => prevState.filter(item => item !== name))
                },
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainText}>Nome do evento</Text>
                <Text style={styles.subText}>Sexta, 4 de novembro de 2022</Text>
                <View style={styles.addField}>
                    <TextInput
                        placeholder='Nome do participante'
                        style={styles.input}
                        placeholderTextColor='#6B6B6B'
                        onChangeText={setName}
                        value={name}
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleAddItem}
                        >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.itemsContainer}>
                <Text style={styles.title}>Participantes</Text>
                <FlatList
                    data={item}
                    keyExtractor={item => item}
                    renderItem= {({item})=> (
                        <Item key={item} name={item} removeItem={() => handleRemoveItem(item)}/>
                    )}
                    ListEmptyComponent={
                        <View style={styles.emptyList}>
                            <Text style={styles.emptyText}>Ninguém chegou no evento ainda?</Text>
                            <Text style={styles.emptyText}>Adicione participantes a sua lista de presença.</Text>
                        </View>
                    }
                />
            </View>

        </View>
    )
}