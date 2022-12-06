import  React, {Component, useEffect, useState}  from "react";
import {
    View,
    Text,
    StyleSheet ,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListaProduto() {
   const[data, setData]=useState([]);
   const[loading, setLoading]=useState(true);
   const navigation = useNavigation();

   function redirect() {
    navigation.navigate('Cadastro de Produto')
   }

   useEffect(()=>{
        fetch('http://localhost:3000/api/products')
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            console.log(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
   },[]);

    return (
       <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={redirect}
        >
            <Text style={styles.buttonText}>Cadastrar novo produto</Text>
        </TouchableOpacity>
        <FlatList
            style={{margintop:35}}
            contentContainerStyle={{marginHorizontal:20}}
            data={data}
            keyExtractor={item => String(item._id)}
            renderItem={({item}) => <ListItem data={item} />}
            ListFooterComponent={<FooterList load={loading} />}
        />
       </View>

    );
}

function ListItem({data}){
return(
    <View style={styles.listItem}>
        <View style={styles.viewTituloDesc}>
            <Text style={styles.tituloText}>{data.title}</Text>
            <Text style={styles.descricaoText}>{data.description}</Text>
        </View>
        <View style={styles.viewPreco}>
            <Text style={styles.precoText}>{data.price} R$</Text>
        </View>
    </View>
)
}

function FooterList({load}){
   if(!load) return null;

    return(
        <View style= {styles.loading}>
            <ActivityIndicator size={25} color="#121212"/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#black'
    },
    listItem:{
        backgroundColor:'#FFF',
        color:'black',
        fontSize:20,
        padding:30,
        marginTop: 15,
        borderRadius:10,
    },
    listText:{
        fontSize:16,
        color: 'black'

    },
    loading:{
       padding:10
    },
    tituloText:{
        fontSize:20,
        color: 'black',
        fontWeight: 'bold',
    },
    descricaoText:{
        fontSize:16,
        color: 'black'
    },
    precoText:{
        fontSize:25,
        color: 'black',
        textAlign: 'right',
        textAlignVertical: 'center'
    },
    button: {
        marginHorizontal:20,
        backgroundColor:'#38a69d',
        color:'black',
        fontSize:20,
        padding:40,
        marginTop: 15,
        borderRadius:10,
    },
    buttonText: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})