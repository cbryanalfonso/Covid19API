import React, { useContext } from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import { theme } from '../context/Theme'


export default function Container(props) {
    const activeTheme = useContext(theme).globalTheme
	const darkTheme = useContext(theme).darkTheme
    return(
        <>
            <ScrollView style= {[styles.container, {backgroundColor: 'red'}]} contentContainerStyle={{flexGrow: 1}} >
                    {props.children}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    }
})