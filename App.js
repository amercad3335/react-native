import { StyleSheet, Text, TextInput, View } from 'react-native';
import { mytexts } from './assets/css/styles';

export default function App() {
  return (
    <View style={[styles.container, styles.borders, { borderRadius: '10px' }]}>
      <Text style={ mytexts.texts }>Helo world!</Text>
      <TextInput placeholder='Ingrese nombre' style={{ margin: '12' }}></TextInput>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00f297'
  },
  borders: {
    borderWidth: 5,
    borderColor: 'green'
  }
});
