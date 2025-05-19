import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
const imgExterna = {uri: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg'}
const imgPerfil = {uri: 'https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-argentinien-2022-1698689902-120754.jpg'}
export default function App() {
  return (
    <View style={[
      styles.container,{flexDirection:'column',},
    ]}>   
      <View style={{flex:1}}>
      <ImageBackground
      source={imgExterna}
      resizeMode='cover'
      style={styles.backgroundImage}>
         <Image style={styles.image} source={imgPerfil} />
         <Text style={styles.text}>LIONEL MESSI</Text>
         <Text style={styles.text2}>CEO</Text>
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

    fontSize:'40px'
  },
  text2:{
    borderColor:'black',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'45%',
    fontSize:'30px'
  }
});
