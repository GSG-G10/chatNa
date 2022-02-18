import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/Login";
import Welcome from "../../screens/Welcome";
import ChatScreen from "../../screens/Chat";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={routes.CHAT}
        component={ChatScreen}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};
