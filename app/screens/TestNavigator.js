import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { LinearGradient, Font } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator, createBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { ButtonTest } from '../components/ButtonTest/ButtonTest';
import  Title  from '../components/Title/Title';
import  ButtonConnection  from '../components/ButtonConnection/ButtonConnection';

export default class TestNavigator extends React.Component {

  render() {    
    return (
      <View style={{ flex: 1 , flexDirection: 'row'}}>
        <View style={{ backgroundColor: '#5de2b4', flexDirection: 'row' }} />        
        <LinearGradient colors={['rgba(0,255,255,0.7)', '#42af70']} style={styles.container}>      
            <Title/>
            <Text style={styles.textStyle}>enculé</Text>
        </LinearGradient>                 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',    
    height: "100%",
    width: "100%",    
  },
  textStyle: {
    fontSize: 64,
    color: 'white',
  },
});
