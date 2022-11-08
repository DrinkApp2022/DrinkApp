import  React, {Component, useEffect, useState}  from "react";
import { 
    View, 
    Text, 
    StyleSheet , 
    FlatList,
    ActivityIndicator
} from "react-native";

import * as Animatable from 'react-native-animatable'

export default function ListaProduto() {
   const[data, setData]=useState([]);
   const[loading, setLoading]=useState(false) ;
   const[page, setPage]= useState(1);

   useEffect(()=>{

   },[]);
    
   const dados = [
        {key:'Energético'},
        {key:'Gin'},
        {key:'Licor'},
        {key:'Rum'},
        {key:'Saquê'},
        {key:'Tequila'},
        {key:'Ping'},
        {key:'Whisky'},
        {key:'Corotinho'},
        {key:'Vodca'},

   ]
    return (
       <View style={styles.container}>
        <FlatList
        style={{margintop:35}}
        contentContainerStyle={{marginHorizontal:20}}
        data={dados}
        keyExtractor={item => String(item.key)}
        renderItem={({item}) => <Text style={styles.listItem}>{item.key} </Text>}
        ListFooterComponent={<FooterList load={loading} />}
        />
       </View>

    );
}

/**function ListItem({data}){

return(
    <View style={styles.listItem}>
        <Text style={styles.listText}>{data.full_name}</Text>
    </View>
)
}*/
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
        color: '#FFF'

    },
    loading:{
       padding:10 
    },
    
 
})