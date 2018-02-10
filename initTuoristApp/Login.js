import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, ScrollView, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { Firebase } from './Firebase';
//import { Dialog } from 'react-native-simple-dialogs';

export default class Login extends React.Component {

  state = {
    username: '',
    password: '',
    error: '',
  };

  signup() {
    Actions.signup()
  };

  login = () => {

    for (let i = 0; i < global.user.length; i++) {

      if (global.user[i].username === this.state.username && global.user[i].password == this.state.password) {
        switch (global.user[i].type) {
          case 'admin':
            return Actions.admin()
            break;
          case 'organisator':
            return Actions.organisator({organisatorName: global.user[i].name})
            break;
          case 'student':
            return Actions.student({studentName: global.user[i].name})
            break;
        }
      }
    }
    Alert.alert('You have entered an invalid username or password')
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

        <ScrollView>
          <View style={styles.formView}>
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Username"
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.username = input}
              onChangeText={username => this.setState({ username: username })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.password = input}
              onChangeText={password => this.setState({ password: password })}
            />

            <TouchableOpacity style={styles.login} onPress={this.login}>
              <Text style={styles.loginText}> Login </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

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
    backgroundColor: '#f08a5d',
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
    color: '#36456b',
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
    color: '#3f507c',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

  input: {
    width: 230,
    height: 40,
    marginBottom: 15,
    backgroundColor: '#FBE4DA',
    textAlign: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#36456b',
  },

  subtitle: {
    fontSize: 17,
    color: '#3f507c',
  },

  login: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#36456b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    borderColor: '#2d3a5a',
    borderWidth: 1
  },

  loginText: {
    color: '#ee7946',
    textAlign: 'center',
    fontWeight: 'bold'
  }

})