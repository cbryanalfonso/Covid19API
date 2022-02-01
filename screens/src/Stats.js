import React, { useEffect } from "react";
import { Text, View } from "react-native";
//Api para obtener la localización http://ip-api.com/json/
export default function  Stats({navigation}) {
    useEffect(()=>{
        fetch('https://covid19.mathdro.id/api')
        .then((value) => value.json())
        .then((value) =>{
            console.log("Todos los que tienen covid :( "+value.confirmed.value);
            console.log("Todos los recuperados de covid :'D "+ value.recovered.value);
            console.log("Todos los puertos :'( " + value.deaths.value);
        })
    })
    return(
        <View>
            <Text>Lo que se hace es por el bien de todos, estaditicas del covicho</Text>
        </View>
    );
}