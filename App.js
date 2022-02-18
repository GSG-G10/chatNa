import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import navigationTheme from "./app/components/routes/navigationTheme";
import { navigationRef } from "./app/components/routes/rootNavigation";
import colors from './app/config/colors';
import { AuthNavigator } from "./app/components/routes/authNavigator";
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={navigationTheme} ref={navigationRef}>
         <AuthNavigator />
        </NavigationContainer>
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
