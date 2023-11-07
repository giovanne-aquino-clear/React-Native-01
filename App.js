import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
  } from 'react-native';

  import {Picker} from '@react-native-picker/picker';
 import Slider from '@react-native-community/slider';
class App extends Component{

  constructor(props){
    super(props)
    this.state = { 
      valor: 0
    };
  }

  render(){

    return(
      <View style={styles.container}>

        <Slider 
          minimumValue={0}
          maximumValue={100}
          onValueChange={ (valorSelecionado)=> this.setState({valor: valorSelecionado}) }
          value={this.state.valor}
          />

        <Text style={styles.bar}>
          {this.state.valor.toFixed(1)}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    backgroundColor: 'white'
  },
  bar:{
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold'
  }
});

export default App;


