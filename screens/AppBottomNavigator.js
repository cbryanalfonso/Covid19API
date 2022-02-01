import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stats from "./src/Stats";
import Advice from "./src/Advice";
import Configuracion from "./src/Configuracion";


const Tab = createBottomTabNavigator();

export default function  AppBottomNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Configuracion" component={Configuracion} options={{headerShown: false}}/>
            <Tab.Screen name="Stats" component={Stats} options={{headerShown: false}}/>
            <Tab.Screen name="Advice" component={Advice} options={{headerShown: false}}/>
        </Tab.Navigator>        
    );
}