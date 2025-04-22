import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoScreen from "./pages/ToDoScreen";
import TesteScreen from "./pages/TesteScreen";
import BuscaCep from "./pages/BuscaCep";

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={ToDoScreen} 
      />
      <Stack.Screen
        name="teste"
        component={TesteScreen} 
      />
      <Stack.Screen
        name="busca"
        component={BuscaCep} 
      />
    </Stack.Navigator>
  </NavigationContainer>
}
