import React, { Component , useEffect , useState } from 'react';
import { Text, View , Image , FlatList ,ScrollView} from 'react-native';
import style from './style';
import api from '../src/api';

console.disableYellowBox = true;

const image = "https://img.itch.zone/aW1nLzI5MTAwMjMucG5n/original/sLcotJ.png";

 

export default function App (){

  const [value , setValue] = useState('');
  const [dinos , setDinos] = useState([]);
  

  

 useEffect(() => {

    getDinos('');

} , []);


 async function getDinos(search) {

    setValue(search);

    const response = await api.get('dino');
    setDinos([...dinos , ...response.data]);
    console.log(dinos);
    return;
  
 
 }


    return (

      <View>
            <View style={style.header}>
                <Image style={{ width : 84 , height: 84 }} source={{uri : image}}></Image>
            </View>

           
       <ScrollView style={style.scroll}>
   <FlatList 
        onEndReached={() => getDinos(value , filter)}
        data={dinos}
        keyExtractor = {dino => dino.name}
       
        renderItem={({ item : dino }) => (
            
          <View style={style.listagem}>
          <Image style={{ width : 84 , height: 84  , marginLeft : 100}} source={{uri : dino.url}}></Image>
          <Text style={style.Property}>Dino:</Text>
          <Text style={style.Value}>{dino.name}</Text>
          <Text style={style.Property}>Espécie:</Text>
          <Text style={style.Value}>{dino.species}</Text>
          <Text style={style.Property}>descrição:</Text>
          <Text style={style.Value}>{dino.description}</Text>
          

          </View>
        )}
   
   />       
   </ScrollView>      

    

      </View>
    
  );

}



