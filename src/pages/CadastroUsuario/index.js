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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleRegister(){
        if(name == '') {
            alert("Informe o seu nome.")
            return;
        } else if (email == '') {
            alert("Informe o seu e-mail.")
            return;
        } else if (password == '') {
            alert("Informe a senha.")
            return;
        } else if (confirmPassword == '') {
            alert("Informe a confirmação de senha.")
            return;
        } else if (password !== confirmPassword) {
            alert("As senhas devem coincidir")
        }

        const data = {
            name,
            email,
            password,
            admin: false
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
            alert(data.success)
        })
        navigation.navigate('Inicio')
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.container}>
                <View style={styles.containerForm}>
                    <Text style={styles.text}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        autoCapitalize="none"
                    />
                    <Text style={styles.text}>E-mail:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize="none"
                    />
                    <Text style={styles.text}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <Text style={styles.text}>Confirme sua senha:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry={true}
                        autoCapitalize="none"
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
        padding: '5%',
        justifyContent: 'center'
    },
    input: {
        paddingLeft: '3%',
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 2,
        height: 50,
        fontSize: 16,
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