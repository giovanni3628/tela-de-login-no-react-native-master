import React from 'react';
import { 
  KeyboardView, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/Header';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Signup() {
  const navigation = useNavigation()

  return(
    <KeyboardView style={{backgroundColor: 'blue', height: 2000}}>
      <Container style={{ backgroundColor: '#081038', borderRadius: 12, maxHeight: 700}}>
        <Container >
        <Text style={{ color: 'white', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Spot</Text>
        <Text style={{ color: '#F7C425', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Less</Text>
        </Container>
        <Container style={{}} >
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Nome"
        />

        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="E-mail"
        />

        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Senha"
          secureTextEntry
        />
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Confirmar Senha"
          secureTextEntry
        />
        <ButtonSubmit style={{backgroundColor: 'white'}} onPress={() => navigation.navigate('adress')}>
          <TextButton style={{color: 'blue'}}>
            Cadastrar
          </TextButton>
        </ButtonSubmit>
        </Container>
      </Container>
    </KeyboardView>
  )
}

export default Signup