import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
const imgExterna = {uri: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg'}
const imgPerfil = {uri: 'https://img.freepik.com/vector-premium/icono-imagen-perfil-avatar-fondo-azul-estilo-diseno-plano-recursos-diseno-elementos-graficos_991720-653.jpg'}
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={imgExterna}
      resizeMode='cover'
      style={styles.backgroundImage}>
         <Image style={styles.image} source={imgPerfil} />
         <Text style={styles.text}>Lionel Messi</Text>
      </ImageBackground>
  
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
    width:'25%',
    height:'25%',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'auto',
  },
  text: {
    borderColor:'black',
    margin:''
  }
});
