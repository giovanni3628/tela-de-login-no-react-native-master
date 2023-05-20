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


export function AdressSignUp() {
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
            <br></br>
        <Text style={{ 
            color: 'white', 
            fontSize: 24, 
            fontWeight:'bold', 
            textAlign: 'left' 
            }}
            >Olá, Giovanni</Text>
        <Text 
        style={{ 
            color: '#F7C425', 
            fontSize: 16, 
            fontWeight:'bold', 
            textAlign: 'left' 
            }}
            >Para finalizar o seu cadastro, precisamos do seu endereço. Por favor, forneça-nos essa informação.
            </Text>
        </Container>
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Estado"
        />
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Cidade"
          secureTextEntry
        />
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Rua"
          secureTextEntry
        />
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Número"
          secureTextEntry
        />
        <Input 
        style={{ 
          borderColor: 'white',
          backgroundColor: 'white'
        }}
          placeholderTextColor="gray"
          placeholder="Complemento"
          secureTextEntry
        />
        <ButtonSubmit style={{backgroundColor: 'white'}} onPress={() => navigation.navigate('preCadastro')}>
          <TextButton style={{color: 'blue'}}>
            Prosseguir
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

export default AdressSignUp;