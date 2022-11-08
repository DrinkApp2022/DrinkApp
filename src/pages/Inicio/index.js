import { React } from "react";
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

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Bem-vindo ao DrinkApp! </Text>
                <Text style={styles.subTitle}>Vai uma bebida ai?</Text>
            </View>            
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.titleForm}>Faça login para começar.</Text>

                <View style={styles.containerLogin}>
                    <Text style={styles.text}>Usuário:</Text>
                    <TextInput
                        placeholder="usuário"
                        style={styles.input}
                    />
                    <Text style={styles.text}>Senha:</Text>
                    <TextInput
                        placeholder="senha"
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('ListaProduto')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
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
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '80%',
        alignSelf: 'center',
        bottom: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    buttonRegister: {
        bottom: '10%',
        position: 'absolute',
        marginTop: 14,
        alignSelf: 'center'
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
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    }
})