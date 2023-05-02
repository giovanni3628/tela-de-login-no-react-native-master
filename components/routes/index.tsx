import * as React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


const Stack = createStackNavigator()
import { Signin } from "../../pages/Signin/index.js";
import { Signup } from "../../pages/Signin/signup.js";
 export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="cadastrar">
                <Stack.Screen name="login" component={Signin}/>
                <Stack.Screen name="cadastrar" component={Signup}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
 }
