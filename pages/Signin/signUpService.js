import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';
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


export function SignupService() {
  const navigation = useNavigation()

  const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 60,
    width: 290,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 16,
    color: 'blue',
  },
});

  const [selectedValue, setSelectedValue] = useState('');

  return(
    <KeyboardView style={{backgroundColor: 'blue', height: 2000}}>
      <Container style={{ backgroundColor: '#081038', borderRadius: 12, maxHeight: 700}}>
        <Container >
        <Text style={{ color: 'white', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Spot</Text>
        <Text style={{ color: '#F7C425', fontSize: 32, fontWeight:'bold', textAlign: 'center' }}>Less</Text>
        </Container>
        <Container style={{height: 2000}} >
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
        <View style={{}}>
        <Picker
        style={styles.picker}
        itemStyle={styles.item}
        mode="dropdown"
        prompt="Selecione uma opção"
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Marceneiro" value="Marceneiro" />
            <Picker.Item label="Encanador" value="Encanador" />
            <Picker.Item label="Pedreiro" value="Pedreiro" />
        </Picker>
        </View>
        <br></br>
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

export default SignupService