import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import colors from './app/config/colors';
import LoginScreen from './app/screens/Login'; 

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.primary
  },
});
