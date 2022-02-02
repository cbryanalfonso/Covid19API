import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../components/Container";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Icon } from "react-native-elements";

export default function Configuracion(){
    return(
        <Container>
           <View style={{padding: 20}}>
               <Text style={styles.texto}>Settings</Text>
               <TouchableOpacity style={styles.btnCambio}>
                   <View>
                       
                   </View>
               </TouchableOpacity>
           </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: hp('5%'), 
        color: '#2980b9', 
        fontWeight: "600"
    },
    btnCambio: {
        width: "100%", 
        backgroundColor: '#2c3e50', 
        height: hp('20%'), 
        borderRadius: 20, 
        marginTop: hp('7%'),
        flexDirection: "row" 
    }
})