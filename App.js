import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Alert, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';

const imgExterna = { uri: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg' }
const imgPerfil = { uri: 'https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-argentinien-2022-1698689902-120754.jpg' }
const fondoNoche = { uri: 'https://static.vecteezy.com/system/resources/previews/016/722/420/large_2x/the-obelisk-buenos-aires-argentina-at-night-2022-free-photo.jpg' }
const ImgSplash = { uri: 'https://i.pinimg.com/736x/cb/30/e9/cb30e9b08a1633d82559d50f0e85b534.jpg' }

export default function App() {
  const [imageSource, setImageSource] = useState(imgExterna)
  const [inputText, setInputText] = useState('');
  
  const cambiarFondo = () => {
    setImageSource(imageSource.uri == imgExterna.uri ? fondoNoche : imgExterna)
  }

  const showAlert = () => {
    Alert.alert(inputText);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={imageSource}
        resizeMode='cover'
        style={styles.backgroundImage}>
        
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imgPerfil} />
        </View>

        <View style={styles.nombreContainer}>
          <Text style={styles.text}>LIONEL MESSI</Text>
          <Text style={styles.text2}>CEO</Text>
        </View>

        <View style={styles.botonesContainer}>
          {}
          <TextInput
            style={styles.Input}
            placeholder='Mensaje'
            value={inputText} 
            onChangeText={text => setInputText(text)} 
          />

          <TouchableOpacity style={styles.boton} onPress={showAlert}>
            <Text>Contactar</Text>
          </TouchableOpacity>

          <Pressable style={styles.boton2} onPress={cambiarFondo}>
            <Text>Ver perfil</Text>
          </Pressable>
        </View>

        <StatusBar style='light' />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1, 
    width: '100%',
    height: '100%',
  },
  image: {
    width: '45%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: '50%'
  },
  text: {
    borderColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30
  },
  text2: {
    borderColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    fontSize: 30
  },
  Input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
    backgroundColor: 'white',
    width: '40%',
    padding: 10,
  },
  boton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
    backgroundColor: 'white',
    padding: 10,
  },
  boton2: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '55%',
    backgroundColor: 'white',
    padding: 10,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombreContainer: {
    flex: 2,
  },
  botonesContainer: {
    flex: 5,
    justifyContent: 'center',
  }
});
