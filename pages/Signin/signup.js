import React from 'react';
import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export function Signup() {
  const navigation = useNavigation()

  return(
    <KeyboardView>
      <Header />
      <Container>
        <Title>Cadastre-se</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="Nome"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Confirmar Senha"
          secureTextEntry
        />
        <Button title='cadastre-se' onPress={() => navigation.navigate('login')} />
      </Container>
    </KeyboardView>
  )
}

export default Signup;