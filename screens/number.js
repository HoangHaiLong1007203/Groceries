import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity,TextInput,Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Number(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}  >
            <View style={{marginTop:40}} >
                <Text style={{fontSize:26,margin:width*.1,marginBottom:20}} >Enter your mobile number</Text>
                <Text style={{fontSize:16,margin:width*.1,marginBottom:20}} >Mobile number</Text>
                <View style={{alignItems:'center',flexDirection:'row',width:width*.8,alignSelf:"center",
                justifyContent:'space-around',borderBottomWidth:2,borderColor:'#E2E2E2'}}>
                    <Image style={{padding:10}} source={require('../icon/flag.png')}/>
                    <Text style={{padding:10,fontSize:18}}>+880</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType='numeric'/>
                </View>
            </View>
            <View style={{position:'absolute',alignSelf:'flex-end',marginTop:height*.85}}>
                <TouchableOpacity style={{backgroundColor:'#53B175',
                padding:20,borderRadius:70,alignItems:'center',
                margin:30}}
                onPress={() => {
                    navigation.navigate('Verify');
                    }}>
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
