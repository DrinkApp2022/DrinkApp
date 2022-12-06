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

        fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                navigation.navigate('Lista de Produtos')
            }
        })


    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.container}>
                <View style={styles.containerForm}>

                    <Text style={styles.text}>Nome do produto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNome}
                        value={title}
                    />

                    <Text style={styles.text}>Descrição:</Text>
                    <TextInput
                        style={styles.inputDescricao}
                        onChangeText={setDescricao}
                        value={description}
                        multiline
                    />

                    <Text style={styles.text}>Preço:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPreco}
                        value={price}
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
        flex: 1
    },
    containerForm: {
        padding: '5%',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 2,
        paddingLeft: '3%',
        height: 50,
        fontSize: 16,
    },
    inputDescricao: {
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        height: 100,
        paddingLeft: '3%'
    },
    button: {
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 15
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