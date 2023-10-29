import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity,TextInput,Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Verify(){
    
    return(
        <View style={styles.container}  >
            <View style={{marginTop:40}} >
                <Text style={{fontSize:26,margin:width*.1,marginBottom:20}} >Enter your 4-digit code</Text>
                <Text style={{fontSize:16,margin:width*.1,marginBottom:20}} >Code</Text>
                <View style={{alignItems:'center',flexDirection:'row',width:width*.8,alignSelf:"center",
                justifyContent:'space-around',borderBottomWidth:2,borderColor:'#E2E2E2'}}>
                    <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter your 4-digit code"
                    keyboardType='numeric'/>
                </View>
            </View>
            <View style={{position:'absolute',marginTop:height*.85,width:width,
            justifyContent:'space-between',flexDirection:'row'}}>
                <Text  style={{color:'#53B175',
                padding:20,
                margin:30}}>
                Resend Code
                </Text>
                <TouchableOpacity style={{backgroundColor:'#53B175',
                padding:20,borderRadius:70,alignItems:'center',
                margin:30}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../icon/next.png')}
                        style={{marginHorizontal:4}} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        },
    white:{
        color:'white'
    },
    fs48:{
        fontSize:48
    },
    input: {
        height: 40,
        width:width*.6,
        borderColor: 'gray',
        borderWidth: 0,
        fontSize:18
    },
});
