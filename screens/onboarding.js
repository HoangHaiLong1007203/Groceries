import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Onboarding(){
    const navigation = useNavigation();

    return(
        <ImageBackground style={styles.container} 
        source={require('../img/background.png')} >
            <View style={{alignItems:'center',marginTop:300}}>
                <Image source={require('../icon/carot.png')}/>
                <View style={{alignItems:'center'}}>
                    <Text style={[styles.white,styles.fs48]} >Welcome</Text>
                    <Text style={[styles.white,styles.fs48]} >to our store</Text>
                    <Text  style={[styles.white,{fontSize:16}]} >
                        Ger your groceries in as fast as one hour
                    </Text>
                    <TouchableOpacity style={{backgroundColor:'#53B175',
                    padding:20,width:300,borderRadius:20,alignItems:'center',
                    marginTop:30}}
                    onPress={() => {
                        navigation.navigate('Signin');
                        }}>
                        <Text  style={[styles.white,{fontSize:18,fontWeight:600}]} >Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    white:{
        color:'white'
    },
    fs48:{
        fontSize:48
    }
    });
