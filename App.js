import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){// verifica o tamanho do texto digitado para que seja maior q 0
      this.setState({nome: 'Bem vindo: ' + texto});// set state altera valor
    }else{
      this.setState({nome: ''})
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <TextInput // form de texto
        style={styles.input}//aplica estilo
        placeholder="Digite seu nome?"// define texto padrão 
        onChangeText={this.pegaNome}//usa a função do input "onChangeText"(quando houver alteração no texto) para chamar a função "pegaNome"
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