import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.enviar = this.enviar.bind(this);
  }

  enviar(){
    if(this.state.input === ''){
      alert('Digite seu  nome!');
      return;
    }
   
    this.setState({nome: "Bem vindo:" + this.state.input});
  }


  render(){
    return(
      <View style={styles.container}>

        <TextInput // form de texto
        style={styles.input}//aplica estilo
        placeholder="Digite seu nome?"// define texto padrão 
        onChangeText={(texto)=> this.setState({input:texto})}
        />

        <Button 
          onPress={this.enviar}
          title= "enviar"
        />

        <Text style={styles.texto}>{this.state.nome}</Text> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
});



export default App;