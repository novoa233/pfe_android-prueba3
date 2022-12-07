import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import NavBar from './layout/navbar';
import { Button } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

class Register extends Component {
  constructor(props){
    super(props)
    this.state={
        nombre : "",
        apellido : "",
        password : "",
        email : "",
        webPage : "",
        sexo : "",
        nacionalidad : "", 
        nacionalidades:[]
    }
  }
  componentDidMount = () =>{

  }
  handleChangeName = async (text) => {
    await this.setState({nombre: text});
  }
  handleChangeLastname = async (text) => {
    await this.setState({apellido: text});
  }
  handleChangePassword = async (text) => {
    await this.setState({password: text});
  }
  handleChangeEmail = async (text) => {
    await this.setState({email: text});
  }
  handleChangeWebpage = async (text) => {
    await this.setState({webPage: text});
  }
  handleChangeSexo = async (index) => {
    await this.setState({sexo: index});
  }
  handleChangeNacionalidad = async (index) => {
    await this.setState({nacionalidad: index});
  }
  handleRegister = async () => {
    console.log(this.state)
  }
  handleRegister = async () =>{
    console.log(this.state)
    var url = 'http://cftvalpo.ddns.net/user/createUser';
    var data = this.state;
    var init = {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(url, init ).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then( response => {
      console.log(response)
    }
    );
  }
  componentDidMount = async () =>{
        var url = 'http://cftvalpo.ddns.net/user/getNacionalidad'
        var init = {
            method: 'POST', 
        }
        await fetch(url, init ).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            this.setState({
                nacionalidades : response.nacionalidades
            })
           
        }
        );
       
    }
  render() {
    return (
      <View>
      <NavBar title = "REGISTER" navigation = {this.props.navigation}></NavBar>

      <TextInput
        label="Nombre"
        value={this.state.nombre}
        onChangeText={text => this.handleChangeName(text)}
      />
      <TextInput
        label="Apellido"
        value={this.state.apellido}
        type='password'
        onChangeText={text => this.handleChangeLastname(text)}
      />
      <TextInput
        label="Password"
        value={this.state.password}
        type='password'
        onChangeText={text => this.handleChangePassword(text)}
      />
      <TextInput
        label="Email"
        value={this.state.email}
        onChangeText={text => this.handleChangeEmail(text)}
      />
      <TextInput
        label="WebPage"
        value={this.state.webPage}
        onChangeText={text => this.handleChangeWebpage(text)}
      />
      <Picker
        selectedValue={this.state.sexo}
        onValueChange={(itemIndex) =>
          this.handleChangeSexo(itemIndex)
        }>
        <Picker.Item label="Femenino" value="0" />
        <Picker.Item label="Masculino" value="1" />
      </Picker>
      <Picker
        selectedValue={this.state.nacionalidad}
        onValueChange={(itemIndex) =>
          this.handleChangeNacionalidad(itemIndex)
        }>
        {
          this.state.nacionalidades.map(nacionalidad => (
            <Picker.Item label={nacionalidad.descripcion} value={nacionalidad.id} />
            )
          )
          }  
      </Picker>  



      <Button icon="human" mode="contained" onPress={this.handleRegister}>
        Registrar Usuario
      </Button>
      </View>
    );
  }
}

export default Register;