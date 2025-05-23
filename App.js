import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Alert,} from 'react-native';
import { TextInput } from 'react-native-web';
import {TouchableOpacity} from 'react-native';
import {Pressable} from 'react-native';
import { useState } from 'react';
const imgExterna = {uri: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg'}
const imgPerfil = {uri: 'https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-argentinien-2022-1698689902-120754.jpg'}
const fondoNoche = {uri: 'https://static.vecteezy.com/system/resources/previews/016/722/420/large_2x/the-obelisk-buenos-aires-argentina-at-night-2022-free-photo.jpg'}

export default function App() {
  const [imageSource, setImageSource] = useState(imgExterna)
  const cambiarFondo=()=>{
    setImageSource(imageSource.uri==imgExterna.uri?fondoNoche:imgExterna)
  }
  return (
    <View style={[
      styles.container,{flexDirection:'column',},
    ]}>   
      <View style={{flex:1}}>
      <ImageBackground
      source={imageSource}
      resizeMode='cover'
      style={styles.backgroundImage}>
         <Image style={styles.image} source={imgPerfil} />
         <Text style={styles.text}>LIONEL MESSI</Text>
         <Text style={styles.text2}>CEO</Text>
         <TextInput style={styles.Input} placeholder='Mensaje'></TextInput>
         <TouchableOpacity style={styles.boton} onPress={   ()=> Alert.alert("AAAA") }>
          <Text>Contactar</Text>
        </TouchableOpacity>
        <Pressable style={styles.boton2} onPress={cambiarFondo}>
          <Text>Ver perfil</Text>
        </Pressable>
      </ImageBackground>
      <StatusBar style='light' />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width:'100%',
    height:'100%'
  },
  image:{
    width:'25rem',
    height:'25rem',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'auto',
    borderRadius:'50%'
  },
  text: {
    borderColor:'black',
    marginLeft:'auto',
    marginRight:'auto',

    fontSize:'3rem'
  },
  text2:{
    borderColor:'black',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'10%',
    fontSize:'2rem'
  },
  Input:{
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'5%',
    backgroundColor:'white',
  },
 boton:{
  marginLeft:'auto',
  marginRight:'auto',
  marginBottom:'5%',
  backgroundColor:'white',
 },
 boton2:{
  marginLeft:'auto',
  marginRight:'auto',
  marginBottom:'55%',
  backgroundColor:'white',
 }
});
