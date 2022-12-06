import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/Inicio";
import CadastroUsuario from "../pages/CadastroUsuario";
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
                name="Cadastro de Usuário"
                component={CadastroUsuario}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Lista de Produtos"
                component={ListaProduto}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Cadastro de Produto"
                component={CadastroProduto}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}