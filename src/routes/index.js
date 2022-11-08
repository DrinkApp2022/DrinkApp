import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/Inicio";
import ListaProduto from "../pages/ListaProduto";
import CadastroProduto from "../pages/CadastroProduto";

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
            <Stack.Screen
                name="CadastroProduto"
                component={CadastroProduto}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}