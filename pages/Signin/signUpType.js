import React from 'react';
import { 
  KeyboardView, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/Header';
import { Text, Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function SignUpType() {
  const navigation = useNavigation()

  return(
    <KeyboardView style={{backgroundColor: 'blue'}}>
      <Container style={{ backgroundColor: '#081038', borderRadius: 12, maxHeight: 700}}>
        <Container >
        <Text style={{ color: 'white', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Spot</Text>
        <Text style={{ color: '#F7C425', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Less</Text>
        </Container>
        <Container style={{ padding: 12 }} >
        <View>
          <Image style={{color: 'white'}} source={require('../../assets/Vector.png')} />
        </View>
        <Text style={{ 
            color: 'white', 
            fontSize: 32, 
            fontWeight:'bold', 
            textAlign: 'center' 
            }}
            >Como você gostaria de se cadastrar?
            </Text>
            <br></br>
        <ButtonSubmit style={{backgroundColor: 'white', paddingBottom: 12}} onPress={() => navigation.navigate('cadastrar')}>
          <TextButton style={{color: 'gray'}}>
            Sou um cliente
          </TextButton>
        </ButtonSubmit>
        <br></br>
          <ButtonSubmit style={{backgroundColor: 'white', padding: 12}} onPress={() => navigation.navigate('cadastrarService')}>
          <TextButton style={{color: 'gray'}}>
            Sou um prestador de serviço
          </TextButton>
        </ButtonSubmit>
        </Container>
       
      </Container>
    </KeyboardView>
  )
}

export default SignUpType;