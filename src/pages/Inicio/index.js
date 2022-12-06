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

export default function Inicio() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn() {
        if (email === '' || password === '') {
            alert("Preencha todos os campos.")
            return;
        }

        const data = { email, password }

        fetch("http://localhost:3000/api/auth/login", {
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
                setEmail('')
                setPassword('')
                navigation.navigate('Lista de Produtos')
            }
        })


    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Animatable.Text
                    style={styles.title}
                    animation="zoomIn"
                    delay={600}
                >Bem-vindo ao DrinkApp!</Animatable.Text>
                <Animatable.Text
                    style={styles.subTitle}
                    animation="zoomIn"
                    delay={600}
                >Vai uma bebida ai?</Animatable.Text>
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.titleForm}>Faça login para começar.</Text>

                <View style={styles.containerLogin}>
                    <Text style={styles.text}>E-mail:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize='none'
                    />
                    <Text style={styles.text}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        autoCapitalize='none'
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignIn}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={ () => navigation.navigate('Cadastro de Usuário')}
                >
                    <Text style={styles.registerText}>Não possui uma conta?</Text>
                    <Text style={styles.registerText}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerTitle: {
        flex:1,
        backgroundColor: '#38a69d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerForm: {
        flex:2,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    titleForm: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 3,
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
    buttonRegister: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    registerText: {
        fontSize: 15,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    containerLogin: {
        marginTop: 30,
        marginBottom: 10,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 2,
        paddingLeft: '3%',
        height: 50,
        fontSize: 16
    }
})