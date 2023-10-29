import React,{useEffect} from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Splash({ navigation }){
    useEffect(() => {
        const timer = setTimeout(() => {
        navigation.replace('Onboarding');
        }, 2000);
        return () => clearTimeout(timer);
        }, []);
    return(
        <View style={styles.container} >
            <Image source={require('../img/logo.png')}/>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#53B175',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });
