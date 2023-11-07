import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Switch
  } from 'react-native';

  import {Picker} from '@react-native-picker/picker';
 import Slider from '@react-native-community/slider';
class App extends Component{

  constructor(props){
    super(props)
    this.state = { 
      status: false
    };
  }

  render(){

    return(
      <View style={styles.container}>

        <Switch 
          value={this.state.status}
          onValueChange={(valorSwitch)=> this.setState({status: valorSwitch})}
        />

        <Text>
        {(this.state.status) ? "Ativo" : "Inativo"}

        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    backgroundColor: 'white',
    alignItems:'center'
    
  },
  bar:{
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold'
  }
});

export default App;


