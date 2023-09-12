import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './componentes/Profile';




export default function App() {
  return (
    <View style={styles.container}>
      <Profile
        imgUri='https://www.fakepersongenerator.com/Face/female/female20141023819184601.jpg'
        genero='Feminino'
        nome='Brenda R Lutera'
        email='cathrine19@hotmail.com'
        telefone='630-337-6439'
      />
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
});