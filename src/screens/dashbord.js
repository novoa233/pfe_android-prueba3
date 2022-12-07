import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';
import NavBar from './layout/navbar';
import imagen from './img/dashboard.png';

class Dashboard extends Component {
  render() {
    return (
      <View>
      <NavBar title = "DASHBOARD" navigation = {this.props.navigation}></NavBar>
      <Text>Dashboard de protegetuempresa.cl</Text>
      <View style={style.container}>
      <image source={imagen} style={style.logo}/>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Dashboard;