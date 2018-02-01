import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Signup extends React.Component {

  login() {
    Actions.login();
  };

  register() {
    Actions.student();
  };

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to StudentTuorsitApp</Text>
        </View>

        <View style={styles.formView}>
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Name"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.name = input}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="E-mail"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.email = input}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Address"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.passwadressord = input}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Picture url"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.picture = input}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.username = input}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.password = input}
          />
          <TouchableOpacity style={styles.register} onPress={this.register}>
            <Text style={styles.registerText}> Register </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>Register to continue or &nbsp;
          <Text style={styles.login} onPress={this.login}>Login</Text></Text>
        </View>

        <View style={styles.footerView}>
          <Text style={styles.footer}>by Dragana Mitrovic</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283C63',
  },

  titleView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  subtitleView: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  login: {
    fontSize: 17,
    color: '#F85F73',
    fontWeight: 'bold'
  },

  register: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#F85F73',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  registerText: {
    color: '#283C63',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  formView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footerView: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 10
  },

  footer: {
    textAlign: 'right',
    color: '#928A97',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

  input: {
    width: 230,
    height: 40,
    marginBottom: 15,
    backgroundColor: '#F0FFF3',
    textAlign: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#F85F73',
  },

  subtitle: {
    fontSize: 17,
    color: '#928A97',
  },

  loginText: {
    color: '#283C63',
    textAlign: 'center',
  }

})