import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/Inicio";
import ListaProduto from "../pages/ListaProduto";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListaProduto"
                component={ListaProduto}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}