import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Login extends React.Component {

  signup() {
    Actions.signup()
  };

  login() {
    Actions.student();
  };

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to StudentTuorsitApp</Text>
        </View>

        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>Login to continue or&nbsp;
          <Text style={styles.register} onPress={this.signup}>Register</Text></Text>
        </View>

        <View style={styles.formView}>
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
          <TouchableOpacity style={styles.login} onPress={this.login}>
            <Text style={styles.loginText}> Login </Text>
          </TouchableOpacity>
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
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  subtitleView: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  register: {
    fontSize: 17,
    color: '#F85F73',
    fontWeight: 'bold'
  },

  formView: {
    flex: 1,
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

  login: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#F85F73',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  loginText: {
    color: '#283C63',
    textAlign: 'center',
    fontWeight: 'bold'
  }

})