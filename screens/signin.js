import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity,TextInput,Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Signin(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}  >
            <View>
                <Image source={require('../img/signin.png')}/>
                <Image source={require('../icon/baglogo.png')}
                style={{alignSelf:'flex-end',position:'absolute',top:30,right:50}}/>
                <Text style={{fontSize:26,width:width*.6,marginLeft:width*.1,marginBottom:20}} >Get your groceries with nectar</Text>
                <View style={{alignItems:'center',flexDirection:'row',width:width*.8,alignSelf:"center",
                justifyContent:'space-around',borderBottomWidth:2,borderColor:'#E2E2E2'}}>
                    <Image style={{padding:10}} source={require('../icon/flag.png')}/>
                    <Text style={{padding:10,fontSize:18}}>+880</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType='numeric'/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{marginTop:20}} >Or connect with social media</Text>
                    <TouchableOpacity style={{backgroundColor:'#5383EC',
                    padding:20,width:300,borderRadius:20,alignItems:'center',
                    marginTop:30}}
                    onPress={() => {
                        navigation.navigate('Number');
                        }}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../icon/gg.png')} style={{marginRight:10}}/>
                            <Text  style={[styles.white,{fontSize:18,fontWeight:600,}]} >Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#4A66AC',
                    padding:20,width:300,borderRadius:20,alignItems:'center',
                    marginTop:30}}
                    onPress={() => {
                        navigation.navigate('Number');
                        }}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../icon/fb.png')} style={{marginRight:10}}/>
                            <Text  style={[styles.white,{fontSize:18,fontWeight:600}]} >Continue with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
