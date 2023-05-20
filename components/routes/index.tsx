import * as React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


const Stack = createStackNavigator()
import { Signin } from "../../pages/Signin/index.js";
import { Signup } from "../../pages/Signin/signup.js";
import {SignUpType} from "../../pages/Signin/signUpType.js";
import {SignupService} from "../../pages/Signin/signUpService.js";
import {AdressSignUp} from "../../pages/Signin/adressSignUp.js";
 
 export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen  options={{ headerShown: false }} name="login" component={Signin}/>
                <Stack.Screen  options={{ headerShown: false }} name="preCadastro" component={SignUpType}/>
                <Stack.Screen  options={{ headerShown: false }} name="cadastrar" component={Signup}/>
                <Stack.Screen  options={{ headerShown: false }} name="cadastrarService" component={SignupService}/>
                <Stack.Screen  options={{ headerShown: false }} name="adress" component={AdressSignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
 }
