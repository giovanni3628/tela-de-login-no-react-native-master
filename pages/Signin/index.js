import React from 'react';
import { 
  KeyboardView, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/Header';
import { Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Signin() {
  const navigation = useNavigation()

  return(
    <KeyboardView style={{backgroundColor: 'blue'}}>
      <Container>
        <Container>
        <View>
          <Image style={{color: 'white'}} source={require('../../assets/splash.png')} />
        </View>

        <Text style={{ color: 'white', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Spot</Text>
        <Text style={{ color: '#F7C425', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Less</Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold', textAlign: 'center' }}>Seu trabalho impecável</Text>
        </Container>
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
        <ButtonSubmit style={{backgroundColor: 'white'}} onPress={() => navigation.navigate('preCadastro')}>
          <TextButton style={{color: 'blue'}}>
            Entrar
          </TextButton>
        </ButtonSubmit>
        <Text 
        style={{ 
          padding: 18,
          color: 'white', 
          fontSize: 20, 
          fontWeight:'bold', 
          textAlign: 'center' 
          }}
          >Não possui uma conta?</Text>
          <ButtonSubmit style={{backgroundColor: 'blue'}} onPress={() => navigation.navigate('preCadastro')}>
          <TextButton style={{color: 'yellow'}}>
          Cadastre-se
          </TextButton>
        </ButtonSubmit>
       
      </Container>
    </KeyboardView>
  )
}

export default Signin;