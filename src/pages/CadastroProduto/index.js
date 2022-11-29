import { React, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity 
} from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function CadastroProduto() {
    const navigation = useNavigation();
    const [title, setNome] = useState('')
    const [description, setDescricao] = useState('')
    const [price, setPreco] = useState('')

    function handleRegister(){
        if(title == '') {
            alert("Informe o nome do produto.")
            return;
        } else if (price == '') {
            alert("Informe o preço do produto.")
            return;
        }
        
        const data = {
            title,
            description,
            price
        }

        fetch("http://10.0.2.2:3000/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        navigation.navigate('ListaProduto')
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.container}>                
                <View style={styles.containerForm}>
                    
                    <Text style={styles.text}>Nome do produto a ser vendido:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNome}
                        value={title}
                        placeholder="Nome do produto"
                    />

                    <Text style={styles.text}>Descrição:</Text>
                    <TextInput
                        style={styles.inputDescricao}
                        onChangeText={setDescricao}
                        value={description}
                        placeholder="Descrição"
                    />

                    <Text style={styles.text}>Preço:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPreco}
                        value={price}
                        placeholder="$$$"
                    />

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={handleRegister}                        
                    >
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    containerForm: {
        flex:1,
        paddingStart: '5%',
        paddingEnd: '5%',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#38a69d',
        borderWidth: 2,
        borderRadius: 20,
        borderBottomWidth: 2,
        height: 50,
        fontSize: 16,
    },
    inputDescricao: {
        backgroundColor: '#38a69d',
        borderWidth: 2,
        borderRadius: 20,
        borderBottomWidth: 2,
        height: 100,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'grey',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 3,        
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})