import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class Signup extends React.Component {

  state = {
    Uname: '',
    Uaddress: '',
    Uusername: 'nisam setovan',
    Upassword: '',
    Uimg: '',

    usernameExists: false
  }

  login() {
    Actions.login();
  };

  register = () => {
    if (this.state.Uname != '' && this.state.Upassword != '' && this.state.Uusername != '') {

      for (let i = 0; i < global.user.lenght; i++) {

        if (global.user[i].username == this.state.Uusername) {
          this.setState({ usernameExists: true })
        }
      };
      
//provera za isti username - ne radi
      if (this.state.usernameExists) {
        Alert.alert('Username already exists.')

      } else {
//nema username isti, kreiraj ga
        if (this.state.Uimg == '') {
          let newUser = { img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'student' };
          global.user.push(newUser);
          Actions.login();
        } else {
          let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'student' };
          global.user.push(newUser);
          Actions.login();
        }
      };

    } else {
      Alert.alert('You have to fill in Name, Username and Password fields to submit.')
    }
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

          <KeyboardAwareScrollView
           scrollEnabled={true}
           resetScrollToCoords={{ x: 0, y: 0 }} >
           

            <Text style={{ flex: 1, paddingBottom: 15, color: '#35446b', fontStyle: 'italic', textAlign: 'left', fontSize: 12 }}> All fields marked with an asterisk (*) are required.</Text>


            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="* Full Name"
              placeholderTextColor="#35446b"
              returnKeyType="go"
              ref={(input) => this.name = input}
              onChangeText={name => this.setState({ Uname: name })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="* Username"
              placeholderTextColor="#35446b"
              returnKeyType="go"
              ref={(input) => this.username = input}
              onChangeText={username => this.setState({ Uusername: username })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="* Password"
              secureTextEntry={true}
              placeholderTextColor="#35446b"
              returnKeyType="go"
              ref={(input) => this.password = input}
              secureTextEntry={true}
              onChangeText={password => this.setState({ Upassword: password })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Address"
              placeholderTextColor="#35446b"
              returnKeyType="go"
              ref={(input) => this.address = input}
              onChangeText={address => this.setState({ Uaddress: address })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Picture url"
              placeholderTextColor="#35446b"
              returnKeyType="go"
              ref={(input) => this.picture = input}
              onChangeText={picture => this.setState({ Uimg: picture })}
            />

            <TouchableOpacity style={styles.register} onPress={this.register}>
              <Text style={styles.registerText}> Register </Text>
            </TouchableOpacity>

          </KeyboardAwareScrollView>

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
    color: '#1c2338',
    fontWeight: 'bold'
  },

  register: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#1c2338',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    alignSelf: 'center',
    borderColor: '#35446b',
    borderWidth: 1
  },

  registerText: {
    color: '#f08a5d',
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
    color: '#1c2338',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

  input: {
    width: '100%',
    height: 40,
    marginBottom: 15,
    backgroundColor: '#fdf3ee',
    textAlign: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#1c2338',
  },

  subtitle: {
    fontSize: 17,
    color: '#35446b',
  },

  loginText: {
    color: '#35446b',
    textAlign: 'center',
  }

})