import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { Firebase } from './Firebase';

export default class Signup extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     password: '',
  //     name: '',
  //     address: '',
  //     picture: '',
  //     username: '',
  //     loading: false
  //   };
  // }

  state = {
    Uname: '',
    Uaddress: '',
    Uusername: 'nisam setovan',
    Upassword: '',
    Uimg: ''
  }

  login() {
    Actions.login();
  };

  register = () => {
    let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'student' };
    global.user.push(newUser);
    Actions.login();
  };

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to StudentTuorsitApp</Text>
        </View>

        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>Register to continue or &nbsp;
          <Text style={styles.login} onPress={this.login}>Login</Text></Text>
        </View>

        <View style={styles.formView}>

          <ScrollView>

            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Name"
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.name = input}
              onChangeText={name => this.setState({ Uname: name })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Username"
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.username = input}
              onChangeText={username => this.setState({ Uusername: username })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Address"
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.address = input}
              onChangeText={address => this.setState({ Uaddress: address })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Picture url"
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.picture = input}
              onChangeText={picture => this.setState({ Uimg: picture })}
            />

            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#3f507c"
              returnKeyType="go"
              ref={(input) => this.password = input}
              secureTextEntry={true}
              onChangeText={password => this.setState({ Upassword: password })}
            />
            <TouchableOpacity style={styles.register} onPress={this.register}>
              <Text style={styles.registerText}> Register </Text>
            </TouchableOpacity>

          </ScrollView>

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
    backgroundColor: '#f08a5d',
  },

  titleView: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingBottom: 5,
    alignItems: 'center'
  },

  subtitleView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },

  login: {
    fontSize: 17,
    color: '#36456b',
    fontWeight: 'bold'
  },

  register: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#36456b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    alignSelf: 'center',
    borderColor: '#2d3a5a',
    borderWidth: 1
  },

  registerText: {
    color: '#ee7946',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  formView: {
    flex: 5,
    width: '100%',
    height: '100%',
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

  loginText: {
    color: '#36456b',
    textAlign: 'center',
  }

})